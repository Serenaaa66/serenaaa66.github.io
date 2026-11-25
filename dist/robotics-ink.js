// Recolour only annotation regions in the page, retaining the coloured CAD image.
const regions={
  'robot-design-2023-24-transparent.webp':[[0,.90,1,.10]],
  'robot-design-2024-25-transparent.webp':[[0,.88,1,.12]],
  'ball-spring-damper-transparent.webp':[[0,.84,1,.16]],
  'robot-exploded-assembly-transparent.webp':[
    [.075,.27,.205,.065],[.275,.22,.065,.03],[.73,.18,.23,.06],
    [.71,.34,.25,.065],[.68,.425,.29,.075],[.025,.52,.193,.095],
    [.02,.79,.28,.065],[.25,.83,.10,.075],[.37,.915,.27,.045],
    [.62,.88,.34,.06],[.725,.825,.215,.045],[.785,.75,.205,.04]
  ]
};
let sequence=0;
export function mountRoboticsInkOverlay(frame,image){
  const boxes=regions[(image.getAttribute('src')||'').split('/').at(-1)];
  if(!boxes)return;
  const ns='http://www.w3.org/2000/svg',id='robotics-ink-'+(++sequence);
  const svg=document.createElementNS(ns,'svg'),defs=document.createElementNS(ns,'defs'),clip=document.createElementNS(ns,'clipPath');
  svg.setAttribute('width','0');svg.setAttribute('height','0');svg.setAttribute('aria-hidden','true');
  svg.style.position='absolute';svg.style.pointerEvents='none';
  clip.setAttribute('id',id);clip.setAttribute('clipPathUnits','objectBoundingBox');
  for(const [x,y,width,height] of boxes){const rect=document.createElementNS(ns,'rect');for(const [key,value] of Object.entries({x,y,width,height}))rect.setAttribute(key,String(value));clip.append(rect);}
  defs.append(clip);svg.append(defs);
  const overlay=image.cloneNode();overlay.removeAttribute('id');overlay.alt='';overlay.setAttribute('aria-hidden','true');overlay.className='robotics-ink-overlay';overlay.style.clipPath=`url(#${id})`;
  frame.append(svg,overlay);
}
