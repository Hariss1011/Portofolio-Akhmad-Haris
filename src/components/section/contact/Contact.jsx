import { motion } from "framer-motion";
import profile from "../../../data/profile";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaExternalLinkAlt,
  FaBriefcase,
} from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      label: "Email Address",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
      action: true,
    },
    {
      label: "Phone Number",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: FaPhone,
      action: true,
    },
    {
      label: "Location",
      value: profile.location,
      icon: FaMapMarkerAlt,
      action: false,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      description: "Explore my projects and repositories",
      href: profile.github,
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      description: "Connect with me professionally",
      href: profile.linkedin,
      icon: FaLinkedin,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8F7F3] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl sm:mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A45F45]">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#242722] sm:text-4xl lg:text-5xl">
            Let's start a<span className="text-[#A45F45]"> conversation.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#62665D] sm:text-base">
            Have a job opportunity, a project idea, or simply want to connect?
            I'm open to meaningful conversations and opportunities to
            contribute, collaborate, and grow professionally.
          </p>
        </motion.div>

        {/* Main Contact Layout */}
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          {/* LEFT: Main Contact Panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] bg-[#292D27] p-6 text-white sm:p-9 lg:p-10"
          >
            {/* Decorative Accent */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/6" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/6" />

            <div className="relative">
              {/* Panel Label */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/9 text-[#D5A28A]">
                  <FaEnvelope className="text-base" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D5A28A]">
                    Get in Touch
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Contact information
                  </p>
                </div>
              </div>

              {/* Panel Heading */}
              <h3 className="mt-9 max-w-md text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                I'd be happy to hear from you.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                Whether you're a recruiter, potential employer, or collaborator,
                feel free to reach out through the contact details below.
              </p>

              {/* Contact Information */}
              <div className="mt-9 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/8 text-[#D5A28A] transition-colors duration-300 group-hover:bg-[#A45F45] group-hover:text-white">
                        <Icon className="text-base" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/45">
                          {item.label}
                        </p>

                        <p className="mt-1 wrap-break-word text-sm font-semibold text-white/90 sm:text-base">
                          {item.value}
                        </p>
                      </div>

                      {item.action && (
                        <FaExternalLinkAlt className="shrink-0 text-xs text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D5A28A]" />
                      )}
                    </>
                  );

                  return item.action ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#D5A28A]/40 hover:bg-white/[0.07]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.035] p-4"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-8 flex items-start gap-3 border-t border-white/12 pt-6">
                <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#91A687] opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#91A687]" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-[#B5C6A9]">
                    Open to opportunities
                  </p>
                  <p className="mt-1 text-xs leading-6 text-white/50">
                    Open to suitable professional roles and collaborations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Professional Opportunity & Social Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col gap-5 lg:gap-6"
          >
            {/* Professional Opportunity */}
            <div className="flex-1 rounded-[28px] border border-[#E8E4DB] bg-white p-6 sm:p-8 lg:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3E9E2] text-[#A45F45]">
                <FaBriefcase className="text-lg" />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.17em] text-[#A45F45]">
                Professional Opportunity
              </p>

              <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight tracking-tight text-[#242722] sm:text-3xl">
                Ready to contribute and make an impact.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#62665D]">
                With a background in Informatics Engineering, I have experience
                and a foundation in web development, database management,
                information systems, and data processing. I'm eager to apply my
                skills, learn from new challenges, and contribute to a team.
              </p>

              {/* Main Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#A45F45] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8F503A] hover:shadow-lg hover:shadow-[#A45F45]/15"
                >
                  <FaEnvelope />
                  Contact Me
                </a>

                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#DCD8CF] bg-[#F8F7F3] px-5 py-3 text-sm font-semibold text-[#34382F] transition-all duration-300 hover:border-[#A45F45]/40 hover:bg-[#F3E9E2]"
                >
                  <FaFileDownload />
                  Download CV
                </a>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="rounded-[28px] border border-[#E8E4DB] bg-white p-6 sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#A45F45]">
                  Find Me Online
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#242722]">
                  Professional Profiles
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777A71]">
                  Explore my work and connect with me through these platforms.
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-[#EAE7DF] bg-[#FAF9F6] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B66E4E]/40 hover:bg-[#F7F0EA]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEECE5] text-[#34382F] transition-colors duration-300 group-hover:bg-[#A45F45] group-hover:text-white">
                        <Icon className="text-lg" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#34382F]">
                          {social.name}
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-[#777A71]">
                          {social.description}
                        </p>
                      </div>

                      <FaExternalLinkAlt className="shrink-0 text-xs text-[#A4A398] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#A45F45]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-2 border-t border-[#E5E1D8] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-[#85877E]">
            Thank you for taking the time to explore my portfolio.
          </p>

          <p className="text-xs font-medium text-[#62665D]">
            Open to meaningful professional connections.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
