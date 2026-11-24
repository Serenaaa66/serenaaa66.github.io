import {reportPreviews} from './report-previews.js';

// Source: WHYYYYY SPRAY.pdf, all 14 physical pages, in their original order.
// The project is a tested design prototype, not a deployed station installation
// or a clinically validated mental-health intervention.
const media='./assets/projects/spray/';
const report=reportPreviews.spray;

export const sprayProject={
  id:'spray',art:9,demo:false,
  name:'WHYYYYY SPRAY',discTitle:'WHYYYYY SPRAY',discTitleLines:['WHYYYYY','SPRAY'],discSubtitle:'PLAYFUL COMMUTER EXPERIENCES',
  year:'2025',category:'Human-Centred Design Engineering',
  cover:media+'fountain-disc-cover.png',coverInk:'#eee7d9',
  coverCrop:{fit:'disc',zoom:1.06,background:'#232322'},
  hero:media+'fountain-exploded.png',heroFit:'contain',
  heroAlt:'WHYYYYY SPRAY exploded view showing the fountain structure, electronics and four central player statues',
  overview:'A walk-up fountain memory game designed around waiting commuters',
  description:'User research and iterative prototypes turn water, light and sound into a short, shared moment of play.',
  headline:'Gamifying the Commuter Experience',
  lede:'A data-driven interactive experience to reduce commuter stress.',
  collection:'Human-Centred Design',
  credits:[
    ['RESEARCH','Surveys · Journey Mapping · User Testing'],
    ['PROTOTYPING','Fusion 360 · 3D Printing · Raspberry Pi · Arduino']
  ],
  caseStudy:{
    chapters:[{
  "label": "Storyboard",
  "layout": "storyboard",
  "title": "From a passing glance to a shared win.",
  "intro": "Follow the ten-step journey: notice the fountain, discover the interaction, invite friends and remember the sequence together.",
  "figures": [
    {
      "src": "./assets/projects/spray/storyboard/01.png",
      "width": 538,
      "height": 538,
      "borderless": true,
      "caption": "01 · Notice — The fountain catches the user’s attention."
    },
    {
      "src": "./assets/projects/spray/storyboard/02.png",
      "width": 604,
      "height": 604,
      "borderless": true,
      "caption": "02 · Discover — A passer-by accidentally presses a button, lighting up one statue."
    },
    {
      "src": "./assets/projects/spray/storyboard/03.png",
      "width": 260,
      "height": 586,
      "borderless": true,
      "caption": "03 · Reset — Twenty seconds after the passer-by leaves, the game ends automatically and all lights turn off."
    },
    {
      "src": "./assets/projects/spray/storyboard/04.png",
      "width": 492,
      "height": 506,
      "borderless": true,
      "caption": "04 · Try — The user taps a button and discovers that one statue lights up."
    },
    {
      "src": "./assets/projects/spray/storyboard/05.png",
      "width": 696,
      "height": 696,
      "borderless": true,
      "caption": "05 · Invite — The user calls two friends to step on the buttons; two more statues light up."
    },
    {
      "src": "./assets/projects/spray/storyboard/06.png",
      "width": 740,
      "height": 740,
      "borderless": true,
      "caption": "06 · Listen — An audio clue says: “Remember, remember, remember the order.”"
    },
    {
      "src": "./assets/projects/spray/storyboard/07.png",
      "width": 558,
      "height": 424,
      "borderless": true,
      "caption": "07 · Watch — Fountains spray in sequence, with one jet per player at each step."
    },
    {
      "src": "./assets/projects/spray/storyboard/08.png",
      "width": 304,
      "height": 396,
      "borderless": true,
      "caption": "08 · Try again — Pressing a wrong button makes the light flash twice, then turn off."
    },
    {
      "src": "./assets/projects/spray/storyboard/09.png",
      "width": 594,
      "height": 594,
      "borderless": true,
      "caption": "09 · Remember — Pressing the correct button lights it up, triggers a fountain and plays music."
    },
    {
      "src": "./assets/projects/spray/storyboard/10.png",
      "width": 592,
      "height": 658,
      "borderless": true,
      "caption": "10 · Win — Complete the button sequence correctly: all fountains activate, music plays for 15 seconds and all lights shine."
    }
  ]
},{
      label:'The Insight',title:'Turn waiting into play.',
      notes:[
        ['The Problem','46% rise in psychological distress among UK adults. Daily train commuters experience peak anxiety during waiting times.'],
        ['The Objective','Using Gamification to transform frustrating waiting time into a relaxing, playful experience.']
      ]
    },{
      label:'Market Validation',title:'Selected by the people who would play.',
      notes:[
        ['Concept Voting','Generated 15 initial concepts. We engaged 50+ users in a public vote to select the best idea, ensuring the final design was truly user-centric.'],
        ['Target Audience','Working professionals and students during peak hours.']
      ]
    },{
      label:'Agile Iteration & A/B Testing',title:'Low-effort but rewarding.',
      intro:'Built a low-fidelity interactive prototype and tested it with 10 users (Group A vs. Group B) to measure engagement and relaxation levels.',
      notes:[
        ['Feedback','“The sequence was too long, it felt like luck.”'],
        ['Iteration','Added visual clues and shortened the sequence, making the experience “low-effort but rewarding.”'],
        ['Feedback','“Hard to remember when lights are too similar.”'],
        ['Iteration','Created unique icons and colors for each fountain to enhance visual communication and cognitive ease.']
      ]
    },{
      label:'The Outcome',title:'A positive moment between trains.',
      notes:[
        ['Result','Successfully transformed a negative daily touchpoint into a positive, engaging game.'],
        ['Marketing Relevance','This project showcases my ability in Experiential Marketing, Consumer Research, and Agile Product Development. It demonstrates how a brand can use interactive physical spaces to drive positive sentiment and community engagement.']
      ]
    },{
      label:'Project report',title:'Explore the full project.',
      notes:[['Team','Stanley Liu · Siyi Yu · Unico Yin · Zipei Weng · Zhuangyi Huang']],
      figures:report.pages
    }],
    resourcesLabel:'Project report',
    links:[{label:'Download full report · PDF',href:report.href,download:report.filename}]
  }
};
