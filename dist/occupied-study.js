// Content and project evidence supplied by Siyi Yu. Year confirmed as 2025.
const media='./assets/projects/occupied/study/';
export const occupiedProject={
  id:'occupied',art:10,demo:false,name:'OCCUPIED!',discTitle:'OCCUPIED!',
  discSubtitle:'PLAYFUL PHYSICAL INTERACTION',year:'2025',
  category:'Interaction Design / Physical Computing',
  cover:media+'blue-door.png',coverInk:'#eee7d9',
  coverCrop:{fit:'disc',zoom:1.1,positionX:.5,positionY:.65,background:'#14120e'},
  hero:media+'blue-door.png',heroFit:'contain',
  heroAlt:'A character peeks above the blue door of the OCCUPIED! physical installation',
  overview:'An interactive installation turning an awkward everyday moment into play',
  description:'Knocks, light switches and a stolen sheet of paper trigger a playful character’s reactions.',
  headline:'Experiential Interaction & Gamification',
  lede:'Turning public frustration into a playful, engaging brand experience.',
  collection:'Experiential Design',
  credits:[
    ['EXPERIENCE','Experiential Marketing · Gamification · User Empathy'],
    ['TOOLKIT','C++ · Bela · Sensors · Servo Mechanisms']
  ],
  caseStudy:{
    chapters:[
      {
        label:'The Insight',title:'OCCUPIED!',layout:'image-led',
        intro:'Public toilet stalls often create frustration and awkwardness.',
        notes:[
          ['The Strategy','Instead of solving this as a purely functional problem, we reframed it as an interactive game (Gamification). We tapped into human curiosity and playfulness.'],
          ['The Solution','Built a physical computing installation where users interact via knocking, light-switching, and “stealing” toilet paper to trigger humorous reactions from an NPC, aiming for a “Win State”.']
        ],
        figures:[{src:media+'blue-door.png',width:842,height:666,wide:true,caption:'First encounter · A character peeks over the blue door'}]
      },
      {
        label:'The Experience',title:'Interactive storytelling & user journey',
        notes:[
          ['User Journey','Designed a Finite State Machine (Normal, Angry, Screaming, Win) to map out the user’s interactive journey.'],
          ['Storytelling','Created an engaging narrative where every physical action leads to an immediate, multi-sensory (sound + visual) response, keeping the user hooked.']
        ],
        figures:[{src:media+'interaction-frame-4-hd.png',width:842,height:595,wide:true,maxWidth:842,diagram:true,caption:'User journey · Physical actions, character reactions and timed states'}]
      },
      {
        label:'The Execution & Marketing Value',title:'From concept to reality',
        notes:[
          ['What I Did','Prototyped the full physical experience, engineered the electronics (sensors/actuators), and coded the game logic in C++.'],
          ['Why it matters for Marketing','This project demonstrates my ability to design experiential marketing campaigns, understand user motivation, and deliver a physical brand interaction that creates memorable, shareable moments.'],
          ['Keywords','Experiential Marketing | Gamification | User Journey Mapping | Prototyping | Storytelling']
        ],
        figureGroups:[
          {label:'Electronics & control',figures:[{src:media+'electronics-frame-5-hd.png',width:842,height:595,wide:true,maxWidth:842,diagram:true,caption:'Electronics · Sensors, five servo motors, COB LED and audio connected to Bela'}]},
          {label:'Build & test',figures:[{src:media+'prototype-testing.png',width:1795,height:1010,wide:true,maxWidth:1120,caption:'Prototype development · Wiring, mechanisms, sensor checks and hands-on testing'}]},
          {label:'See it in action',figures:[{
            type:'video',src:media+'occupied-demo.mp4',poster:media+'occupied-poster.jpg',
            width:1920,height:1080,autoplayOnView:true,
            caption:'OCCUPIED! in action · Plays muted; turn on sound to hear the character.'
          }]}
        ]
      }
    ]
  }
};
