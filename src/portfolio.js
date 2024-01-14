/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import pandasIcon from "@iconify/icons-simple-icons/pandas";
import graphAlt from "@iconify/icons-el/graph-alt";
import cIcon from "@iconify/icons-file-icons/c";
import shovelIcon from "@iconify/icons-si-glyph/shovel";
import machineLearningModel from "@iconify/icons-carbon/machine-learning-model";
import {FaPython, FaReact} from "react-icons/fa";
import {FaGolang} from "react-icons/fa6";
import {IoLogoJavascript, IoLogoFirebase} from "react-icons/io5";
import {SiDjango, SiPandas, SiPlotly} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {BiLogoSpringBoot, BiLogoPostgresql} from "react-icons/bi";
import {TbBrandCpp, TbShovel} from "react-icons/tb";
import {GiArtificialIntelligence} from "react-icons/gi";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Devanshu Modi",
  title: "Hi! I'm Devanshu",
  subTitle:
    "A passionate Software Developer 🚀 currently working as a Software Engineer (Backend) at Nektar.ai working with technologies like NodeJS / Graffy / Postgres / React / AWS. Learning and Building scalable Web applications in JavaScript / React / Django / cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1VENzYHdn8MQDtwhd2DM72Uxl5WpRbx9W/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/devmodi154",
  linkedin: "https://www.linkedin.com/in/devanshu-modi-4a9a96160/",
  gmail: "devmodi154@gmail.com",
  twitter: "https://twitter.com/DevanshuModi04",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "ALWAYS EXPLORING!",
  skills: [
    emoji("⚡ Working and developing on new ideas."),
    emoji("⚡ Learning to develop scalable applications."),
    emoji("⚡ Learning more about Data Science.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: <FaPython />
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: <FaGolang />
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: <IoLogoJavascript />
    },
    {
      skillName: "Django",
      fontAwesomeClassname: <SiDjango />
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: <FaReact />
    },
    {
      skillName: "C++",
      fontAwesomeClassname: <TbBrandCpp />
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: <BiLogoSpringBoot />
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: <GrMysql />
    },
    {
      skillName: "Postgresql",
      fontAwesomeClassname: <BiLogoPostgresql />
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: <IoLogoFirebase />
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: <SiPandas />
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: <SiPlotly />
    },
    {
      skillName: "Web Scraping",
      fontAwesomeClassname: <TbShovel />
    },
    {
      skillName: "ML",
      fontAwesomeClassname: <GiArtificialIntelligence />
    }
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manipal University Jaipur",
      logo: require("./assets/images/muj.png"),
      subHeader: "Bachelors of Technology Computer Science",
      duration: "June 2017 - August 2021",
      desc: "GPA: 9.14",
      descBullets: [
        "Data Structures & Algorithms",
        "Relational Database Systems",
        "Computer Networks",
        "Object-Oriented Programming",
        "Software Engineering",
        "Operating Systems"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Nektar.ai",
      companylogo: require("./assets/images/nektar.jpeg"),
      date: "Jan 2023 – Present",
      descBullets: [
        "Designed and implemented a feature to create and automatically populate custom fields in Salesforce, enhancing CRM data quality for the Customer Success team.",
        "Developed an internal tool within the Admin UI to execute SOQL queries and present query results efficiently."
      ]
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer",
      company: "Grab",
      companylogo: require("./assets/images/grab.jpeg"),
      date: "Aug 2021 – Dec 2022",
      descBullets: [
        "Implemented multiple REST APIs in Golang to manually push data into the stream using bulk processors,with added monitoring to prevent transactional data async.",
        "Analyzed complete flows of Driver wallet exchanges for Hystrix Timeout failures to bring out measures for mitigation"
      ]
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer (Backend) Intern",
      company: "Grab",
      companylogo: require("./assets/images/grab.jpeg"),
      date: "Feb 2021 – Aug 2021",
      desc: "Onboarded multiple endpoints on Gateway upon deprecation from TCP route. Investigated and resolved more than 50 Open Production Issues using tools like debugging tools like Kibana, Datadog & awscli in on-call duty for a duration of over six weeks."
    },
    {
      role: "Student Developer",
      company: "Crio.do",
      companylogo: require("./assets/images/crio.jpeg"),
      date: "Jan 2020 – Aug 2020",
      descBullets: [
        "Built the backend for a visual stock portfolio analyzer to help portfolio managers make trade recommendations for their clients.Implemented the core logic of the portfolio manager and published it as a library.Built the analyzer using Java, REST API, Jackson, and Interfaces.",
        "Developed a Java backend for the app to list nearby restaurants and popular dishes. Implemented a REST API in Spring Boot, plugged with MongoDB, and a cache for better performance using Redis."
      ]
    },
    {
      role: "Web Scraping Intern",
      company: "ADesignGuy.co",
      companylogo: require("./assets/images/adg.png"),
      date: "Sep 2019 – Nov 2019",
      desc: "Analyzed data of over 200 websites and scraped over 300 websites, running efficient scripts in Python and using Chrome Web Tools."
    },
    {
      role: "Data Science Intern",
      company: "CSIR-CDRI",
      companylogo: require("./assets/images/csir-cdri.jpeg"),
      date: "May 2019 – Jun 2019",
      desc: "Worked with collecting, cleaning, and organizing databases of important educational organizations using Selenium, BeautifulSoup, Pandas in Python."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};
// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "devmodi154@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "DevanshuModi04", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
