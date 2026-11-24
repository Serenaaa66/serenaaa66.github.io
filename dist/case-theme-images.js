// A single observer per active story also updates the image-strip clones.
// Disposing the story releases it, so repeated visits never accumulate work.
export function themeImageSource(light,dark,theme){return theme==='light'?light:dark||light;}
export function mountCaseThemeImages({host,root,Observer,baseUrl}){
  if(!host.querySelectorAll('img[data-theme-light-src]').length)return ()=>{};
  root??=document.documentElement;Observer??=MutationObserver;baseUrl??=location.href;
  const update=()=>{
    const theme=root.dataset.theme==='light'?'light':'dark';
    for(const image of host.querySelectorAll('img[data-theme-light-src]')){
      const source=themeImageSource(image.dataset.themeLightSrc,image.dataset.themeDarkSrc,theme);
      if(image.getAttribute('src')!==source)image.setAttribute('src',source);
      const link=image.closest('a');
      if(link?.dataset.themeViewer){
        const viewer=new URL(link.href,baseUrl);
        viewer.searchParams.set('src',new URL(source,baseUrl).pathname);
        viewer.searchParams.set('theme',theme);
        link.href=viewer.href;
      }
    }
  };
  update();
  const observer=new Observer(update);
  observer.observe(root,{attributes:true,attributeFilter:['data-theme']});
  return ()=>observer.disconnect();
}
