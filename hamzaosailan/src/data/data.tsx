// src/data/data.tsx

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

import managmentSystem from '../assets/Inprogress.png';
import ManagementSystem from '../assets/Inprogress.png';
import FastFoodOrderingWebsite from '../assets/Burgerimg.png';
import ReactDashboard from '../assets/Dashboard.png';
import CarAdvertisementPlatform from '../assets/CarPlatform.jpeg';

import FastFoodOrderingWebsite1 from '../CarAdvPlarform/RegisterPage.png';
import FastFoodOrderingWebsite2 from '../CarAdvPlarform/LoginPage.png';
import FastFoodOrderingWebsite3 from '../CarAdvPlarform/HomePageDarkmode.png';
import FastFoodOrderingWebsite4 from '../CarAdvPlarform/HomePageLightMode.png';
import FastFoodOrderingWebsite5 from '../CarAdvPlarform/HomePagelogin.png';
import FastFoodOrderingWebsite6 from '../CarAdvPlarform/Category.png';
import FastFoodOrderingWebsite7 from '../CarAdvPlarform/add new car.png';
import FastFoodOrderingWebsite8 from '../CarAdvPlarform/Search.png';
import FastFoodOrderingWebsite9 from '../CarAdvPlarform/DELETE CAR.png';
import FastFoodOrderingWebsite10 from '../CarAdvPlarform/EDIT CAR INFORMATION.png';
import FastFoodOrderingWebsite11 from '../CarAdvPlarform/Car_details.png';
import FastFoodOrderingWebsite12 from '../CarAdvPlarform/loginout.png';
import FastFoodOrderingWebsite13 from '../CarAdvPlarform/select_Car.png';

import fastfood1 from '../FastFood/Signup Page.png';
import fastfood2 from '../FastFood/Login Page JWT.png';
import fastfood3 from '../FastFood/HomePage1.png';
import fastfood4 from '../FastFood/Footer_Home Page.png';
import fastfood5 from '../FastFood/MenuPage.png';
import fastfood6 from '../FastFood/OrderPage.png';
import fastfood7 from '../FastFood/ViewDetails page.png';
import fastfood8 from '../FastFood/Customize menu Page.png';
import fastfood9 from '../FastFood/Customize Page.png';
import fastfood10 from '../FastFood/Cart Page.png';

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const aboutMe = `Full-Stack Developer skilled in JavaScript frameworks, Node.js, Spring Boot, Laravel. Experienced in REST APIs, relational & NoSQL databases, CI/CD integration.`;

export const skillsData = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: DiJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot }, // ✅ Spring Boot added
      { name: "Laravel", icon: SiLaravel },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Azure DevOps", icon: MdOutlineSettingsApplications },
      { name: "Jira", icon: MdOutlineSettingsApplications },
      { name: "Git", icon: SiGit },
      { name: "CI/CD Pipelines", icon: MdOutlineSettingsApplications },
    ],
  },
];
//   {
//     title: "Soft Skills",
//     skills: [
//       { name: "Analytical problem solving", icon: IoIosStarOutline },
//       { name: "Structured debugging approach", icon: IoIosStarOutline },
//       { name: "Cross-functional collaboration", icon: IoIosStarOutline },
//       { name: "Details-oriented execution", icon: IoIosStarOutline },
//       { name: "Fast adaption to new frameworks", icon: IoIosStarOutline },
//     ],
//   },
// ];

export const portfolioItems = [
  {
    title: "Management System",
    category: "Spring boot & React.js",
    period: "Mar 2026 – Present",
    description: "In-Progress",
    cardImage: ManagementSystem,
    galleryImages: [managmentSystem],
    link: "https://example.com/management-system",
  },
  {
    title: "Fast Food Ordering Website",
    category: "MERN Stack",
    period: "",
    description: "Developed a fast-food ordering platform with menu browsing, cart, and order placement...",
    cardImage: FastFoodOrderingWebsite,
    galleryImages: [fastfood1, fastfood2, fastfood3, fastfood4, fastfood5, fastfood6, fastfood7, fastfood8, fastfood9, fastfood10],
    link: "https://example.com/fast-food-website",
  },
  {
    title: "React Dashboard",
    category: "React.js + Tailwindcss",
    period: "",
    description: "Responsive frontend with React.js & Tailwind CSS.",
    cardImage: ReactDashboard,
    galleryImages: [ReactDashboard, "https://example.com/react-dashboard-image2.png"],
    link: "https://react-dashbaord-webpage.netlify.app/",
  },
  {
    title: "Car Advertisement Platform",
    category: "Laravel & React.js",
    period: "",
    description: "Built a web app for creating, editing, and managing car advertisements...",
    cardImage: CarAdvertisementPlatform,
    galleryImages: [
      FastFoodOrderingWebsite1, FastFoodOrderingWebsite2, FastFoodOrderingWebsite3, FastFoodOrderingWebsite4,
      FastFoodOrderingWebsite5, FastFoodOrderingWebsite6, FastFoodOrderingWebsite7, FastFoodOrderingWebsite8,
      FastFoodOrderingWebsite9, FastFoodOrderingWebsite10, FastFoodOrderingWebsite11, FastFoodOrderingWebsite12,
      FastFoodOrderingWebsite13
    ],
    link: "https://example.com/car-platform",
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
    company: "ADREE, Riyadh, Saudi Arabia",
    logo: GiSandsOfTime,
    title: "Quality Assurance Engineer",
    period: "Aug 2024 – Present",
    description: "Developed automated test suites and frameworks for web and mobile using Selenium, TestNG, Appium, and Robot Framework, increasing coverage from 20% to 74%. Executed 831+ test cases, identified 400+ bugs, and reduced post-release defects by 27%. Participated in multiple ADREE projects, including government and SADAIA TAWAKKALNA initiatives.",
    skills: ["Selenium", "TestNG", "Appium", "Robot Framework", "Web & Mobile Testing"],
  },
];

export const education = [
  {
    school: "Taibah University, Medina, Saudi Arabia",
    degree: "B.S. in Computer Science",
    period: "Dec 2017 – Dec 2022",
  },
];

export const certifications = [
  { title: "ISTQB CTFL", organization: "International Software Testing Qualifications Board (ISTQB)", period: "Apr 2025" },
  { title: "Relational Databases", organization: "Coursera", period: "Mar 2024" },
  { title: "Deep Learning with Keras", organization: "Tuwaiq Academy", period: "Feb 2024" },
  { title: "Software Testing Bootcamp", organization: "Saudi Digital Academy", period: "Jan 2024 – May 2024" },
  { title: "JavaScript", organization: "Ministry of Communications and Information Technology", period: "May 2023" },
];