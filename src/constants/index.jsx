import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiCss3, SiHtml5, SiTailwindcss } from "react-icons/si";
import { BiLogoBootstrap } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Adeel Ijaz",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/ADeel2111",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/ADeel2111",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/ADeel2111",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/ADeel2111",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/ADeel2111",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/ADeel2111",
  },
];

export const BIO = [
  "Thank you for this opportunity. I am a hardworking, trustworthy, commercially-focused, and diligent employee with the skills to match the job description. Following my education, I honed my craft and expertise during a 3-month internship at PNY, where I immersed myself in the field of frontend development.",
  "I graduated from Government College University Faisalabad with good grades in key subjects such as Object-Oriented Programming (OOP), Databases, Data Structures and Algorithms (DSA), etc.",
  "Since then, I have worked for several companies, where I gained experience in teamwork, delivering excellent customer service, and completing sensitive projects.",
  "During my internship in Lahore, I gained substantial experience in frontend development, which strengthened my expertise. I also learned to collaborate effectively with a team, adapt quickly, analyze different environments, and manage projects efficiently.",
  "As a multi-disciplinary frontend developer, I bring a wealth of skills and expertise to my work. With a deep understanding of HTML, CSS, Bootstrap, TailwindCSS, and JavaScript, along with proficiency in modern frameworks like React.js, I possess a versatile skill set that enables me to craft stunning and memorable web experiences for clients and audiences alike.",
  "If you hire me, I will be the type of employee who acts as a good role model for the company and remains flexible with my job description to support the company in times of need.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.Js",
    experience: "0.5 year",
  },
  {
    icon: <TbBrandJavascript className="text-4xl text-white lg:text-5xl" />,
    name: "JavaScript",
    experience: "1 year",
  },
  {
    icon: <SiHtml5 className="text-4xl text-green-600 lg:text-5xl" />,
    name: "HTML",
    experience: "1+ year",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-red-600 lg:text-5xl" />,
    name: "TailwindCss",
    experience: "1+ year",
  },
  {
    icon: <SiCss3 className="text-4xl text-green-600 lg:text-5xl" />,
    name: "CSS",
    experience: "1+ year",
  },
  {
    icon: <BiLogoBootstrap className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "BootStrap",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Junior Web Developer",
    company: "Nucleons ",
    duration: "March 2024 - July 2024",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
  {
    title: "Frontend Engineer",
    company: "TriconV",
    duration: "January 2023 - January 2023",
    description:
      "At TriconV, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Frontend Developer",
    company: "DevTown",
    duration: "February 2022 - May 2022",
    description:
      "As a Frontend Developer, I developed advanced web applications using cutting-edge technologies like React.Js.I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Government College University Faisalabad",
    duration: "October 2020 - October 2024",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons. where I developed several web applications using HTML, CSS, TailwindCss , BootStrap , JavaScript, React.Js , MongoDb , Node.Js and Express.Js. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
    //  courses:"Courses : OOP , DSA , Database , Operating system , Web Designing , Mobile Application , Computer Networking , Computer Architecture"
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/login.php/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://github.com/ADeel2111/ADeel2111",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/adeelijaz12/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
