// Native inline players. Only explicitly opted-in films start on scroll;
// manual Segway players retain their existing behaviour.
export function mountCaseVideos(videos,{Observer=globalThis.IntersectionObserver,visibilityTarget=globalThis.document}={}){
  if(!videos.length)return ()=>{};
  let disposed=false;
  const states=new Map(videos.map(video=>[video,{
    auto:video.dataset?.autoplayOnView==='true',visible:false,pending:false,resume:false
  }]));
  const start=(video,state)=>{
    if(disposed||!state.visible||visibilityTarget.hidden||state.pending||video.ended||!video.paused)return;
    state.pending=true;
    try{
      Promise.resolve(video.play()).then(()=>{
        state.pending=false;
        // A slow play request must not restart a departed/hidden story.
        if(disposed||!state.visible||visibilityTarget.hidden)video.pause();
      },()=>{state.pending=false;});
    }catch{state.pending=false;}
  };
  const pauseAll=()=>videos.forEach(video=>video.pause());
  const onVisibility=()=>{
    if(visibilityTarget.hidden){
      for(const [video,state] of states)state.resume=state.auto&&state.visible&&(!video.paused||state.pending);
      pauseAll();
    }else{
      for(const [video,state] of states){const resume=state.resume;state.resume=false;if(resume)start(video,state);}
    }
  };
  const observer=Observer?new Observer(entries=>{
    if(disposed)return;
    for(const entry of entries){
      const video=entry.target,state=states.get(video);
      if(!state)continue;
      if(!state.auto){if(!entry.isIntersecting)video.pause();continue;}
      const ratio=entry.isIntersecting?(entry.intersectionRatio??1):0;
      if(ratio<=.1){state.visible=false;state.resume=false;video.pause();}
      else if(!state.visible&&ratio>=.35){
        state.visible=true;
        if(visibilityTarget.hidden)state.resume=true;else start(video,state);
      }
      // Remaining inside the viewport never overrides a manual pause.
    }
  },{threshold:[0,.1,.35]}):null;
  videos.forEach(video=>observer?.observe(video));
  visibilityTarget.addEventListener('visibilitychange',onVisibility);
  return ()=>{if(disposed)return;disposed=true;observer?.disconnect();visibilityTarget.removeEventListener('visibilitychange',onVisibility);pauseAll();};
}
