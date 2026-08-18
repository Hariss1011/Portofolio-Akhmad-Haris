const projects = [
  {
    id: 1,

    // ========================================
    // BASIC INFORMATION
    // ========================================

    slug: "sistem-pengajuan-surat-desa",

    title: "Sistem Pengajuan Surat Desa",

    category: "Web Application",

    year: "2025",

    status: "Completed",

    thumbnail: "/images/projects/desa/thumbnail.png",

    // ========================================
    // DESCRIPTION
    // ========================================

    overview:
      "A web-based village administration system that enables residents to submit certificates online and helps village staff manage administrative services efficiently.",

    description:
      "This application was developed as my undergraduate final project using Laravel and MySQL. It digitizes the village certificate submission process, reducing manual work and improving service efficiency.",

    // ========================================
    // TECHNOLOGIES
    // ========================================

    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],

    // ========================================
    // FEATURES
    // ========================================

    features: [
      "Multi-user Authentication",
      "Resident Management",
      "Online Certificate Submission",
      "PDF Generation",
      "Admin Dashboard",
      "News Management",
    ],

    // ========================================
    // CHALLENGES
    // ========================================

    challenges: [
      "Designing an efficient database structure.",
      "Implementing role-based authentication.",
      "Generating PDF documents dynamically.",
    ],

    // ========================================
    // SOLUTIONS
    // ========================================

    solutions: [
      "Designed a normalized MySQL database.",
      "Implemented Laravel authentication and middleware.",
      "Used Laravel DomPDF for document generation.",
    ],

    // ========================================
    // SCREENSHOTS
    // ========================================

    screenshots: [
      "/images/projects/desa/login.png",
      "/images/projects/desa/dashboard.png",
      "/images/projects/desa/pengajuan.png",
      "/images/projects/desa/pengajuanSurat.png",
    ],

    // ========================================
    // LINKS
    // ========================================

    github: "https://github.com/Hariss1011/Desa-MertapadaKulon",

    demo: "",
  },

  // ==========================================================
  // TODO — please review: challenges/solutions and screenshots
  // still need your input. Overview/description/features below
  // are based on the scope you confirmed (patients, doctors +
  // schedules, medicine).
  // ==========================================================

  {
    id: 2,

    slug: "sistem-manajemen-kesehatan",

    title: "Sistem Manajemen Kesehatan",

    category: "Web Application",

    year: "2025",

    status: "Completed",

    thumbnail: "/images/projects/kesehatan/thumbnail.png",

    overview:
      "A Laravel-based healthcare management system that helps clinics manage patient registration, doctor schedules, and medicine inventory in one platform.",

    description:
      "Built with Laravel and AdminLTE, this system provides a centralized platform for managing patient registration, doctor schedules, and medicine inventory. The project was developed as an academic web application to practice backend development, database management, and information system design.",

    technologies: ["Laravel", "PHP", "MySQL", "AdminLTE", "Blade"],

    features: [
      "Patient Registration",
      "Doctor Data & Schedule Management",
      "Medicine Inventory Management",
      "Admin Dashboard",
    ],

    challenges: [
      "Designing a database structure that connects patients, doctors, schedules, and medicine data.",
      "Managing different types of healthcare data within a single system.",
      "Creating a clear workflow for managing patient registrations, doctor schedules, and medicine inventory.",
    ],

    solutions: [
      "Designed relational MySQL tables with appropriate relationships between healthcare entities.",
      "Organized the system into separate modules for patients, doctors, schedules, and medicine management.",
      "Implemented Laravel CRUD functionality and validation to maintain consistent and organized data.",
    ],

    screenshots: [],

    github: "https://github.com/Hariss1011/Sistem-Manajemen-Kesehatan",

    demo: "",
  },

  // ==========================================================
  // TODO — please review: challenges/solutions and screenshots
  // still need your input. Overview/description/features below
  // are based on this being an event ticketing system.
  // ==========================================================

  {
    id: 3,

    slug: "sistem-manajemen-tiket",

    title: "Sistem Manajemen Tiket",

    category: "Web Application",

    year: "2025",

    status: "Completed",

    thumbnail: "/images/projects/tiket/thumbnail.png",

    overview:
      "A Laravel-based event ticketing system that allows organizers to manage events and attendees to register or book tickets online.",

    description:
      "Built with Laravel and Tailwind CSS, this academic web application provides a platform for managing events, ticket registrations, and attendee data. The project focuses on implementing CRUD operations, relational database management, authentication, and administrative workflows.",

    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Blade"],

    features: [
      "Event Listing & Management",
      "Ticket Booking / Registration",
      "Attendee Management",
      "Admin Dashboard",
    ],

    challenges: [
      "Designing a database structure that connects events, tickets, and attendee information.",
      "Managing the ticket registration process while keeping attendee data organized.",
      "Creating an administration workflow for monitoring events and ticket registrations.",
    ],

    solutions: [
      "Designed relational MySQL tables to connect events, tickets, and attendee data.",
      "Implemented Laravel-based forms and validation to handle ticket registrations consistently.",
      "Developed an admin dashboard to centralize event and attendee management.",
    ],

    screenshots: [],

    github: "https://github.com/Hariss1011/Sistem-Manajemen-Tiket",

    demo: "",
  },
];

export default projects;
