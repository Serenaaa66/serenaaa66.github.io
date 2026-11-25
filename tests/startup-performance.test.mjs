import test from 'node:test';
import assert from 'node:assert/strict';
import {loadTypography} from '../dist/typography.js';

test('published typography uses embedded configuration without a blocking request',async()=>{
  const original={document:globalThis.document,fetch:globalThis.fetch,location:globalThis.location};
  let requests=0;
  globalThis.fetch=async()=>{requests++;throw Error('Unexpected configuration request');};
  globalThis.location={hostname:'example.com'};
  globalThis.document={
    getElementById:()=>({textContent:JSON.stringify({privateEvaluation:{title:'./title.woff2',interface:'./interface.woff2',label:'./label.woff2'}})}),
    createElement:()=>({}),head:{append(){}},
    fonts:{load:async()=>[{status:'loaded'}]},
    documentElement:{style:{setProperty(){}},dataset:{}}
  };
  try{
    const result=await loadTypography();
    assert.equal(requests,0);
    assert.equal(result.title.file,'./title.woff2');
    assert.equal(result.interface.file,'./interface.woff2');
    assert.equal(result.label.file,'./label.woff2');
  }finally{Object.assign(globalThis,original);}
});
