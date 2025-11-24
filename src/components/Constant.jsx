import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import reduxLogo from '../assets/tech_logo/redux.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import materialuiLogo from '../assets/tech_logo/materialui.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import firebaseLogo from '../assets/tech_logo/firebase.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import figmaLogo from '../assets/tech_logo/figma.png';
import netlifyLogo from '../assets/tech_logo/netlify.png';
import vercelLogo from '../assets/tech_logo/vercel.png';
import postgreLogo from '../assets/tech_logo/postgre.png';
import axiosLogo from '../assets/tech_logo/axios.png'
import financy from '../assets/project_pic/financy.JPG'
import socialmedia from '../assets/project_pic/socialmedia.JPG'
import githubwrapper from '../assets/project_pic/githubwrapper.JPG'
import pager from '../assets/project_pic/pager.JPG'
import postoffice from '../assets/project_pic/postoffice.JPG'
import resumeBuilder from '../assets/project_pic/resume.JPG'
import shoppingCart from '../assets/project_pic/shopping-cart-redux.JPG'
import memoryGame from '../assets/project_pic/memory-game.JPG'
import movieSearch from '../assets/project_pic/moviesearch.JPG'
import bncoe from '../assets/edu_logo/bncoe.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      {name : 'Axios' , logo:axiosLogo}
    ],
  },
];

