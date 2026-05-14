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
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiTensorflow,
  SiPostgresql,
  SiVite,
  SiKeras,
  SiOpencv,
  SiAxios,
  SiGooglegemini,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdApi, MdCloud } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { BsFileEarmarkCode } from "react-icons/bs";

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
    title: "Languages",
    data: [
      { title: "C/C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "HTML/CSS", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "SQL", logoComponent: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "React.js", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "Node.js", logoComponent: FaNodeJs, color: "#339933" },
      { title: "Express.js", logoComponent: SiExpress, color: "#d4d4d8" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
      { title: "Vite", logoComponent: SiVite, color: "#646CFF" },
      { title: "TensorFlow", logoComponent: SiTensorflow, color: "#FF6F00" },
      { title: "Keras", logoComponent: SiKeras, color: "#D00000" },
      { title: "OpenCV", logoComponent: SiOpencv, color: "#5C3EE8" },
      { title: "Axios", logoComponent: SiAxios, color: "#5A29E4" },
    ],
  },
  {
    title: "Databases & Tools",
    data: [
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
      { title: "Firebase", logoComponent: SiFirebase, color: "#FFCA28" },
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
    ],
  },
  {
    title: "AI & Domain Skills",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
      { title: "REST API", logoComponent: MdApi, color: "#5C2D91" },
      { title: "DSA", logoComponent: FaLaptopCode, color: "#607D8B" },
      { title: "Machine Learning", logoComponent: GiBrain, color: "#3F51B5" },
      { title: "Deep Learning", logoComponent: GiBrain, color: "#FF9800" },
      { title: "NLP / BERT / LSTM", logoComponent: BsFileEarmarkCode, color: "#10A37F" },
    ],
  },
];
