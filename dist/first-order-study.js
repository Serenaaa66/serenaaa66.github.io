// Dates and role are confirmed by the owner.
const media='./assets/projects/first-order-robotics/';
export const firstOrderProject={
  id:'first-order-robotics',art:11,demo:false,
  name:'First Order Robotics',discTitle:'First Order Robotics',
  discSubtitle:'AUTONOMOUS ROBOT FOOTBALL',year:'2024–2027',
  category:'Robotics / Systems Integration',role:'Hardware & Operations',
  cover:media+'football-robots.webp',coverInk:'#f1eee7',
  coverCrop:{fit:'disc',zoom:1,positionX:.5,positionY:.5,background:'#171b1e'},
  hero:media+'robot-open.webp',heroAlt:'An open First Order football robot revealing its electronics, drive system and identification plate',
  heroFit:'contain',heroBackground:'#171b1e',
  overview:'Hardware integration, practical troubleshooting and robotics operations',
  description:'Hands-on robot assembly, soldering, fault-finding and team operations at First Order Robotics.',
  headline:'From hardware to a working system.',
  lede:'I work in Hardware & Operations at First Order Robotics (2024–2027). The team brings together students at Imperial College London to build autonomous football robots for the RoboCup Small Size League. The challenge spans the whole system: sensing the game, coordinating movement and making hardware respond reliably.',
  collection:'Competitive Robotics',
  credits:[['CONTRIBUTION','Hardware & Operations'],['FOCUS','Robotics · Systems Integration · Autonomous Control']],
  detailFields:[['YEAR','2024–2027'],['ROLE','Hardware & Operations'],['TEAM','First Order Robotics'],['INSTITUTION','Imperial College London'],['PLATFORM','RoboCup Small Size League']],
  caseStudy:{chapters:[
    {label:'The challenge',title:'Integrating a complete robotic system.',
      intro:'RoboCup Division B uses a six-a-side format. A shared overhead vision system tracks play, while software turns that information into commands for the robots. RoboCup requires integration of hardware, embedded software and control algorithms under real-world constraints.',
      figures:[{src:media+'robot-open.webp',width:668,height:501,crop:true,maxWidth:900,wide:true,caption:'Inside the robot · Electronics, drivetrain and ball-handling hardware in one compact package'}]},
    {label:'My contribution',title:'Build it. Test it. Keep it running.',
      intro:'My role connects hands-on hardware work with the operations that support the team. I assemble and solder robot hardware, investigate faults and support testing, alongside procurement, inventory, test records and event coordination.',
      notes:[
        ['Hardware build & integration','Executed mechanical and electronic assembly, including soldering, wiring and sensor calibration, to support physical robustness and system reliability.'],
        ['Troubleshooting & testing','Diagnosed hardware faults through systematic inspection and electrical testing; implemented component-level fixes, re-tested the system and documented root causes to inform future deployments.'],
        ['Operations & coordination','Supported component purchasing and stock organisation, maintained test records and coordinated practical tasks and activities with teammates. Helped connect the availability of parts, build work and testing needs.'],
        ['Public demonstrations','Supported robotics activities and demonstrations, helping prepare hardware and coordinate the practical work around the event.']
      ]},
    {label:'Design evolution',title:'Two generations. One integrated platform.',
      intro:'The 2023–24 and 2024–25 team designs show the development of the robot as a complete system. Transparent views reveal how the wheels, electronics and ball-handling mechanisms fit within the cylindrical body.',
      figureGroups:[
        {label:'2023–24 team design',figures:[{src:media+'robot-design-2023-24-transparent.webp',width:958,height:577,wide:true,maxWidth:958,diagram:true,transparentArt:true,borderless:true,caption:'2023–24 robot design · Angled and front views of the earlier team platform'}]},
        {label:'2024–25 team design',figures:[{src:media+'robot-design-2024-25-transparent.webp',width:721,height:362,wide:true,maxWidth:721,diagram:true,transparentArt:true,borderless:true,caption:'2024–25 robot design · Dimetric and front views of the revised platform'}]}
      ]},
    {label:'Hardware',title:'Every subsystem has to work together.',
      intro:'The team describes an omnidirectional platform with dribbling, kicking and chipping mechanisms. Mechanical, electronic, embedded and software work must meet at the interfaces: packaging, power, communication and control.',
      figures:[
        {src:media+'controller-board.webp',width:861,height:627,caption:'Custom electronics · First Order controller board'},
        {src:media+'robot-chassis.webp',width:862,height:663,caption:'Mechanical platform · Exposed chassis, wheels and electronics'},
        {src:media+'coil-winding.webp',width:1367,height:856,caption:'Fabrication · Coil winding machine in use'},
        {src:media+'kicker-assembly-transparent.webp',width:1521,height:533,transparentArt:true,borderless:true,caption:'Kicker system assembly · Front and angled CAD views'},
        {src:media+'kicker-board-2025-transparent.webp',width:1208,height:861,transparentArt:true,borderless:true,caption:'Kicker 2025 version · PCB layout and component positions'},
        {src:media+'capacitor-board.webp',width:1110,height:795,caption:'Capacitor board · Component arrangement and support structure'}
      ]},
    {label:'Assembly details',title:'Understanding the interfaces.',
      intro:'The wheel module separates into the omniwheel, gear, mounting plates, motor and fasteners. The full robot exploded view puts those modules in context, alongside the electronics stack, quick-release hull, kicker and dribbler.',
      figureGroups:[
        {label:'Wheel actuator',figures:[{src:media+'wheel-actuator-assembly-transparent.webp',width:830,height:961,wide:true,maxWidth:830,diagram:true,transparentArt:true,borderless:true,caption:'Wheel actuator assembly · Assembled orientations and exploded component view'}]},
        {label:'Whole robot',figures:[{src:media+'robot-exploded-assembly-transparent.webp',width:1002,height:883,wide:true,maxWidth:1002,diagram:true,transparentArt:true,borderless:true,caption:'Robot assembly · Exploded overview of the hull, electronics, drivetrain and ball-handling systems'}]}
      ]},
    {label:'Ball handling',title:'A closer look at contact.',
      intro:'Three illustrated states show the interaction between the ball and the spring-damper mechanism: the ball leaving, steady contact and an incoming impact. Comparing the positions makes the mechanism’s movement easier to understand.',
      figures:[{src:media+'ball-spring-damper-transparent.webp',width:1182,height:521,wide:true,maxWidth:1182,diagram:true,transparentArt:true,borderless:true,caption:'Ball–spring-damper interaction · Ball leaving, steady state and ball crash-in'}]},
    {label:'Autonomy',title:'From sensing to movement.',
      intro:'The team’s 2025 technical paper documents hardware revisions and a new control and coordination codebase. Subsequent development described by the team adds onboard vision and telemetry to improve visibility into robot behaviour and support testing.',
      notes:[
        ['Motion visualisation','Velocity projections can be compared with the shadow markers showing actual next-frame positions. The motion view also illustrates ball tracking while moving along a line.'],
        ['Path planning','The bisector planner visualises the candidate paths it considers: green indicates valid paths and red indicates invalid paths.']
      ],
      figureGroups:[
        {label:'On the field',figures:[{src:media+'football-robots.webp',width:757,height:546,wide:true,caption:'On the field · Football robots and the ball during a demonstration'}]},
        {label:'Motion & planning visualisations',figures:[
          {src:media+'velocity-ball-tracking.webp',width:826,height:820,caption:'Velocity & ball tracking · Shadows show actual next-frame positions'},
          {src:media+'bisector-planner.webp',width:765,height:778,caption:'Bisector planner · Green paths are valid; red paths are invalid'}
        ]}
      ]},
    {label:'Sharing the work',title:'Making robotics tangible.',
      intro:'A public demonstration brings the engineering into view: moving robots, a real ball and a shared playing field. The supplied photographs show how the system can become an accessible starting point for conversations about autonomous machines.',
      figures:[{src:media+'public-demo.webp',width:2560,height:1708,wide:true,caption:'Public demonstration · Visitors gather around the robot football pitch'}]},
    {label:'Reflection',title:'Engineering Takeaway',
      intro:'Working on a multi-agent robotic platform taught me that reliable deployment depends on getting the physical layer right. I learned to bridge the gap between design files and physical reality, from soldering loose wires on the field to debugging control logic. This hands-on experience across the engineering lifecycle has prepared me to install, maintain and troubleshoot robotic systems at Paddington Robotics.'}
    ]}
};
