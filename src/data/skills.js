import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiXampp,
} from "react-icons/si";

import {
  FaCss3Alt,
  FaDatabase,
  FaFileExcel,
  FaCode,
  FaServer,
  FaChartLine,
  FaDesktop,
} from "react-icons/fa";

const skillCategories = [
  {
    key: "frontend",
    color: "blue",
    icon: FaCode,
    skills: [
      { key: "react", icon: SiReact },
      { key: "javascript", icon: SiJavascript },
      { key: "html", icon: SiHtml5 },
      { key: "css", icon: FaCss3Alt },
      { key: "tailwind", icon: SiTailwindcss },
    ],
  },
  {
    key: "backend",
    color: "emerald",
    icon: FaServer,
    skills: [
      { key: "laravel", icon: SiLaravel },
      { key: "php", icon: SiPhp },
      { key: "mvc", icon: FaCode },
    ],
  },
  {
    key: "database",
    color: "orange",
    icon: FaDatabase,
    skills: [
      { key: "mysql", icon: SiMysql },
      { key: "sqlJoin", icon: FaDatabase },
      { key: "groupBy", icon: FaDatabase },
      { key: "databaseDesign", icon: FaDatabase },
    ],
  },
  {
    key: "data",
    color: "purple",
    icon: FaChartLine,
    skills: [
      { key: "excel", icon: FaFileExcel },
      { key: "pivotTable", icon: FaFileExcel },
      { key: "excelFormulas", icon: FaFileExcel },
      { key: "dataReporting", icon: FaChartLine },
    ],
  },
];

const tools = [
  { name: "Visual Studio Code", icon: FaDesktop },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "XAMPP", icon: SiXampp },
];

export { skillCategories, tools };
export default skillCategories;
