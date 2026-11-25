// Team background is sourced below; individual responsibilities and dates are
// intentionally omitted until supplied by the portfolio owner.
const media='./assets/projects/first-order-robotics/';
export const firstOrderProject={
  id:'first-order-robotics',art:11,demo:false,
  name:'First Order Robotics',discTitle:'First Order Robotics',
  discSubtitle:'AUTONOMOUS ROBOT FOOTBALL',year:'—',
  category:'Robotics / Systems Integration',role:'Student-led team project',
  cover:media+'robot-open.webp',coverInk:'#f1eee7',
  coverCrop:{fit:'disc',zoom:1,positionX:.5,positionY:.5,background:'#171b1e'},
  hero:media+'robot-open.webp',heroAlt:'An open First Order football robot revealing its electronics, drive system and identification plate',
  heroFit:'contain',heroBackground:'#171b1e',
  overview:'Autonomous football robots built at Imperial College London',
  description:'A student-led robotics platform connecting mechanical design, electronics and autonomous control.',
  headline:'Small robots. A whole-team challenge.',
  lede:'First Order Robotics brings together students at Imperial College London to build autonomous football robots for the RoboCup Small Size League. The challenge spans the whole system: sensing the game, coordinating movement and making hardware respond reliably.',
  collection:'Competitive Robotics',
  credits:[['FOCUS','Robotics · Systems Integration · Autonomous Control']],
  detailFields:[['TEAM','First Order Robotics'],['INSTITUTION','Imperial College London'],['PLATFORM','RoboCup Small Size League']],
  caseStudy:{chapters:[
    {label:'The challenge',title:'Football as a systems problem.',
      intro:'RoboCup Division B uses a six-a-side format. A shared overhead vision system tracks play, while software turns that information into commands for the robots. Success depends on coordinated decisions and dependable physical execution.',
      figures:[{src:media+'robot-open.webp',width:668,height:501,crop:true,maxWidth:900,wide:true,caption:'Inside the robot · Electronics, drivetrain and ball-handling hardware in one compact package'}]},
    {label:'Hardware',title:'Every subsystem has to work together.',
      intro:'The team describes an omnidirectional platform with dribbling, kicking and chipping mechanisms. Mechanical, electronic, embedded and software work must meet at the interfaces: packaging, power, communication and control.',
      figures:[{src:media+'controller-board.webp',width:861,height:627,caption:'Custom electronics · First Order controller board'},{src:media+'robot-chassis.webp',width:862,height:663,caption:'Mechanical platform · Exposed chassis, wheels and electronics'}]},
    {label:'Autonomy',title:'From sensing to movement.',
      intro:'The team’s 2025 technical paper documents hardware revisions and a new control and coordination codebase. Subsequent development described by the team adds onboard vision and telemetry to improve visibility into robot behaviour and support testing.',
      figures:[{src:media+'football-robots.webp',width:757,height:546,wide:true,caption:'On the field · Football robots and the ball during a demonstration'}]},
    {label:'Sharing the work',title:'Making robotics tangible.',
      intro:'A public demonstration brings the engineering into view: moving robots, a real ball and a shared playing field. The supplied photographs show how the system can become an accessible starting point for conversations about autonomous machines.',
      figures:[{src:media+'public-demo.webp',width:2560,height:1708,wide:true,caption:'Public demonstration · Visitors gather around the robot football pitch'}]}
    ],resourcesLabel:'Team background & technical references',links:[
      {label:'Team development story · RS DesignSpark',href:'https://www.rs-online.com/designspark/it-shoots-it-scores-building-robots-that-play-football-at-imperial-college'},
      {label:'2025 team description paper · RoboCup SSL',href:'https://ssl.robocup.org/wp-content/uploads/2025/04/2025_TDP_First-Order.pdf'},
      {label:'2025 qualification record · RoboCup SSL',href:'https://ssl.robocup.org/robocups/robocup-2025/robocup-2025-teams/'}
    ]}
};
