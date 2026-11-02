const certificates = [
  {
    id: 1,

    title: "Web Developer Competency Certification",

    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",

    category: "Professional Certification",

    type: "Competency Certification",

    date: "2026",

    description:
      "Professional competency certification in Web Development, demonstrating competency in developing web-based applications and implementing software development practices.",

    skills: ["Web Development", "Software Development", "Web Application"],

    credential: {
      id: "62010 21315 5 010199 2026",
      verificationUrl: "",
    },

    image: "/images/certificates/bnsp.png",

    certificateUrl: "/certificates/Sertifikat BNSP.pdf",

    status: "Issued",
  },

  {
    id: 2,

    title: "TOEFL Certificate",

    issuer: "Center for Foreign Language Training (CFL-T), UDINUS",

    category: "Language",

    type: "English Proficiency",

    date: "2026",

    description:
      "English language proficiency certificate with a TOEFL score of 470, reflecting competency in reading, listening, and English structure.",

    skills: ["English", "Reading", "Listening", "Grammar"],

    credential: {
      id: "",
      verificationUrl: "",
    },

    image: "/images/certificates/toefl.png",

    certificateUrl: "/certificates/Sertifikat TOEFL.pdf",

    status: "Issued",
  },

  {
    id: 3,

    title: "TI-S1 Career Guidance Workshop",

    issuer: "Faculty of Computer Science, Universitas Dian Nuswantoro",

    category: "Career Development",

    type: "Workshop Certificate",

    date: "2026",

    description:
      "Certificate of participation in the TI-S1 Career Guidance Workshop organized by the Faculty of Computer Science, Universitas Dian Nuswantoro, held from December 20, 2025 to January 26, 2026.",

    skills: [
      "Career Development",
      "Information Technology",
      "Professional Development",
    ],

    credential: {
      id: "0114/G.12/UDN-02/I/2026",
      verificationUrl: "",
    },

    image: "/images/certificates/workshop-karir.png",

    certificateUrl:
      "/certificates/Sertifikat_Workshop_Bimbingan_Karir_TI-S1.pdf",

    status: "Issued",
  },
];

export default certificates;
