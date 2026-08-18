// ========================================
// SKILLS DATA
// ========================================

import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPython,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiPostman,
  SiXampp,
  // SiPowerbi,
  // SiTableau,
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

// ========================================
// SKILL CATEGORIES
// ========================================

const skillCategories = [
  // ========================================
  // FRONTEND
  // ========================================

  {
    title: "Frontend",
    color: "blue",
    icon: FaCode,

    description:
      "Building responsive and interactive user interfaces with modern frontend technologies.",

    skills: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  // ========================================
  // BACKEND
  // ========================================

  {
    title: "Backend",
    color: "emerald",
    icon: FaServer,

    description:
      "Developing web applications, backend systems, and APIs using Laravel and PHP.",

    skills: [
      {
        name: "Laravel",
        icon: SiLaravel,
      },
      {
        name: "PHP",
        icon: SiPhp,
      },
      {
        name: "REST API",
        icon: FaCode,
      },
    ],
  },

  // ========================================
  // DATABASE
  // ========================================

  {
    title: "Database",
    color: "orange",
    icon: FaDatabase,

    description:
      "Designing, querying, and managing relational databases for web applications and data-driven systems.",

    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "SQL",
        icon: FaDatabase,
      },
      {
        name: "Database Design",
        icon: FaDatabase,
      },
    ],
  },

  // ========================================
  // DATA ANALYTICS
  // ========================================

  {
    title: "Data Analytics",
    color: "purple",
    icon: FaChartLine,

    description:
      "Processing, analyzing, and visualizing data to discover meaningful insights and support better decisions.",

    skills: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "Pandas",
        icon: SiPandas,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
      },
      {
        name: "Microsoft Excel",
        icon: FaFileExcel,
      },
    ],
  },
];

// ========================================
// DEVELOPMENT & ANALYTICS TOOLS
// ========================================

const tools = [
  {
    name: "VS Code",
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
    name: "Power BI",
    // icon: SiPowerbi,
  },
  {
    name: "Tableau",
    // icon: SiTableau,
  },
  {
    name: "XAMPP",
    icon: SiXampp,
  },
];

// ========================================
// EXPORT
// ========================================

export { skillCategories, tools };

export default skillCategories;
