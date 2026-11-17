import { DiJava } from "react-icons/di";
import { MdOutlineSettingsApplications } from "react-icons/md";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiGit,
  SiSpringboot,
} from "react-icons/si";
import { GiSandsOfTime } from "react-icons/gi";
import type { IconType } from "react-icons";

import ManagementSystemlogo from "../assets/ManagementSystemlogo.jpeg";
import ManagementSystemlogin from "../assets/ManagementSystemlogin.jpeg";
import ManagementSystemdashbaord from "../assets/ManagementSystemdashbaord.jpeg";
import ReactDashboard from "../assets/Dashboard.png";
import Burgerimg from "../assets/Burgerimg.png";
import CarPlatform from "../assets/CarPlatform.jpeg";
import SoftwareTestingCapstone from "../assets/software testing capstone.jpeg";
import UnifyApps from "../assets/Unifyapps.png";

import FastFoodOrderingWebsite1 from "../CarAdvPlarform/RegisterPage.png";
import FastFoodOrderingWebsite2 from "../CarAdvPlarform/LoginPage.png";
import FastFoodOrderingWebsite3 from "../CarAdvPlarform/HomePageDarkmode.png";
import FastFoodOrderingWebsite4 from "../CarAdvPlarform/HomePageLightMode.png";
import FastFoodOrderingWebsite5 from "../CarAdvPlarform/HomePagelogin.png";
import FastFoodOrderingWebsite6 from "../CarAdvPlarform/Category.png";
import FastFoodOrderingWebsite7 from "../CarAdvPlarform/add new car.png";
import FastFoodOrderingWebsite8 from "../CarAdvPlarform/Search.png";
import FastFoodOrderingWebsite9 from "../CarAdvPlarform/DELETE CAR.png";
import FastFoodOrderingWebsite10 from "../CarAdvPlarform/EDIT CAR INFORMATION.png";
import FastFoodOrderingWebsite11 from "../CarAdvPlarform/Car_details.png";
import FastFoodOrderingWebsite12 from "../CarAdvPlarform/loginout.png";
import FastFoodOrderingWebsite13 from "../CarAdvPlarform/select_Car.png";

import fastfood1 from "../FastFood/Signup Page.png";
import fastfood2 from "../FastFood/Login Page JWT.png";
import fastfood3 from "../FastFood/HomePage1.png";
import fastfood4 from "../FastFood/Footer_Home Page.png";
import fastfood5 from "../FastFood/MenuPage.png";
import fastfood6 from "../FastFood/OrderPage.png";
import fastfood7 from "../FastFood/ViewDetails page.png";
import fastfood8 from "../FastFood/Customize menu Page.png";
import fastfood9 from "../FastFood/Customize Page.png";
import fastfood10 from "../FastFood/Cart Page.png";

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const aboutMe = `Software Engineer specializing in full-stack and backend development, with a focus on designing and building scalable applications, secure REST APIs, and reliable software systems. Experienced in Java, Spring Boot, React, TypeScript, Node.js, and Laravel, with hands-on experience in database design, authentication, system integration, and AI-powered solutions using modern RAG architectures.

My background in software quality engineering adds another dimension to my development approach: I build with maintainability, testability, and reliability in mind. I enjoy solving complex problems, learning new technologies, and turning ideas into practical software solutions.`;

export const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: DiJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: MdOutlineSettingsApplications },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: MdOutlineSettingsApplications },
      { name: "Tailwind CSS", icon: MdOutlineSettingsApplications },
      { name: "HTML & CSS", icon: MdOutlineSettingsApplications },
      { name: "Framer Motion", icon: MdOutlineSettingsApplications },
      { name: "Figma Design Validation", icon: MdOutlineSettingsApplications },
    ],
  },
  {
    title: "Backend & Software Engineering",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: MdOutlineSettingsApplications },
      { name: "Node.js", icon: MdOutlineSettingsApplications },
      { name: "Express.js", icon: MdOutlineSettingsApplications },
      { name: "Laravel", icon: SiLaravel },
      { name: "FastAPI", icon: MdOutlineSettingsApplications },
      { name: "REST APIs", icon: MdOutlineSettingsApplications },
      { name: "JWT Authentication", icon: MdOutlineSettingsApplications },
      { name: "Role-Based Access Control", icon: MdOutlineSettingsApplications },
      { name: "OOP & MVC", icon: MdOutlineSettingsApplications },
      { name: "Dependency Injection", icon: MdOutlineSettingsApplications },
    ],
  },
  {
    title: "Databases & Infrastructure",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: MdOutlineSettingsApplications },
      { name: "Docker", icon: MdOutlineSettingsApplications },
      { name: "RabbitMQ", icon: MdOutlineSettingsApplications },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "AI & Intelligent Systems",
    skills: [
      { name: "Ollama", icon: MdOutlineSettingsApplications },
      { name: "Retrieval-Augmented Generation (RAG)", icon: MdOutlineSettingsApplications },
      { name: "Qdrant", icon: MdOutlineSettingsApplications },
      { name: "Embeddings", icon: MdOutlineSettingsApplications },
      { name: "OCR & Text Extraction", icon: MdOutlineSettingsApplications },
    ],
  },
  {
    title: "QA Automation & Testing",
    skills: [
      { name: "Selenium", icon: MdOutlineSettingsApplications },
      { name: "Appium", icon: MdOutlineSettingsApplications },
      { name: "TestNG", icon: MdOutlineSettingsApplications },
      { name: "Robot Framework", icon: MdOutlineSettingsApplications },
      { name: "Postman", icon: MdOutlineSettingsApplications },
      { name: "API Testing", icon: MdOutlineSettingsApplications },
      { name: "Functional & Regression Testing", icon: MdOutlineSettingsApplications },
      { name: "Test Case Design", icon: MdOutlineSettingsApplications },
    ],
  },
  {
    title: "Tools & Delivery",
    skills: [
      { name: "Azure DevOps", icon: MdOutlineSettingsApplications },
      { name: "Jira", icon: MdOutlineSettingsApplications },
      { name: "CI/CD Pipelines", icon: MdOutlineSettingsApplications },
      { name: "Agile & Scrum", icon: MdOutlineSettingsApplications },
      { name: "Developer Support", icon: MdOutlineSettingsApplications },
      { name: "Figma", icon: MdOutlineSettingsApplications },
    ],
  },
];

