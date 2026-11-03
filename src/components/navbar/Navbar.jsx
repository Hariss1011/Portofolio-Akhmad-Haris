import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  FaBars,
  FaTimes,
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../../data/profile";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const changeLanguage = (language) => {
    if (currentLanguage !== language) {
      i18n.changeLanguage(language);
    }
  };

  const navItems = [
    { name: t("nav.home"), id: "home" },
    { name: t("nav.about"), id: "about" },
    { name: t("nav.education"), id: "education" },
    { name: t("nav.skills"), id: "skills" },
    { name: t("nav.experience"), id: "experience" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.certificates"), id: "certificates" },
    { name: t("nav.contact"), id: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: profile.github,
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: profile.linkedin,
      icon: FaLinkedin,
    },
    {
      name: "Email",
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
    },
  ];

  // Scroll & Active Section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const currentPosition = scrollY + 150;
      let currentSection = "home";

      sections.forEach((section) => {
        if (currentPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock Body Scroll When Mobile Menu Is Open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close Menu With Escape Key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Navigation Handler
  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarOffset = 80;

      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }

    setActiveSection(id);
    setIsMobileOpen(false);
  };

  // Language Switcher
  const LanguageSwitcher = () => (
    <div
      className="flex items-center gap-1 rounded-lg border border-[#E7E3DA] bg-white p-1"
      aria-label={t("common.language")}
    >
      {["en", "id"].map((language) => {
        const isActive = currentLanguage === language;

        return (
          <button
            key={language}
            type="button"
            onClick={() => changeLanguage(language)}
            aria-pressed={isActive}
            aria-label={
              language === "en"
                ? "Switch language to English"
                : "Ganti bahasa ke Indonesia"
            }
            className={`
              rounded-md px-2.5 py-1.5
              text-[10px] font-bold uppercase tracking-wider
              transition-all duration-200
              ${
                isActive
                  ? "bg-[#A45F45] text-white"
                  : "text-[#62665D] hover:bg-[#F3E9E2] hover:text-[#A45F45]"
              }
            `}
          >
            {language}
          </button>
        );
      })}
    </div>
  );

  // Render
  return (
    <>
      {/* Main Navbar */}
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          border-b
          transition-all duration-300
          ${
            isScrolled
              ? "border-[#E7E3DA] bg-[#F8F7F3]/95 shadow-[0_4px_20px_rgba(36,39,34,0.06)] backdrop-blur-xl"
              : "border-transparent bg-[#F8F7F3]"
          }
        `}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div
            className={`
              flex items-center justify-between
              transition-all duration-300
              ${isScrolled ? "h-16" : "h-19"}
            `}
          >
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavigation("home")}
              aria-label={t("nav.home")}
              className="group flex shrink-0 items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#292D27] text-sm font-extrabold tracking-tight text-[#F8F7F3] transition-all duration-300 group-hover:bg-[#A45F45]">
                AH
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-bold tracking-tight text-[#242722]">
                  {profile.name}
                </p>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#85877E]">
                  {t("hero.role")}
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav
              aria-label={t("nav.navigation")}
              className="hidden items-center gap-0.5 xl:flex"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`
                      relative rounded-lg px-2.5 py-2
                      text-[11px] font-semibold
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-[#A45F45]"
                          : "text-[#62665D] hover:text-[#242722]"
                      }
                    `}
                  >
                    {item.name}

                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-[#A45F45]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <LanguageSwitcher />

              <a
                href="/cv/Akhmad_Haris_cv.pdf"
                download
                className="group hidden min-h-10 items-center gap-2 rounded-lg bg-[#A45F45] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8F503A] hover:shadow-md hover:shadow-[#A45F45]/15 sm:inline-flex"
              >
                {t("common.downloadCV")}
                <FaArrowDown className="text-[10px] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                aria-label={t("common.openMenu")}
                aria-expanded={isMobileOpen}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E0D7] bg-white text-[#34382F] transition-all duration-300 hover:border-[#A45F45]/40 hover:text-[#A45F45] xl:hidden"
              >
                <FaBars className="text-base" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-60 bg-[#242722]/45 backdrop-blur-sm xl:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            aria-label={t("nav.navigation")}
            className="fixed bottom-0 right-0 top-0 z-70 flex w-full max-w-90 flex-col border-l border-[#E7E3DA] bg-[#F8F7F3] shadow-2xl xl:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#E7E3DA] px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#292D27] text-sm font-extrabold text-white">
                  AH
                </div>

                <div>
                  <p className="text-sm font-bold text-[#242722]">
                    {profile.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#85877E]">
                    {t("common.personalPortfolio")}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                aria-label={t("common.closeMenu")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E0D7] bg-white text-[#62665D] transition-colors hover:text-[#A45F45]"
              >
                <FaTimes />
              </button>
            </div>

            {/* Drawer Navigation */}
            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A45F45]">
                {t("nav.navigation")}
              </p>

              <div className="space-y-1.5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigation(item.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`
                        flex w-full items-center justify-between
                        rounded-xl px-4 py-3
                        text-left transition-all duration-200
                        ${
                          isActive
                            ? "border border-[#E9D8CE] bg-[#F3E9E2] text-[#A45F45]"
                            : "border border-transparent text-[#62665D] hover:bg-white hover:text-[#242722]"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`
                            w-6 text-[10px] font-bold
                            ${isActive ? "text-[#A45F45]" : "text-[#A4A398]"}
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-semibold">
                          {item.name}
                        </span>
                      </div>

                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[#A45F45]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Language Switcher */}
              <div className="mt-7 border-t border-[#E7E3DA] pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A45F45]">
                  {t("common.language")}
                </p>

                <LanguageSwitcher />
              </div>

              {/* Social Links */}
              <div className="mt-7 border-t border-[#E7E3DA] pt-6">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A45F45]">
                  {t("nav.connect")}
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.name === "Email" ? undefined : "_blank"}
                        rel={
                          social.name === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#E7E3DA] bg-white px-2 py-3 text-[#62665D] transition-all duration-200 hover:border-[#D8B7A6] hover:bg-[#F3E9E2] hover:text-[#A45F45]"
                      >
                        <Icon className="text-base" />
                        <span className="text-[11px] font-semibold">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* Drawer Footer */}
            <div className="border-t border-[#E7E3DA] bg-white/70 p-5">
              <a
                href="/cv/Akhmad_Haris_cv.pdf"
                download
                className="group flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#A45F45] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8F503A]"
              >
                {t("common.downloadCV")}
                <FaArrowDown className="text-xs transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
