import emoji from "react-easy-emoji";
import djangoIcon from '@iconify/icons-simple-icons/django';
import pythonIcon from '@iconify/icons-simple-icons/python';
import javaIcon from '@iconify/icons-simple-icons/java';
import springIcon from '@iconify/icons-simple-icons/spring';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import angularIcon from '@iconify/icons-simple-icons/angular';
import mysqlIcon from '@iconify/icons-simple-icons/mysql';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';
import pandasIcon from '@iconify/icons-simple-icons/pandas';
import graphAlt from '@iconify/icons-el/graph-alt';
import cIcon from '@iconify/icons-file-icons/c';
import shovelIcon from '@iconify/icons-si-glyph/shovel';
import machineLearningModel from '@iconify/icons-carbon/machine-learning-model';



const greeting = {
  username: "Devanshu Modi",
  title: "Hi! I'm Devanshu",
  subTitle: emoji("A passionate Software Developer 🚀 having experience in building Web and Mobile applications with Spring Boot / Django / JavaScript / Angular and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1VENzYHdn8MQDtwhd2DM72Uxl5WpRbx9W/view?usp=sharing"
};

const socialMediaLinks = {

  github: "https://github.com/devmodi154",
  linkedin: "https://www.linkedin.com/in/devanshu-modi-4a9a96160/",
  gmail: "devmodi154@gmail.com",
};

const skillsSection = {
  title: "Who Am I",
  subTitle: "ALWAYS EXPLORING!",
  skills: [
    emoji("⚡ Developing Web and Mobile applications."),
    emoji("⚡ Practicing Data Structures and Algorithms."),
    emoji("⚡ Learning more about Data Science.")
  ],


  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: pythonIcon
    },
    {
      skillName: "Java",
      fontAwesomeClassname: javaIcon
    },
    {
      skillName: "C++",
      fontAwesomeClassname: cIcon
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: javascriptIcon
    },
    {
      skillName: "Django",
      fontAwesomeClassname: djangoIcon
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: springIcon
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: angularIcon
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: mysqlIcon
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: mongodbIcon
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: pandasIcon
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: graphAlt
    },
    {
      skillName: "Web Scraping",
      fontAwesomeClassname: shovelIcon
    },
    {
      skillName: "Machine\nLearning",
      fontAwesomeClassname: machineLearningModel
    }
  ]
};

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// work experiences
const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Web Scraping Intern",  
      company: "ADesignGuy.co",
      companylogo: require("./assets/images/adg.png"),
      date: "September 2019 – November 2019",
      desc: "Analyzed data of over 200 websites and scraped\nover 300 websites, running efficient scripts in Python\nand using Chrome Web Tools.",
    },
    {
      role: "Data Science Intern",   
      company: "CSIR-Central Drug Research Institute",
      companylogo: require("./assets/images/csir-cdri.jpg"),
      date: "May 2019 – June 2019",
      desc: "Worked with collecting, cleaning, and organizing databases\nof important educational organizations using Selenium, BeautifulSoup, Pandas in Python."
    },
    // {
    //   role: "Software Engineer Intern",  
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "devmodi154", 
  showGithubProfile :"true" 
};


const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Achievement Section 
// const achievementSection = {

//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achivementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       footerLink: [
//         { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
//         { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
//         { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       footerLink: [
//         { name: "Certification", url: "" },
//         { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
//       ]
//     }
//   ]
// };

// Blogs Section
// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ]
// };

// Talks Sections
// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ]
// };

// Podcast Section
// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "DISCUSS A PROJECT / WANT TO HIRE OR JUST WANT TO SAY HI?",
  number: "+91-7042658705",
  email_address: "devmodi154@gmail.com"
};

//Twitter Section
const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, contactInfo , twitterDetails};
