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
    title: "Frontend Development",
    color: "blue",
    icon: FaCode,

    description:
      "Building responsive and interactive user interfaces using modern frontend technologies.",

    skills: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend Development",
    color: "emerald",
    icon: FaServer,

    description:
      "Developing web applications and server-side functionality using PHP and Laravel.",

    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "MVC Architecture", icon: FaCode },
    ],
  },

  {
    title: "Database Management",
    color: "orange",
    icon: FaDatabase,

    description:
      "Working with relational databases, SQL queries, and database structures for information systems.",

    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQL JOIN", icon: FaDatabase },
      { name: "GROUP BY & Aggregation", icon: FaDatabase },
      { name: "Database Design", icon: FaDatabase },
    ],
  },

  {
    title: "Data Management & Analysis",
    color: "purple",
    icon: FaChartLine,

    description:
      "Processing, organizing, and summarizing data to support reporting and operational decision-making.",

    skills: [
      { name: "Microsoft Excel", icon: FaFileExcel },
      { name: "PivotTable", icon: FaFileExcel },
      { name: "Excel Formulas", icon: FaFileExcel },
      { name: "Data Reporting", icon: FaChartLine },
    ],
  },
];

const tools = [
  {
    name: "Visual Studio Code",
    icon: FaDesktop,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "XAMPP",
    icon: SiXampp,
  },
];

export { skillCategories, tools };
export default skillCategories;
