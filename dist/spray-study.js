import {reportPreviews} from './report-previews.js';

// Source: WHYYYYY SPRAY.pdf, all 14 physical pages, in their original order.
// The project is a tested design prototype, not a deployed station installation
// or a clinically validated mental-health intervention.
const media='./assets/projects/spray/';
const report=reportPreviews.spray;

export const sprayProject={
  id:'spray',art:9,demo:false,
  name:'SPRAY',discTitle:'SPRAY',discSubtitle:'PLAYFUL COMMUTER EXPERIENCES',
  year:'2025',category:'Human-Centred Design Engineering',
  cover:media+'fountain-concept.webp',coverInk:'#202320',
  coverCrop:{fit:'disc',zoom:1.06,background:'#dce7e5'},
  hero:media+'fountain-concept.webp',heroFit:'contain',
  heroAlt:'SPRAY fountain concept with eight water jets and ground buttons surrounding four player statues',
  overview:'A walk-up fountain memory game designed around waiting commuters',
  description:'User research and iterative prototypes turn water, light and sound into a short, shared moment of play.',
  headline:'A little play between trains.',
  lede:'SPRAY is a walk-up fountain memory game for commuters waiting at train stations. Ground buttons turn sequences of water, light and sound into a short, shared moment of play, shaped for tired people with bags to carry and a train to catch.',
  collection:'Human-Centred Design',
  credits:[
    ['RESEARCH','Surveys · Journey Mapping · User Testing'],
    ['PROTOTYPING','Fusion 360 · 3D Printing · Raspberry Pi · Arduino']
  ],
  caseStudy:{
    chapters:[{
      label:'Human-centred design',
      title:'Designed around the person waiting.',
      intro:'Journey mapping, a vote on 15 concepts and storyboard tests at the station focused the brief on short, low-effort play with no equipment to wear. Breadboard, mid-fidelity and 1:20-scale prototypes helped refine the memory sequence, simultaneous multiplayer and audio cues. Testing shifted the interaction towards simpler shapes, clearer starts and an automatic reset, while Fusion 360 modelling, 3D printing and Raspberry Pi / Arduino electronics brought the concept into a working physical prototype.',
      notes:[['Team','Stanley Liu · Siyi Yu · Unico Yin · Zipei Weng · Zhuangyi Huang']],
      figures:report.pages
    }],
    resourcesLabel:'Project report',
    links:[{label:'Download full report · PDF',href:report.href,download:report.filename}]
  }
};