export const portfolioItems = [
  {
    title: "Management System",
    category: "Full-Stack Engineering · Spring Boot · React · AI",
    period: "2026",
        summary: "A secure platform for organizational workflows, approvals, notifications, and AI assistance.",
description:
      "Designed and developed a full-stack management platform that brings organizational workflows into one secure application. Built with Java, Spring Boot, React, and TypeScript, it includes authentication, role-based access control, request lifecycle management, approval workflows, notifications, and bilingual user experiences. An integrated Python-based AI assistant uses retrieval-augmented generation, Ollama, and Qdrant to retrieve relevant knowledge and provide contextual responses.",
    cardImage: ManagementSystemlogo,
    galleryImages: [ManagementSystemlogo,ManagementSystemlogin,ManagementSystemdashbaord],
    demo: "https://system-management.managementsystemprod.workers.dev/login",
    link: "https://github.com/HamzaOsailan/System-Management",
  },
  {
    title: "Case Management System",
    category: "UnifyApps · Low-Code Development · Case Management · Workflow Management",
    period: "UnifyApps Technical Bootcamp · 4 Weeks · 20 Hours",
        summary: "A case management platform for tracking cases, team workflows, messaging, and SLA performance.",
description:
      "Designed and implemented a web-based case management system that streamlines communication and case handling between external users and internal teams. The platform enables users to submit and track cases while providing internal teams with tools to manage, assign, and resolve them through a transparent workflow with status tracking and communication history. Key features include role-based access control for Users, Agents, Supervisors, and Admins; end-to-end case lifecycle management (New, In Progress, Waiting for Customer, Resolved, and Closed); threaded messaging with internal and private notes; SLA tracking for response and resolution times; file attachments; and an advanced case management dashboard with filtering. The solution also involved designing a structured data model covering Cases, Messages, Attachments, and Status History, with a clear separation between external and internal workflows and a focus on maintainability, performance, and clean architecture. This project strengthened my backend development, workflow design, and system design skills.",
    cardImage: UnifyApps,
    galleryImages: [UnifyApps],
    demo: "https://partnerua.lyearn.com",
    certificate: "https://partnerua.lyearn.com/certificates/G$4S7jjvDa",
  },
  {
    title: "Fast Food Ordering Website",
    category: "MERN Stack · MongoDB · Express · React · Node.js",
    period: "Personal Project · 2024",
        summary: "A food ordering app with menu browsing, meal customization, cart management, and secure authentication.",
description:
      "Developed a full-stack food ordering application using the MERN stack. The platform supports account registration and JWT-based authentication, menu discovery, item details, food customization, cart management, and order placement. Built RESTful backend services with Node.js and Express, integrated MongoDB for data persistence, and created a responsive React interface styled with Tailwind CSS.",
    cardImage: Burgerimg,
    galleryImages: [
      fastfood1,
      fastfood2,
      fastfood3,
      fastfood4,
      fastfood5,
      fastfood6,
      fastfood7,
      fastfood8,
      fastfood9,
      fastfood10,
    ],
    link: "https://github.com/HamzaOsailan/Fast-Food-Ordering-Website",
  },
  {
    title: "React Dashboard",
    category: "React.js · TypeScript · Tailwind CSS",
    period: "Personal Project",
        summary: "A responsive analytics dashboard with charts, filters, pagination, and PDF export.",
description:
      "Built a responsive analytics dashboard focused on presenting operational data clearly. Features include interactive charts, summary statistics, search and filtering, pagination, periodic data refresh, and PDF export. Developed with React and TypeScript, with a responsive interface styled using Tailwind CSS.",
    cardImage: ReactDashboard,
    galleryImages: [ReactDashboard],

    demo: "https://react-dashbaord-webpage.netlify.app/",
    link: "https://github.com/HamzaOsailan/Responsive-Dashboard",
  },
  {
    title: "Car Advertisement Platform",
    category: "Laravel · React.js · MySQL",
    period: "Personal Project · 2023–2024",
        summary: "A car listing platform with search, filters, image uploads, and advertisement management.",
description:
      "Developed a web platform for publishing and managing car advertisements, combining a Laravel and MySQL backend with a React frontend. Implemented user authentication, vehicle listings, category browsing, image uploads, search and filtering, detailed vehicle pages, and listing management workflows for creating, editing, and deleting advertisements.",
    cardImage: CarPlatform,
    galleryImages: [
      FastFoodOrderingWebsite1,
      FastFoodOrderingWebsite2,
      FastFoodOrderingWebsite3,
      FastFoodOrderingWebsite4,
      FastFoodOrderingWebsite5,
      FastFoodOrderingWebsite6,
      FastFoodOrderingWebsite7,
      FastFoodOrderingWebsite8,
      FastFoodOrderingWebsite9,
      FastFoodOrderingWebsite10,
      FastFoodOrderingWebsite11,
      FastFoodOrderingWebsite12,
      FastFoodOrderingWebsite13,
    ],
    link: "https://github.com/HamzaOsailan/Car-Advertisment-Plarfom",
  },

  {
    title: "Software Testing Bootcamp – Online Capstone",
    category: "Software Testing · Quality Engineering · Automation",
    period: "Saudi Digital Academy · 13 Weeks · Feb–May 2024",
        summary: "A practical software testing capstone focused on quality engineering and testing workflows.",
description:
      "Completed a 13-week software testing bootcamp delivered by Clarusway in partnership with the Saudi Digital Academy. The online capstone provided a practical opportunity to apply software testing concepts and strengthen hands-on quality engineering skills.",
    cardImage: SoftwareTestingCapstone,
    galleryImages: [SoftwareTestingCapstone],
    link: "https://github.com/Alaslani/Capstone1",
  },
];

