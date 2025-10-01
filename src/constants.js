// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/matchMate.jpeg";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import PhpLogo from "./assets/tech_logo/PHP.jpg";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/engineer.jpg";
import newtonschoolLogo from "./assets/aspnet.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/uni.jpg";
import bsaLogo from "./assets/education_logo/SchColl.jpg";
import vpsLogo from "./assets/education_logo/SchColl.jpg";

// Project Section Logo's
import githubdetLogo from "./assets/TMS.jpeg";
import movierecLogo from "./assets/portfolio.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C-Sharp", logo: csharpLogo },
      { name: "PHP", logo: PhpLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Software Engineer",
    company: "Edenrobe Apparells",
    date: "July 2025 - Present",
    desc: "Contributing as a Full Stack Software Engineer, focusing on ERP system development and optimization. Development: Designing and enhancing ERP modules using ASP.NET WebForms, ASP.NET AJAX, and Python Flask. Collaboration: Working with cross-functional teams to deliver new features, improve performance, and ensure seamless integration. Optimization: Troubleshooting and refining ERP functionalities to increase efficiency and reliability.",
    skills: [
      "ASP.Net WebForms",
      "ASP.Net AJAX",
      "React JS",
      "Python Flask",
      "JavaScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
    ],
  },

  {
    id: 1,
    img: newtonschoolLogo,
    role: "Software Developer",
    company: "Helping Hand Softwares HHS",
    date: "July 2023 - September 2023",
    desc: "Frontend: Built responsive and scalable UI components using HTML, CSS, JavaScript, Bootstrap. Translated Figma prototypes into interactive, user-friendly web pages. Backend: Developed and maintained server-side logic with C# (.NET), integrated APIs, and optimized database queries to improve system performance. Collaboration: Partnered with cross-functional teams to ensure seamless delivery of features, while applying clean code practices and performance optimization techniques.",
    skills: [".Net Developer", "C#", "HTML", "CSS", "Javascript", "Bootstrap", "Figma"],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "PAF KIET University, Karachi",
    date: "Aug 2021 - June 2025",
    grade: "3.0 CGPA",
    desc: "I have completed my bachelor's degree (BSCS) in Computer Science. During my time at KIET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at KIET University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor's Of Computer Science - BSCS",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Bright Future (BFPSC)",
    date: "2018 - 2020",
    grade: "A+",
    desc: "I completed my FSc in Pre-Engineering from Bright Future College between 2018 and 2020. During this time, I developed a strong foundation in core science and mathematics subjects such as Physics, Chemistry, and Mathematics. My education equipped me with analytical and problem-solving skills, preparing me for further studies in engineering and technology.",
    degree: "FSc Pre-Engineering",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Bright Future School (BFPSC)",
    date: "2016 - 2018",
    grade: "A",
    desc: "I completed my matriculation from Bright Future Public School between 2016 and 2018 with a focus on Biology. My studies provided a strong academic foundation in science subjects, enhancing my analytical and critical thinking abilities.",
    degree: "Matriculation - Biology",
  },
];

export const projects = [
  {
    id: 0,
    title: "Tutor Management System (TMS)",
    description:"A web-based application built with ASP.NET (C#) and SQL Server that streamlines the management of tutors, students, and courses. It includes features like user registration, class scheduling, course assignment, and progress tracking — helping institutes automate and organize their tutoring services efficiently.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "ASP.NET", "C#"],
    github:"https://github.com/Shan-Gul/Tutor-Management--master",
    webapp: "http://tutor-management--master.runasp.net/",
  },
  {
    id: 1,
    title: "Match-Mate ",
    description:
      "Match Mate is a mobile application developed using React Native, PHP, Python, and MySQL, designed to connect users through intelligent matchmaking. The app allows users to create profiles, set preferences, and get personalized matches using smart algorithms. It includes features like secure authentication, real-time chat, and recommendation systems, providing a smooth and interactive social experience across Android and iOS platforms.",
    image: sassLogo,
    tags: [
      "React-Native",
      "JavaScript",
      "PHP",
      "Python",
      "Kotlin"
    ],
    github: "https://github.com/Shan-Gul/Match-Mate-main",
  },
  {
    id: 2,
    title: "My-PortFolio",
    description:
      "Personal Portfolio Website – A modern, responsive portfolio built with HTML, CSS, JavaScript, and React (Vite) to showcase my skills, projects, and professional experience. The site features smooth animations, a clean UI, and sections for About, Work Experience, Projects, Skills, and Contact. It also includes a downloadable resume and links to my GitHub and LinkedIn, making it a central hub for my professional profile.",
    image: movierecLogo,
    tags: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Shan-Gul/portfolio-main",
    webapp: "round-cake.surge.sh",
  },
];
