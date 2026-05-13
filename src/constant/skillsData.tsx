import React from "react";

import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaMobile,
  FaPython,
  FaReact,
  FaGaugeHigh,
  FaRobot,
  FaCodeBranch,
  FaSquareJs,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa6";

import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiTensorflow,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiOpenai,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdApi, MdCloud } from "react-icons/md";
import { FaAws } from "react-icons/fa";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "C/C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "TypeScript", logoComponent: SiTypescript, color: "#3178C6" },
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
      { title: "PostgreSQL", logoComponent: SiPostgresql, color: "#4169E1" },
      { title: "Redis", logoComponent: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "React.js", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "Node.js", logoComponent: FaNodeJs, color: "#339933" },
      { title: "Express.js", logoComponent: SiExpress, color: "#d4d4d8" },
      { title: "TensorFlow", logoComponent: SiTensorflow, color: "#FF6F00" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
      { title: "Framer Motion", logoComponent: SiFramer, color: "#0055FF" },
      { title: "Prisma", logoComponent: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    title: "Cloud & DevOps",
    data: [
      { title: "AWS", logoComponent: FaAws, color: "#FF9900" },
      { title: "Azure", logoComponent: MdCloud, color: "#0078D4" },
      { title: "Google Cloud", logoComponent: MdCloud, color: "#4285F4" },
      { title: "Docker", logoComponent: FaDocker, color: "#2496ED" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
      { title: "Firebase", logoComponent: SiFirebase, color: "#FFCA28" },
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
    ],
  },
  {
    title: "AI/ML & Concepts",
    data: [
      { title: "Machine Learning", logoComponent: GiBrain, color: "#3F51B5" },
      { title: "Deep Learning", logoComponent: GiBrain, color: "#FF9800" },
      { title: "NLP", logoComponent: SiOpenai, color: "#10A37F" },
      { title: "REST API Design", logoComponent: MdApi, color: "#5C2D91" },
      { title: "DSA", logoComponent: FaLaptopCode, color: "#607D8B" },
      { title: "Test Automation", logoComponent: FaRobot, color: "#9C27B0" },
      { title: "CI/CD", logoComponent: FaCodeBranch, color: "#0A66C2" },
      { title: "Performance Opt.", logoComponent: FaGaugeHigh, color: "#388E3C" },
      { title: "Responsive Design", logoComponent: FaMobile, color: "#009688" },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
    ],
  },
];
