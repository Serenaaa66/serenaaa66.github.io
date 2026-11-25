// Project evidence supplied by Siyi Yu: Challenge 4 (aespa) and Challenge 5 (push).
// Technical context: Electronics 2 Lab 6, Lab 7 and the Challenge 4 brief.
// The dance uses stabilizers; it is not presented as a self-balancing demo.
const media='./assets/projects/balancing-segway/';

export const segwayProject={
  id:'balancing-segway',art:8,demo:false,
  name:'Balancing Segway',discTitle:'Balancing Segway',discSubtitle:'BEAT DETECTION / PID CONTROL',
  year:'2026',category:'Robotics / Control Systems',role:'Embedded Software & Control',
  cover:media+'pybench.webp',coverInk:'#202320',
  coverCrop:{fit:'disc',zoom:.84,positionX:.5,positionY:.68,background:'#e8e8e4'},
  hero:media+'balancing-tabletop.png',heroAlt:'The two-wheeled PyBench robot balancing upright on a tabletop during a hands-on test',
  heroFit:'contain',heroBackground:'#141b21',
  overview:'Beat-synchronised motion and self-balancing control on PyBench',
  description:'A MicroPython robot exploring live beat detection, choreographed motion and 200 Hz self-balancing control.',
  headline:'Listening for rhythm. Finding balance.',
  lede:'Hands-on robotics, from assembling and wiring the PyBench hardware to testing code on a moving robot. Two Electronics 2 challenges connect live beat detection with stabilizer-supported dance, then 200 Hz self-balancing control and recovery from a push.',
  collection:'Electronics 2',
  credits:[['COURSE','Electronics 2'],['BUILT WITH','MicroPython · PyBench']],
  caseStudy:{
    chapters:[
      {
        label:'The platform',title:'One robot. Two real-time challenges.',
        intro:'Assembled and wired the Pyboard, IMU, microphone and motor driver on the PyBench platform, then programmed it in MicroPython. Two practical challenges: responding to music with stabilizers, and balancing independently under physical disturbances.',
        notes:[['Challenge 4','Detect music beats and step through a dance routine, with stabilizers.'],['Challenge 5','Estimate tilt and drive the wheels to stay upright and respond to disturbances.']],
        figures:[{src:media+'pybench.webp',width:1000,height:848,caption:'PyBench board · Pyboard, IMU, microphone, motor driver and screen',wide:true,background:'transparent',borderless:true}]
      },
      {
        label:'Challenge 4 / Beat detection',title:'Hear the beat. Move with it.',
        intro:'Live microphone audio becomes a sequence of motor moves. Short bursts of sound energy are compared with a local moving average; a detected beat advances the next step in the choreography. Stabilizers support the robot throughout this dance.',
        notes:[
          ['Listen · 8 kHz','Timer interrupts capture 160 microphone samples per block: a fresh energy measurement every 20 milliseconds.'],
          ['Detect · relative energy','A running-sum buffer tracks the local average. The energy ratio and a minimum interval between detections help separate beats from repeated triggers.'],
          ['Move · one step per beat','The ASCII dance routine is loaded from the SD card into memory before the loop starts, keeping slow file reads out of live control.'],
          ['Watch with sound','The aespa demonstration shows the stabilizer-supported dance responding to music. Use the player controls to hear the rhythm.']
        ],
        figures:[{type:'video',src:media+'challenge-4-aespa.mp4',poster:media+'challenge-4-poster.webp',width:1920,height:1080,wide:true,caption:'Challenge 4 · Beat-triggered dancing to aespa, with stabilizers'}]
      },
      {
        label:'Challenge 5 / Self-balancing',title:'Stay upright. Recover from a push.',
        intro:'Fused gyroscope and accelerometer data with a complementary filter to estimate tilt, then ran a PID loop at 200 Hz to correct both motors. Validated closed-loop response and recovery under physical disturbances in a hands-on push test.',
        notes:[['Sensor fusion','Gyroscope motion estimates are corrected by the accelerometer reference.'],['200 Hz control','A fresh tilt estimate and motor correction every 5 milliseconds.']],
        pid:{
          terms:[
            {term:'P',name:'Proportional',gain:'p',meaning:'Tilt error determines the strength of the corrective motor command.',excess:'Too much P makes the robot oscillate around upright.'},
            {term:'I',name:'Integral',gain:'i',meaning:'Accumulated error compensates for a persistent lean or offset.',excess:'Too much I causes wind-up and overshoot.'},
            {term:'D',name:'Derivative',gain:'d',meaning:'Measured rotation rate adds damping to reduce overshoot.',excess:'Too much D makes the controller sensitive to sensor noise.'}
          ],
          tuning:{
            title:'Troubleshooting hardware in the loop.',
            text:'Supported the robot with elastic cord and tested it on real hardware. Oscillation, persistent offset and overshoot were diagnostic clues: I traced the physical behaviour back to the P/I/D response, changed one gain at a time, then re-tested until the robot could balance independently.',
            takeaway:'Debugging the full stack means accounting for friction, centre of gravity and sensor noise as well as PID code. Testing on real hardware, observing failures and tuning the software to address physical behaviour is the mindset I want to bring to on-site robotics deployments.',
            rateNote:'D uses the measured gyroscope rate rather than differentiating angle estimates, reducing sensitivity to numerical noise.'
          }
        },
        figures:[{type:'video',src:media+'challenge-5-push.mp4',poster:media+'challenge-5-poster.webp',width:1920,height:1080,wide:true,caption:'Challenge 5 · Testing closed-loop recovery under physical disturbances'}]
      }
    ]
  }
};
