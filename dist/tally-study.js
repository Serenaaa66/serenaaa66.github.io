// Collaborative project. The reference informs the narrative order; copy is
// adapted for this portfolio rather than transferring another author's "I".
const media='./assets/projects/in-motion/study/';
const figure=(name,width,height,caption,options={})=>({src:media+name,width,height,caption,...options});
const sketch=(name,width,height,caption)=>figure(name,width,height,caption,{inkDrawing:true,borderless:true});
const diagram=(name,width,height,caption,options={})=>figure(name+'-light.svg',width,height,caption,{
  darkSrc:media+name+'-dark.svg',wide:true,borderless:true,diagram:width>700,maxWidth:width,...options
});

export const tallyHero={
  hero:media+'cover.webp',
  heroAlt:'Tally tactile keypad, payment bell and companion interface arranged on a market counter',
  heroFit:'contain'
};
export const tallyMetadata={
  name:'Tally',discTitle:'Tally',discSubtitle:'TACTILE PAYMENTS · COUNT ON IT',year:'2026',
  category:'Industrial Design / User-Centred Design',role:'CIO / Information',
  cover:media+'cover.webp',coverCrop:{zoom:1,positionX:.38,positionY:.5},
  overview:'A tactile, modular point-of-sale system shaped around market traders',
  description:'Physical keys and clear payment feedback bring confidence to a busy market counter.',
  headline:'Confidence in every transaction.',
  lede:'A modular point-of-sale system for outdoor food markets. Eleven interviews across three markets and co-design with bakery trader Laurence shaped physical keys, a flexible layout and unmistakable payment feedback.',
  collection:'Industrial Design',
  credits:[['SKILLS','UX Research · Interaction Design · Storytelling']]
};