export interface Experience {
  id: number;
  company: string;
  logo: IconType;
  title: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Adree Co. for Information Technology",
    logo: GiSandsOfTime,
    title: "Software Engineer | Software Quality & Test Automation",
    period: "Aug 2024 - Aug 2026",
    description:
      "Contributed to software quality engineering across enterprise-level digital solutions. Developed and maintained web and mobile test automation using Selenium, TestNG, Appium, and Robot Framework. Performed functional, regression, smoke, exploratory, and user acceptance testing; designed and executed test cases; validated APIs and application workflows; documented defects; and collaborated with developers and cross-functional teams using Jira, Azure DevOps, and Figma references. Also applied OCR-based text extraction in testing activities. Joined an internal 20-hour technical bootcamp focused on UnifyApps through an initiative to gain hands-on exposure to software development, collaborating with developers and contributing to a small practical project.",
    skills: [
      "Selenium",
      "TestNG",
      "Appium",
      "Robot Framework",
      "API Testing",
      "Web & Mobile Testing",
      "Regression & UAT",
      "OCR",
      "Jira",
      "Azure DevOps",
      "Figma Validation",
      "Defect Management",
    ],
  },
];

export const education = [
  {
    school: "Taibah University, Medina, Saudi Arabia",
    degree: "Bachelor of Science in Computer Science",
    period: "Dec 2017 - Dec 2022",
  },
];

export const certifications = [
  {
    title: "ISTQB Certified Tester Foundation Level (CTFL)",
    organization: "International Software Testing Qualifications Board (ISTQB)",
    period: "2024",
  },
  {
    title: "Software Testing Bootcamp",
    organization: "Saudi Digital Academy · Delivered with Clarusway · 13 Weeks",
    period: "Feb 4 - May 23, 2024",
  },
  {
    title: "Technical Bootcamp Completion Certificate",
    organization: "UnifyApps · Internal Company Bootcamp · 20 Hours",
    period: "Mar 2026",
  },
  {
    title: "Deep Learning with Keras",
    organization: "Tuwaiq Academy · 20 Hours",
    period: "Feb 2024",
  },
  {
    title: "Relational Databases",
    organization: "Coursera",
    period: "Mar 2024",
  },
  {
    title: "JavaScript",
    organization: "Ministry of Communications and Information Technology · 16 Hours",
    period: "May 2025",
  },
  {
    title: "Introduction to HTML5",
    organization: "Coursera",
    period: "Completed",
  },
  {
    title: "API Testing via Postman",
    organization: "Coursera",
    period: "Completed",
  },
  {
    title: "Introduction to IoT",
    organization: "Cisco",
    period: "Completed",
  },
  {
    title: "React and Redux",
    organization: "SoloLearn",
    period: "Completed",
  },
  {
    title: "JavaScript",
    organization: "SoloLearn",
    period: "Completed",
  },
  {
    title: "Web Development Fundamentals",
    organization: "SoloLearn",
    period: "Completed",
  },
  {
    title: "Java",
    organization: "SoloLearn",
    period: "Completed",
  },
  {
    title: "Cybersecurity",
    organization: "CertiProf",
    period: "Certificate",
  },
  {
    title: "Java",
    organization: "HackerRank",
    period: "Certificate",
  },
];
 