export const projects = [
    {
      id: 0,
      title: "Financy Personal Finance Tracker",
      description:
        "Financy is a modern, intuitive, and efficient web application built to help users manage, track, and understand their personal finances with ease. It replaces the need for messy spreadsheets by offering a clean and organized dashboard where users can log their income and expenses, monitor spending patterns, and instantly view their overall financial health through interactive visualizations.",
       image: financy,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "React-Router-Dom","Google Firebase","React-Toastify","Ant Design"],
      github: "https://github.com/prmd04/Financy-Personal-finance-Tracker",
      webapp: "https://financy-personal-finance-tracker-prmd.netlify.app/",
    },
    {
      id: 1,
      title: "Social Media",
      description:
        "This project is a fully functional multi-page React application that fetches data from a public API and displays it across different views. It demonstrates core frontend development skills including React Router, Redux for global state management, Redux Thunk for async API calls, and responsive UI design inspired by a Figma reference.The app provides a smooth user experience with structured routing, centralized state handling, loading indicators, and clean data presentation.",
       image: socialmedia,
      tags: ["HTML", "CSS", "JavaScript", "React", "React-Router-Dom", "React-Redux"],
      github: "https://github.com/prmd04/Social-Media",
      webapp: "https://social-media-prmd04.netlify.app/",
    },
    {
      id: 2,
      title: "GitHub Wrapper",
      description:
        "GitHub Wrapper is a React web application that lets users fetch and display GitHub user data by entering a GitHub username. The main purpose of this project is to provide a simple, intuitive interface that interacts with the GitHub API, giving key information about a user (e.g., profile, repositories) without leaving the app.",
       image: githubwrapper,
      tags: ["HTML", "CSS", "JavaScript", "React", "Axios", "GitHub REST API"],
      github: "https://github.com/prmd04/Github-Wrapper",
      webapp: "https://github-wrapper-prmd04.netlify.app/",
    },
    {
      id: 3,
      title: "Pager",
      description:
        "Pager is a lightweight, interactive messaging app designed to send anonymous notes to friends.The goal of this project is to recreate the nostalgic pager experience using modern technologies. Users can type a message, submit it instantly, and the app securely stores the message in Firebase Firestore. Even after refreshing the page, all messages are retrieved and displayed again, ensuring smooth data persistence.This project highlights essential skills such as working with cloud databases, implementing CRUD-like functionality, building responsive UI components, and managing real-time data in a clean, user-friendly interface.",
       image: pager,
      tags: ["HTML", "CSS", "JavaScript", "React", "Firebase", "React Hook"],
      github: "https://github.com/prmd04/pager",
      webapp: "https://pager-prmd.netlify.app/",
    },
    {
      id: 4,
      title: "Indian PostOffice",
      description:
        "The Pincode Lookup App is a React-based web application that allows users to search Indian postal data using any valid 6-digit Pincode. It connects to the official India Post Pincode API to fetch real-time post office details and displays them in a clean, user-friendly UI.",
       image: postoffice,
     tags: ["HTML", "CSS", "JavaScript", "React", "Firebase", "React Hooks","React Router Dom","API Integration"],

      github: "https://github.com/prmd04/Inidan-Post",
      webapp: "https://indian-post-prmd04.netlify.app/",
    },
    {
      id: 5,
      title: "Resume Builder",
      description:
        "The Resume Builder is a multi-step form application designed to help users create a fully customizable resume. Built using React and Redux, the project efficiently manages state across multiple pages and ensures a smooth, guided resume creation experience.The application features five structured sections—Profile, Education, Skills, Projects, and Social Media—each supporting add, edit, and delete functionalities. Users can easily move between sections using Next, Back, and Save & Continue buttons. Once completed, the data is compiled into a clean Final Resume Output page that users can save or load from a database",
       image: resumeBuilder,
     tags: ["HTML", "CSS", "JavaScript", "React", "Firebase", "React Hooks", "API Integration"],

      github: "https://github.com/acciojob/resume-builder-prmd04",
      webapp: "https://resume-builder-prmd04.netlify.app/",
    },
     {
      id: 6,
      title: "Shopping Cart",
      description:
        "This is a functional shopping cart application built using React for the user interface and Redux for global state management.The project demonstrates how to manage complex UI states—such as cart items, wishlist data, and discount logic—cleanly and predictably using Redux architecture. It simulates a basic e-commerce workflow and focuses on state handling, component communication, and user interaction.",
       image: shoppingCart,
     tags: ["HTML", "CSS", "JavaScript", "React", "Firebase", "Redux","React Router Dom" , "API Integration"],

      github: "https://github.com/prmd04/Shopping-Cart-Redux",
      webapp: "https://shopping-cart-prmd04.netlify.app/",
    },
    {
      id: 7,
      title: "Memory Game",
      description:
        "The Memory Game is an interactive browser-based puzzle that challenges users to test and improve their short-term memory. Players select a difficulty level, and a dynamic grid of tiles is generated. Each tile hides a number, and users must match pairs by remembering previously revealed values. The game provides an engaging experience with increasing difficulty, real-time feedback, and smooth visual interactions.Designed with a focus on logic, UI interaction, and efficient DOM manipulation, this project highlights my ability to build interactive web applications without relying on heavy frameworks.",
       image: memoryGame,
     tags: ["HTML", "CSS", "JavaScript", "React", ],

      github: "https://github.com/prmd04/Memory-Game",
      webapp: "https://memory-game-prmd04.netlify.app/",
    },
    {
      id: 8,
      title: "Movie Search",
      description:
        "This is a sleek, browser-based movie lookup application that lets users search for movie titles through the OMDb API. When a user types in a movie name, the app fetches matching movies and displays titles, release years, and poster images. It gracefully handles invalid or empty input by showing a custom error message (“Invalid movie name. Please try again.”), enhancing user experience and robustness.This project emphasizes API integration, asynchronous data fetching, and dynamic UI rendering — making it a strong example of how to build responsive, data-driven web apps.",
       image: movieSearch,
     tags: ["HTML", "CSS", "JavaScript", "React","OMDb API" , "netlify" ],

      github: "https://github.com/prmd04/Movie-Search",
      webapp: "https://movie-search-prmd04.netlify.app/",
    },
  ];

 export const education = [
    {
      id: 0,
       img: bncoe,
      school: "Babasaheb Naik College of Engineering , Pusad",
      date: "July 2022",
      grade: "8.02 CGPA",
      desc: "I have completed my Bachelor’s degree (B.E.) in Information Technology from SGBAU – Sant Gadge Baba Amravati University. During my studies, I built a strong foundation in programming, software development, and core computer science concepts. I covered key subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also participated in technical events and workshops that helped enhance my practical skills and broaden my understanding of real-world development. My experience at SGBAU has played a significant role in shaping my technical knowledge and overall professional growth.",
      degree: "Bachelor of Engineering (B.E.) in Information Technology",
    },
    {
      id: 1,
      school: "Phulsing Naik College, Pusad",
      grade: "52.13%",
      desc: "I completed my Higher Secondary Certificate (HSC) in Pure Science, studying Physics, Chemistry, Mathematics, and Biology. I pursued my HSC in Pusad, located in the Yavatmal district. This foundation in core science subjects helped me strengthen my analytical thinking and problem-solving skills. It also built the base that later supported my interest in programming and technology.",
      degree: "Higher Secondary Certificate (HSC)",
    },
    {
      id: 2,
      school: "Lokhit Vidyalaya pusad, Pusad",
      grade: "72.18%",
      desc: "I completed my SSC in the Science stream from Pusad. During this period, I built a strong foundation in essential subjects like Mathematics and General Science. My schooling helped me develop discipline, problem-solving skills, and consistent academic habits. This stage played an important role in preparing me for further studies in the science field. If you want, I can shorten or expand it based on your portfolio style.",
      degree: "Secondary School Certificate (SSC)",
    },
 ]
