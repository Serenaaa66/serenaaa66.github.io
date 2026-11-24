import {mountCaseImageStrip} from './case-image-strip.js';
import {mountCaseVideos} from './case-video.js';
import {renderPIDControl} from './pid-control.js';
import {mountCaseThemeImages,themeImageSource} from './case-theme-images.js';

const make = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};

const externalLink = (href, label, className) => {
  const link = make('a', className, label);
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
};

function resultsTable({caption, columns, rows}) {
  const table = make('table', 'case-results');
  const head = make('thead'), headings = make('tr'), body = make('tbody');
  for (const label of columns) {
    const th = make('th', '', label);
    th.scope = 'col';
    headings.append(th);
  }
  head.append(headings);
  for (const [label, ...values] of rows) {
    const row = make('tr'), name = make('th', '', label);
    name.scope = 'row';
    row.append(name, ...values.map(value => make('td', '', value)));
    body.append(row);
  }
  table.append(make('caption', 'case-label', caption), head, body);
  return table;
}

function videoFigure({src,poster,width,height,caption,autoplayOnView=false},index){
  const figure=make('figure','case-figure case-figure--wide case-video-figure');
  if(width>height)figure.classList.add('case-video-figure--landscape');
  figure.style.setProperty('--figure-ratio',width/height);
  const frame=make('div','case-figure-link case-video-frame');
  const video=make('video','case-video');
  video.controls=true;video.playsInline=true;video.preload='none';
  if(autoplayOnView){
    video.dataset.autoplayOnView='true';video.muted=true;video.defaultMuted=true;
    video.setAttribute('muted','');video.setAttribute('playsinline','');
  }
  video.width=width;video.height=height;video.poster=poster;video.src=src;
  video.setAttribute('aria-label',caption);
  video.append(document.createTextNode('Your browser does not support inline video.'));
  frame.append(video);
  const legend=make('figcaption');
  legend.append(make('span','case-label',`Film ${String(index).padStart(2,'0')}`),make('span','',caption));
  figure.append(frame,legend);return figure;
}

