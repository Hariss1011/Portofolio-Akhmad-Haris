const projects = [
  // ==========================================================
  // 01. STOCKWISE
  // ==========================================================
  {
    id: 1,
    slug: "stockwise",
    title: "StockWise",
    subtitle: "Inventory Management System",
    category: "Inventory Management",
    year: "2026",
    status: "Completed",

    thumbnail: "/images/projects/covers/stockwise.png",

    overview:
      "A web-based inventory management system designed to organize product data, monitor stock movements, manage suppliers, and generate inventory reports.",

    description:
      "StockWise is an inventory management application developed using Laravel, PHP, and MySQL. The system helps administrators and staff manage product information, record stock transactions, monitor inventory levels, and generate reports. It also implements data validation to maintain stock consistency and prevent negative inventory.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "Laravel Excel",
      "PhpSpreadsheet",
    ],

    features: [
      "Product, Category, and Supplier Management",
      "Stock In and Stock Out Transactions",
      "Stock Adjustment",
      "Automatic Stock Calculation",
      "Negative Stock Prevention",
      "Historical Stock Reports",
      "CSV Report Export",
      "Excel Product Import",
      "Admin and Staff Role Management",
      "Activity Logs",
    ],

    challenges: [
      "Maintaining accurate stock quantities across multiple inventory transactions.",
      "Preventing inconsistent stock data when multiple transactions are processed.",
      "Handling product imports and validating spreadsheet data.",
    ],

    solutions: [
      "Implemented stock calculations based on initial stock and recorded transactions.",
      "Used database transactions and row locking to protect stock consistency.",
      "Added validation for SKU duplication, product data, and inventory transactions.",
    ],

    screenshots: [
      {
        src: "/images/projects/stockwise/dashboard.png",
        title: "Dashboard",
      },
      {
        src: "/images/projects/stockwise/products.png",
        title: "Product Management",
      },
      {
        src: "/images/projects/stockwise/stock-transactions.png",
        title: "Stock Transactions",
      },
      {
        src: "/images/projects/stockwise/reports.png",
        title: "Inventory Reports",
      },
      {
        src: "/images/projects/stockwise/import-excel.png",
        title: "Excel Product Import",
      },
    ],

    github: "https://github.com/Hariss1011/StockWise",
    demo: "",
  },

  // ==========================================================
  // 02. OPSTRACK
  // ==========================================================
  {
    id: 2,
    slug: "opstrack",
    title: "OpsTrack",
    subtitle: "Operational Performance Monitoring System",
    category: "Operational Management",
    year: "2026",
    status: "Completed",

    thumbnail: "/images/projects/covers/opstrack.png",

    overview:
      "An operational monitoring system that helps organizations manage tasks, track work progress, monitor deadlines, verify task completion, and evaluate operational performance.",

    description:
      "OpsTrack is a web-based operational performance monitoring application developed using Laravel and MySQL. The system provides centralized task management, progress tracking, status history, task verification, and dashboard reporting. It uses role-based access control to organize responsibilities between Admin, Manager, and Staff.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
    ],

    features: [
      "Operational Dashboard",
      "Task and Deadline Management",
      "Task Assignment",
      "Progress Updates",
      "Task Status History",
      "Task Completion Verification",
      "Admin, Manager, and Staff Roles",
      "KPI Monitoring",
      "Operational Reports",
      "Activity Notifications",
    ],

    challenges: [
      "Designing a structured workflow from task assignment to completion verification.",
      "Maintaining a reliable history of task status changes.",
      "Presenting operational performance indicators in a centralized dashboard.",
    ],

    solutions: [
      "Implemented role-based task workflows for Admin, Manager, and Staff.",
      "Recorded task status changes to support progress tracking and accountability.",
      "Developed dashboard indicators and reports to support operational monitoring.",
    ],

    screenshots: [
      {
        src: "/images/projects/opstrack/dashboard.png",
        title: "Operational Dashboard",
      },
      {
        src: "/images/projects/opstrack/manajemen-tugas.png",
        title: "Task Management",
      },
      {
        src: "/images/projects/opstrack/detail-progres.png",
        title: "Task Progress Details",
      },
      {
        src: "/images/projects/opstrack/laporan.png",
        title: "Performance Reports",
      },
      {
        src: "/images/projects/opstrack/departemen.png",
        title: "Department Management",
      },
    ],

    github: "https://github.com/Hariss1011/opsTrack",
    demo: "",
  },

  // ==========================================================
  // 03. PEOPLECORE
  // ==========================================================
  {
    id: 3,
    slug: "peoplecore",
    title: "PeopleCore",
    subtitle: "Human Resource Information System",
    category: "Human Resource Management",
    year: "2026",
    status: "Completed",

    thumbnail: "/images/projects/covers/peoplecore.png",

    overview:
      "A human resource information system that integrates employee records, organizational data, attendance, leave management, and HR reporting in one platform.",

    description:
      "PeopleCore is an HRIS application developed using Laravel and MySQL to support structured employee administration. The system integrates employee records, departments, positions, employment history, attendance, leave requests, leave balances, and HR reports. Role-based access is implemented for Admin, HR, and Employee users.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "JavaScript",
      "Vite",
    ],

    features: [
      "Employee Data Management",
      "Department and Position Management",
      "Employment Status History",
      "Attendance Management",
      "Leave Request Submission",
      "Leave Approval Workflow",
      "Leave Balance Management",
      "HR Reports",
      "CSV Report Export",
      "Admin, HR, and Employee Roles",
      "Input Validation and Data Consistency",
    ],

    challenges: [
      "Designing relational data structures for employee and organizational information.",
      "Managing leave requests, approvals, and leave balances consistently.",
      "Applying access restrictions based on user roles.",
    ],

    solutions: [
      "Implemented relational database structures connecting employees, departments, and positions.",
      "Developed leave management workflows with approval and balance tracking.",
      "Applied validation and role-based authorization to maintain data consistency and access control.",
    ],

    screenshots: [
      {
        src: "/images/projects/peoplecore/dashboard.png",
        title: "HR Dashboard",
      },
      {
        src: "/images/projects/peoplecore/data-karyawan.png",
        title: "Employee Management",
      },
      {
        src: "/images/projects/peoplecore/detail-karyawan.png",
        title: "Employee Details",
      },
      {
        src: "/images/projects/peoplecore/kehadiran.png",
        title: "Attendance Management",
      },
      {
        src: "/images/projects/peoplecore/pengajuan-cuti.png",
        title: "Leave Request",
      },
      {
        src: "/images/projects/peoplecore/persetujuan-cuti.png",
        title: "Leave Approval",
      },
      {
        src: "/images/projects/peoplecore/kuota-cuti.png",
        title: "Leave Balance",
      },
    ],

    github: "https://github.com/Hariss1011/PeopleCore",
    demo: "",
  },

  // ==========================================================
  // 04. BENGTIX
  // ==========================================================
  {
    id: 4,
    slug: "bengtix",
    title: "BengTix",
    subtitle: "Event Ticket Management System",
    category: "Event Management",
    year: "2025",
    status: "In Development",

    thumbnail: "/images/projects/covers/bengtix.png",

    overview:
      "A web-based ticket management system designed to organize event information, ticket categories, locations, orders, and administrative activities.",

    description:
      "BengTix is an event ticket management application developed using Laravel, PHP, and MySQL. The system focuses on organizing event data and supporting administrative workflows through centralized management of events, ticket types, categories, locations, and ticket-related records.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
    ],

    features: [
      "Event Management",
      "Ticket Type Management",
      "Category Management",
      "Location Management",
      "User Event Pages",
      "Order Management",
      "Administrative Dashboard",
      "Activity and History Records",
    ],

    challenges: [
      "Organizing event and ticket information into a structured application.",
      "Maintaining consistent relationships between events, locations, categories, and ticket types.",
      "Improving the usability and visual consistency of administrative interfaces.",
    ],

    solutions: [
      "Organized event-related data through separate management modules.",
      "Used relational database structures to connect event information and ticket records.",
      "Improved the interface through reusable components and a consistent design system.",
    ],

    screenshots: [
      {
        src: "/images/projects/tiket/admin-dashboard.png",
        title: "Admin Dashboard",
      },
      {
        src: "/images/projects/tiket/daftar-event.png",
        title: "Event List",
      },
      {
        src: "/images/projects/tiket/detail-event.png",
        title: "Event Details",
      },
      {
        src: "/images/projects/tiket/homepage.png",
        title: "User Homepage",
      },
      {
        src: "/images/projects/tiket/manajemen-event.png",
        title: "Event Management",
      },
      {
        src: "/images/projects/tiket/manajemen-tiket.png",
        title: "Ticket Management",
      },
      {
        src: "/images/projects/tiket/pemesanan-tiket.png",
        title: "Ticket Booking",
      },
      {
        src: "/images/projects/tiket/riwayat-pesanan.png",
        title: "Order History",
      },
    ],

    github: "https://github.com/Hariss1011/Sistem-Manajemen-Tiket",
    demo: "",
  },

  // ==========================================================
  // 05. SISMENKES
  // ==========================================================
  {
    id: 5,
    slug: "sismenkes",
    title: "SISMENKES",
    subtitle: "Sistem Manajemen Kesehatan",
    category: "Healthcare Information System",
    year: "2025",
    status: "Completed",

    thumbnail: "/images/projects/covers/sismenkes.png",

    overview:
      "A healthcare management system that centralizes patient registration, doctor information, medical schedules, and medicine inventory.",

    description:
      "SISMENKES is a web-based healthcare information system developed using Laravel and MySQL. It supports healthcare administration through patient data management, doctor information, schedule management, and medicine inventory. The application provides an integrated interface for managing healthcare-related information.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "AdminLTE",
      "JavaScript",
    ],

    features: [
      "Patient Registration",
      "Patient Data Management",
      "Doctor Data Management",
      "Doctor Schedule Management",
      "Medicine Inventory Management",
      "Administrative Dashboard",
    ],

    challenges: [
      "Connecting patient, doctor, schedule, and medicine information in a relational database.",
      "Organizing different healthcare administration modules.",
      "Improving the interface to make the system easier to use.",
    ],

    solutions: [
      "Designed relational database structures for healthcare-related information.",
      "Organized application functionality into dedicated management modules.",
      "Improved the interface and registration experience to provide a more consistent user experience.",
    ],

    screenshots: [
      {
        src: "/images/projects/kesehatan/landing-page.png",
        title: "Landing Page",
      },
      {
        src: "/images/projects/kesehatan/dashboard-admin.png",
        title: "Admin Dashboard",
      },
      {
        src: "/images/projects/kesehatan/dashboard-dokter.png",
        title: "Doctor Dashboard",
      },
      {
        src: "/images/projects/kesehatan/dashboard-pasien.png",
        title: "Patient Dashboard",
      },
      {
        src: "/images/projects/kesehatan/data-pasien.png",
        title: "Patient Management",
      },
      {
        src: "/images/projects/kesehatan/data-dokter.png",
        title: "Doctor Management",
      },
      {
        src: "/images/projects/kesehatan/daftar-poli.png",
        title: "Clinic Registration",
      },
      {
        src: "/images/projects/kesehatan/pemeriksaan.png",
        title: "Medical Examination",
      },
    ],

    github: "https://github.com/Hariss1011/Sistem-Manajemen-Kesehatan",
    demo: "",
  },

  // ==========================================================
  // 06. SISTEM PENGAJUAN SURAT DESA
  // ==========================================================
  {
    id: 6,
    slug: "sistem-pengajuan-surat-desa",
    title: "Sistem Pengajuan Surat Desa",
    subtitle: "Village Administration Information System",
    category: "Public Service Information System",
    year: "2025",
    status: "Completed",

    thumbnail: "/images/projects/covers/desa.png",

    overview:
      "A web-based village administration system that enables residents to submit certificate requests online and helps village staff manage administrative services.",

    description:
      "This application was developed as an undergraduate final project using Laravel and MySQL. It digitizes the village certificate submission process and supports administrative activities through resident management, online submissions, document generation, and administrative monitoring.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "JavaScript",
    ],

    features: [
      "Multi-user Authentication",
      "Resident Management",
      "Online Certificate Submission",
      "PDF Document Generation",
      "Administrative Dashboard",
      "News Management",
    ],

    challenges: [
      "Designing an efficient database structure for village administration.",
      "Implementing role-based authentication and access control.",
      "Generating administrative PDF documents dynamically.",
    ],

    solutions: [
      "Designed relational MySQL tables for the application.",
      "Implemented authentication and middleware to manage user access.",
      "Integrated PDF generation to support administrative document processing.",
    ],

    screenshots: [
      {
        src: "/images/projects/desa/login.png",
        title: "Login Page",
      },
      {
        src: "/images/projects/desa/dashboard.png",
        title: "Village Dashboard",
      },
      {
        src: "/images/projects/desa/pengajuan.png",
        title: "Application List",
      },
      {
        src: "/images/projects/desa/pengajuanSurat.png",
        title: "Certificate Request",
      },
    ],

    github: "https://github.com/Hariss1011/Desa-MertapadaKulon",
    demo: "",
  },
];

export default projects;
