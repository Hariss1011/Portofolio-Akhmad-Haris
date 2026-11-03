import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

import profile from "../../../data/profile";

const Hero = () => {
  const { t } = useTranslation();

  const nameParts = profile.name.trim().split(" ");
  const firstName = nameParts.shift();
  const lastName = nameParts.join(" ");

  const socialLinks = [
    {
      label: "GitHub",
      href: profile.github,
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: <FaLinkedin />,
    },
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: <FaEnvelope />,
    },
  ];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F8F7F3] px-5 pb-16 pt-28 text-[#242722] sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-12 lg:pb-20"
    >
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#D9E4D8]/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full bg-[#E9D8CB]/40 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:min-h-[calc(100svh-11rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <div className="mb-7 inline-flex items-center gap-3">
            <span className="h-px w-9 bg-[#B66E4E]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B624F] sm:text-sm">
              {t("hero.welcome")}
            </span>
          </div>

          <p className="mb-3 text-lg font-medium text-[#77796F] sm:text-xl">
            {t("hero.greeting")}
          </p>

          <h1 className="max-w-3xl text-[3.2rem] font-semibold leading-[1.05] tracking-[-0.055em] text-[#242722] sm:text-6xl lg:text-[4.7rem] xl:text-[5.2rem]">
            {firstName}
            <br />
            <span className="text-[#B66E4E]">{lastName}</span>
          </h1>

          {/* PROFESSIONAL TITLE */}
          <div className="mt-7">
            <p className="text-lg font-semibold tracking-tight text-[#34382F] sm:text-xl">
              {t("hero.title")}
            </p>
          </div>

          {/* SPECIALIZATION */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-[#B66E4E]/20
                bg-[#B66E4E]/[0.07]
                px-3 py-1.5
                text-xs font-semibold text-[#A35F43]
                sm:text-sm
              "
            >
              <FaCode className="text-[11px]" />
              {t("hero.specialties.web")}
            </span>

            <span
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-[#788B70]/25
                bg-[#788B70]/[0.09]
                px-3 py-1.5
                text-xs font-semibold text-[#667C5D]
                sm:text-sm
              "
            >
              <FaDatabase className="text-[11px]" />
              {t("hero.specialties.data")}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6 max-w-xl
              text-sm leading-7
              text-[#666A61]
              sm:text-base sm:leading-8
            "
          >
            {t("hero.description")}
          </p>

          {/* Main actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={profile.cv}
              download
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#B66E4E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#9F5D40] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B66E4E] focus-visible:ring-offset-2"
            >
              <FaDownload className="text-xs" />
              {t("hero.downloadCv")}
            </a>

            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#D8D6CE] bg-transparent px-6 py-3 text-sm font-semibold text-[#34382F] transition duration-300 hover:border-[#B66E4E] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B66E4E] focus-visible:ring-offset-2"
            >
              {t("hero.exploreProjects")}
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social links and location */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                  aria-label={item.label}
                  title={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E0D8] bg-white text-[#55594F] transition duration-300 hover:-translate-y-0.5 hover:border-[#B66E4E] hover:text-[#B66E4E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B66E4E]"
                >
                  <span className="text-base">{item.icon}</span>
                </a>
              ))}
            </div>

            <span className="hidden h-7 w-px bg-[#D8D6CE] sm:block" />

            <div className="flex items-center gap-2 text-sm text-[#77796F]">
              <FaMapMarkerAlt className="text-[#B66E4E]" />
              <span>{t("hero.location")}</span>
            </div>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="order-1 mx-auto w-full max-w-[330px] sm:max-w-[390px] lg:order-2 lg:max-w-[440px]"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-[1.5rem] border border-[#D8C8BB]"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#E9E5DC] shadow-[0_24px_60px_rgba(50,45,36,0.12)]">
              <img
                src={profile.image}
                alt={t("hero.profileImageAlt", { name: profile.name })}
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
            </div>

            {/* PROFILE INFORMATION CARD */}
            <div
              className="
                relative mt-5
                overflow-hidden
                rounded-2xl
                border border-[#4B5047]
                bg-[#34382F]
                px-5 py-4
                shadow-[0_15px_40px_rgba(50,45,36,0.13)]
                sm:mt-6 sm:px-6 sm:py-5
              "
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9A58D] sm:text-xs">
                    {t("hero.personalPortfolio")}
                  </p>

                  <h2 className="mt-1.5 truncate text-lg font-bold tracking-tight text-[#F8F7F3] sm:text-xl">
                    {profile.name}
                  </h2>
                </div>

                <div
                  className="
                    flex shrink-0 items-center gap-2
                    rounded-full
                    border border-[#A8B89C]/25
                    bg-[#A8B89C]/10
                    px-2.5 py-1.5
                    sm:px-3
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A8B89C]" />

                  <span className="text-[10px] font-medium text-[#C5D2BB] sm:text-xs">
                    {t("hero.availability")}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                <p className="text-xs text-[#D0D0C7] sm:text-sm">
                  {t("hero.cardFocus")}
                </p>

                <span className="text-[10px] font-medium uppercase tracking-wider text-[#A5A69C]">
                  {t("hero.cardLabel")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