export const tallyStudy={
  chapters:[
    {
      label:'UX research',title:'Start behind the counter.',
      intro:[
        'Eleven interviews across three food markets revealed divided attention, glare and uncertainty around payments. Concrete questions about the work helped uncover needs that a general question about problems could miss.',
        'For a bakery stall, making the product happens before service. At the counter, the challenge is helping customers decide while packing food and taking payment. The transaction map connects browsing, packing and payment as one experience.'
      ],
      notes:[
        ['Hold the food','Tongs occupy one hand.',{src:media+'hand-tongs.svg',width:66,height:82}],
        ['Open the bag','Packaging occupies the other.',{src:media+'hand-bag.svg',width:64,height:82}],
        ['Take the payment','The terminal asks for a third.',{src:media+'hand-payment.svg',width:65,height:82}]
      ],
      figureGroups:[
        {label:'Observe the work',figures:[
          figure('field-interview.webp',1224,941,'Field research · Listening to food-market traders'),
          figure('pos-friction.webp',306,366,'Existing POS · Small touchscreen targets at the stall')
        ]},
        {label:'Map the friction',figures:[
          diagram('transaction-flow',1155,230,'From approach to handover · Transaction stages and their bottlenecks'),
          diagram('customer-indecision',221,66,'Customer journey · A queue can turn hesitation into an abandoned purchase',{maxWidth:440})
        ]}
      ]
    },
    {
      label:'Co-design',title:'From faster taps to greater confidence.',
      transitionQuote:'We stopped designing for speed and started designing for confidence.',
      testimony:{title:'The failure shows up at 2 ends',items:[
        {label:'Input – what the vendor does to enter a sale.',quote:'“It (traditional cash register) makes a single noise every time you press a button. If I’ve slightly pressed between the two, I’ll never be able to tell. The only way I can check is physically; I have to be paying attention to it.',emphasis:'Nothing’s telling me what’s happening.',author:'Laurence'},
        {label:'Output – Knowing the transaction completed.',quote:'“When the payment goes through, it makes no noise. I don’t know it’s done. The customer doesn’t know it’s done.',emphasis:'There’s a hesitation at the end.',ending:'I lose transactions sometimes.',author:'Laurence'}
      ]},
      intro:[
        'Co-design with Laurence at the Southbank Centre food market brought the brief into focus. A quick interaction is not enough if the trader still has to stop and check what happened.',
        'The journey map highlights two moments of doubt: entering the order and waiting for payment. Clear feedback at both ends became the design priority.'
      ],
      notes:[
        ['Input','A firm, tangible response confirms each press.'],
        ['Completion','A shared signal tells trader and customer that payment is finished.']
      ],
      figures:[
        figure('co-design.webp',2384,1298,'Co-design · Shaping the system with Laurence',{wide:true}),
        diagram('confidence-journey',873,314,'Confidence journey · Where uncertainty interrupts a transaction')
      ]
    },
    {
      label:'Interaction design',title:'Let the hand find its way.',
      intro:[
        'The controls follow the trader’s mental model. Product categories organise the layout, while movable keys let the grid change with the menu.',
        'Prototypes explored how a press should feel, how quantities should be visible and how different controls could be recognised by touch. These decisions connect the physical form to the way the stall is used.'
      ],
      notes:[
        ['Layout','A fixed pogo-pin grid balances modularity with reliable alignment.'],
        ['Feedback','A firm, audible click and LED quantity feedback make inputs legible.'],
        ['Physical detail','A split cap, tapered gap, texture and colour distinguish controls without close visual attention.']
      ],
      figureGroups:[
        {label:'Shape the layout',figures:[
          figure('button-shapes.webp',2384,1013,'Co-design · Testing button shapes and sizes'),
          figure('layout-test.webp',1236,757,'Layout trial · Arranging physical targets at the stall'),
          figure('categorical-layout.webp',1252,808,'Mental model · Product categories rather than counter coordinates',{background:'#eee8dc'})
        ]},
        {label:'Refine the interaction',figures:[
          figure('blue-switch.webp',198,204,'Switch trial · A firm, audible click'),
          figure('quantity-led.webp',993,1029,'Physical prototype · LED quantity feedback'),
          sketch('rotary-cap.webp',444,240,'Quantity input · Exploring a rotary control'),
          sketch('split-cap-sketch.webp',940,581,'Form exploration · Primary and secondary cap surfaces'),
          figure('split-cap-prototype.webp',663,657,'Prototype · A split-cap input'),
          figure('tapered-cap.webp',942,588,'Physical detail · A tapered gap between controls')
        ]}
      ]
    },
    {
      label:'Product identity',title:'Count on it.',
      intro:'The tally mark connects a physical record of a sale with a playful identity. Keys, Bell and the quick-start guide form a coherent product family, carrying that language from packaging to the market counter.',
      figures:[
        figure('tally-mark.png',1120,500,'Tally · The original mark and product promise',{wide:true,maxWidth:620,borderless:true,brandMark:true}),
        figure('packaging.webp',4320,3339,'Packaging · Tally Keys, Tally Bell and quick-start guide',{wide:true}),
        figure('posters.webp',4320,2877,'Applied identity · Tally in a shopfront setting',{wide:true})
      ]
    },
    {
      label:'How it works',title:'Keys, base and bell.',
      intro:'Magnets locate the movable keys; pogo pins connect them to the base. The keypad handles input, while a bell and rising flag make payment completion visible and audible. CAD and exploded assemblies bring the three parts into one coherent product.',
      figureGroups:[
        {label:'Resolve the assembly',figures:[
          figure('exploded-transparent.png',2384,1376,'Exploded assembly · Key module, modular base and payment-confirmation unit',{wide:true,maxWidth:1120,borderless:true})
        ]},
        {label:'Prototype the system',figures:[
          figure('base-prototypes.webp',2384,952,'Prototyping · Developing the modular base'),
          figure('concept-validation.webp',1542,948,'Early validation · Sticky notes stand in for physical keys')
        ]}
      ]
    },
    {
      label:'Renders',title:'A place on the counter.',
      intro:'Product visualisation brings proportions, colour and assembly details together. The final scenes place the complete system back in the market context that shaped it.',
      figures:[
        figure('final-renders.webp',4311,2184,'Product visualisation · The complete Tally system at the counter',{wide:true,maxWidth:1120}),
        figure('in-use.webp',1666,1736,'In context · Tally’s keypad on Laurence’s bakery counter',{wide:true,maxWidth:620})
      ]
    },
    {
      label:'Final film & reflection',title:'Keep testing the complete experience.',
      figures:[{type:'video',src:media+'tally-film.mp4',poster:media+'tally-film-poster.jpg',width:1280,height:720,autoplayOnView:true,caption:'Tally · Plays muted; turn on sound to hear the film.'}],
      intro:'An early sticky-note trial reported a 75% improvement with physical targets. It was an encouraging direction, rather than a final-system result. The next step is a broader trial of the complete working system during busy service.'
    }
  ],
  resourcesLabel:'Project film',
  links:[]
};
