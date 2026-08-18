// ========================================
// CERTIFICATES DATA
// ========================================

const certificates = [
  // ========================================
  // CERTIFICATE 1 — BNSP
  // ========================================

  {
    id: 1,

    title: "BNSP Competency Certification",

    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",

    category: "Professional Certification",

    type: "Competency Certification",

    date: "2026",

    description:
      "Professional competency certification demonstrating verified competence in the relevant information technology field.",

    skills: [
      "Information Technology",
      "Software Development",
      "Professional Competency",
    ],

    credential: {
      id: "62010 21315 5 010199 2026",
      verificationUrl: "",
    },

    image: "/images/certificates/bnsp.png",

    certificateUrl: "/certificates/Sertifikat BNSP.pdf",

    status: "Verified",
  },

  // ========================================
  // CERTIFICATE 2 — TOEFL
  // ========================================

  {
    id: 2,

    title: "TOEFL Certificate",

    issuer: "Center for Foreign Language Training",

    category: "Language",

    type: "English Proficiency",

    date: "2026",

    description:
      "English proficiency certification demonstrating competency in English language skills, including reading, listening, and grammar.",

    skills: ["English", "Reading", "Listening", "Grammar"],

    credential: {
      id: "",
      verificationUrl: "",
    },

    image: "/images/certificates/toefl.png",

    certificateUrl: "/certificates/Sertifikat TOEFL.pdf",

    status: "Verified",
  },

  // ========================================
  // CERTIFICATE 3 — CAREER WORKSHOP
  // ========================================

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
      "Career Guidance",
      "Professional Development",
    ],

    credential: {
      id: "0114/G.12/UDN-02/I/2026",
      verificationUrl: "",
    },

    image: "/images/certificates/workshop-karir.png",

    certificateUrl:
      "/certificates/Sertifikat_Workshop_Bimbingan_Karir_TI-S1.pdf",

    status: "Verified",
  },
];

export default certificates;