function galleryFigure({type, poster, src, darkSrc, smallSrc, width, height, caption, wide, maxWidth, background, borderless, inkDrawing, transparentArt, themeInkWidth, darkSurface, viewerSurface, page, diagram, brandMark, autoplayOnView}, index) {
  if(type==='video')return videoFigure({src,poster,width,height,caption,autoplayOnView},index);
  const figure = make('figure', wide ? 'case-figure case-figure--wide' : 'case-figure');
  if(borderless)figure.classList.add('case-figure--floating');
  if(inkDrawing)figure.classList.add('case-figure--ink');
  if(transparentArt)figure.classList.add('case-figure--artwork');
  if(diagram){figure.classList.add('case-figure--diagram');figure.style.setProperty('--diagram-width',`${width}px`);}
  if(brandMark)figure.classList.add('case-figure--brand');
  const inkWidth = Number(themeInkWidth);
  const hasThemeInk = transparentArt && inkWidth > 0 && inkWidth <= 100;
  if(hasThemeInk)figure.style.setProperty('--art-ink-width',`${inkWidth}%`);
  figure.style.setProperty('--figure-ratio', width / height);
  if(maxWidth){figure.style.maxWidth=`${maxWidth}px`;figure.style.setProperty('--figure-width',`${maxWidth}px`);}
  const displayedSrc=darkSrc?themeImageSource(src,darkSrc,document.documentElement.dataset.theme):src;
  const link = externalLink(displayedSrc, '', 'case-figure-link');
  if (darkSurface || inkDrawing || transparentArt || darkSrc || brandMark) {
    const viewer = new URL('./image-viewer.html', location.href);
    viewer.searchParams.set('src', new URL(displayedSrc, location.href).pathname);
    viewer.searchParams.set('caption', caption);
    if (viewerSurface === 'navy') viewer.searchParams.set('surface', 'navy');
    if (inkDrawing || transparentArt || darkSrc || brandMark) {
      viewer.searchParams.set('drawing', inkDrawing ? 'ink' : darkSrc ? 'theme' : brandMark ? 'brand' : 'artwork');
      viewer.searchParams.set('theme', document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
      if(hasThemeInk)viewer.searchParams.set('inkWidth',String(inkWidth));
    }
    link.href = viewer.href;
    if(darkSrc)link.dataset.themeViewer='true';
  }
  if (background) link.style.backgroundColor = background;
  link.setAttribute('aria-label', `View full-size image: ${caption}`);
  const img = make('img');
  img.alt = caption;
  img.width = width;
  img.height = height;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.draggable = false;
  img.src = displayedSrc;
  if(darkSrc){img.dataset.themeLightSrc=src;img.dataset.themeDarkSrc=darkSrc;}
  const expand = make('span', 'case-figure-expand', '↗');
  expand.setAttribute('aria-hidden', 'true');
  if (smallSrc) {
    const picture = make('picture');
    const mobile = make('source');
    mobile.media = '(max-width: 700px)';
    mobile.srcset = smallSrc;
    picture.append(mobile, img);
    link.append(picture, expand);
  } else link.append(img, expand);
  if(hasThemeInk){
    const ink = img.cloneNode();
    ink.className='case-artwork-ink';ink.alt='';ink.setAttribute('aria-hidden','true');
    link.append(ink);
  }
  const legend = make('figcaption');
  legend.append(make('span', 'case-label', `${page ? 'Page' : 'Fig.'} ${String(page || index).padStart(2, '0')}`), make('span', '', page ? 'Engineering report' : caption));
  if(diagram)legend.append(make('span','case-diagram-hint','Swipe to read ↔'));
  figure.append(link, legend);
  return figure;
}

function imageStrip(figures, label) {
  const root = make('div', 'case-reel');
  const controls = make('div', 'case-reel-controls');
  const hint = make('span', 'case-label', 'Drag or swipe ↔');
  const toggle = make('button', 'case-reel-toggle', 'Pause');
  toggle.type = 'button';
  controls.append(hint, toggle);
  const viewport = make('div', 'case-reel-viewport');
  viewport.tabIndex = 0;
  viewport.setAttribute('role', 'group');
  viewport.setAttribute('aria-label', `${label} images. Use the left and right arrow keys to browse.`);
  const track = make('div', 'case-reel-track');
  const cycle = make('div', 'case-reel-cycle');
  cycle.append(...figures);
  track.append(cycle);
  viewport.append(track);
  root.append(controls, viewport);
  return {root, viewport, track, cycle, toggle, label};
}

export function renderProjectCaseStudy(host, {chapters, links, resourcesLabel = 'Report & source', report}, {scroller, reducedMotion}) {
  const content = document.createDocumentFragment();
  const strips = [];
  let figureIndex = 0;
  chapters.forEach(({label, title, intro, notes, acknowledgements, results, figures, figureGroups, pid, layout, transitionQuote, testimony}, index) => {
    const section = make('section', 'case-chapter');
    if(layout==='image-led')section.classList.add('case-chapter--image-led');
    if(layout==='storyboard')section.classList.add('case-chapter--storyboard');
    if(transitionQuote)section.append(make('blockquote','case-transition-quote',transitionQuote));
    const heading = make('header', 'case-chapter-heading');
    heading.append(make('span', 'case-label', `${String(index + 1).padStart(2, '0')} / ${label}`), make('h3', '', title));
    const copy = make('div', 'case-chapter-copy');
    for(const paragraph of Array.isArray(intro)?intro:[intro])copy.append(make('p', '', paragraph));
    if (notes?.length) {
      const list = make('dl', 'case-notes');
      if(notes.some(note=>note[2]))list.classList.add('case-notes--illustrated');
      for (const [title, detail, icon] of notes) {
        const note = make('div');
        if(icon){const image=make('img','case-note-icon');image.src=icon.src;image.width=icon.width;image.height=icon.height;image.alt='';image.loading='lazy';image.decoding='async';note.append(image);}
        note.append(make('dt', '', title), make('dd', '', detail));
        list.append(note);
      }
      copy.append(list);
    }
    if(acknowledgements?.length){
      const thanks=make('section','case-acknowledgements');
      const list=make('ul');
      for(const {name,href,contribution} of acknowledgements){
        const row=make('li');
        row.append(externalLink(href,name,'case-inline-link'),document.createTextNode(` — ${contribution}`));
        list.append(row);
      }
      thanks.append(make('h4','case-label','With thanks'),list);copy.append(thanks);
    }
    if (results) copy.append(resultsTable(results));
    section.append(heading, copy);
    if(testimony){
      const panel=make('section','case-testimony');
      panel.append(make('h4','',testimony.title));
      for(const item of testimony.items){
        const entry=make('div','case-testimony-entry');
        const quote=make('blockquote');
        const paragraph=make('p','',item.quote+' ');
        paragraph.append(make('strong','',item.emphasis),document.createTextNode((item.ending?' '+item.ending:'')+'”'));
        quote.append(paragraph,make('cite','',`– ${item.author}`));
        entry.append(make('h5','',item.label),quote);panel.append(entry);
      }
      section.append(panel);
    }
    if(pid)section.append(renderPIDControl(pid,entry=>galleryFigure(entry,++figureIndex)));
    for(const group of figureGroups||[{figures}]){
    const groupFigures=group.figures;
    if (groupFigures?.length) {
      const gallery = make('div', 'case-gallery');
      if(group.label)gallery.append(make('h4','case-label case-gallery-label',group.label));
      const tiles = [];
      for (const entry of groupFigures) {
        const figure = galleryFigure(entry, ++figureIndex);
        if (entry.wide || entry.type==='video') gallery.append(figure);
        else tiles.push(figure);
      }
      if (tiles.length > 1) {
        const strip = imageStrip(tiles, group.label||label);
        // A submission is introduced once, directly above its own full-page reel.
        if (groupFigures.every(entry => Number.isInteger(entry.page))) strip.root.classList.add('case-report-reel');
        strips.push(strip);
        gallery.append(strip.root);
      } else gallery.append(...tiles);
      section.append(gallery);
    }
    }
    content.append(section);
  });
  if (links?.length) {
    const resources = make('footer', 'case-resources');
    resources.append(make('span', 'case-label', resourcesLabel));
    for (const {href, label, download} of links) {
      const link = externalLink(href, label, 'case-resource');
      if (download) {
        link.download = download;
        link.removeAttribute('target');
      }
      const arrow = make('span', '', download ? '↓' : '↗');
      arrow.setAttribute('aria-hidden', 'true');
      link.append(arrow);
      resources.append(link);
    }
    content.append(resources);
  }
  if (report?.pages?.length) {
    // Multi-part reports retain one download while each submission has its own
    // independently draggable reel. Existing single-report pages stay unchanged.
    const groups=report.groups||[{pages:report.pages,title:'Inside the report'}];
    for(const group of groups){
      const section = make('section', 'case-report');
      const heading = make('header', 'case-chapter-heading case-report-heading');
      const label=group.label?`${group.label} / ${group.pages.length} pages`:`${group.pages.length} pages / Engineering report`;
      heading.append(make('span', 'case-label', label), make('h3', '', group.title));
      const name=[report.title,group.label,'report'].filter(Boolean).join(' ');
      const strip = imageStrip(group.pages.map((page, index) => galleryFigure(page, index + 1)), name);
      strip.root.classList.add('case-report-reel');
      strips.push(strip);
      section.append(heading, strip.root);
      content.append(section);
    }
  }
  host.replaceChildren(content);
  const dispose = strips.map(strip => mountCaseImageStrip({...strip, scroller, reducedMotion}));
  dispose.push(mountCaseVideos([...host.querySelectorAll('video')]));
  dispose.push(mountCaseThemeImages({host}));
  return () => dispose.forEach(stop => stop());
}
