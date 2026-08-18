import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaArrowDown,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const currentPosition = scrollY + 180;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* =====================================================
     MOBILE BODY LOCK
  ===================================================== */

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

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

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

  /* =====================================================
     NAVIGATION
  ===================================================== */

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

    setIsMobileOpen(false);
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50

          transition-all
          duration-300

          ${
            isScrolled
              ? `
                border-b
                border-white/10
                bg-[#05070d]/85
                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]
                backdrop-blur-xl
              `
              : `
                border-b
                border-transparent
                bg-transparent
              `
          }
        `}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex
              items-center
              justify-between

              transition-all
              duration-300

              ${isScrolled ? "h-16" : "h-[72px]"}
            `}
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <button
              type="button"
              onClick={() => handleNavigation("home")}
              className="
                group
                flex
                items-center
                gap-3
                shrink-0
              "
              aria-label="Go to homepage"
            >
              {/* Logo Mark */}

              <div
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  overflow-hidden
                  rounded-xl

                  bg-gradient-to-br
                  from-blue-500
                  to-cyan-400

                  text-slate-950

                  shadow-[0_0_20px_rgba(59,130,246,0.4)]

                  transition-all
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]
                "
              >
                <span
                  className="
                    relative
                    z-10
                    text-sm
                    font-black
                    tracking-tight
                  "
                >
                  AH
                </span>
              </div>

              {/* Logo Text */}

              <div className="hidden sm:block text-left">
                <p
                  className="
                    text-sm
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  Akhmad Haris
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  Informatics Engineer
                </p>
              </div>
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              aria-label="Main navigation"
              className="
                glass
                hidden
                lg:flex
                items-center
                gap-1

                rounded-xl

                p-1.5
              "
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    className={`
                      relative

                      rounded-lg

                      px-3
                      py-2

                      text-xs
                      font-semibold

                      transition-all
                      duration-200

                      ${
                        isActive
                          ? `
                            bg-gradient-to-r
                            from-blue-500/20
                            to-cyan-400/20

                            text-white
                          `
                          : `
                            text-slate-400
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {isActive && (
                      <span
                        className="
                          absolute
                          inset-x-2
                          -bottom-0.5

                          h-[2px]

                          rounded-full

                          bg-gradient-to-r
                          from-blue-400
                          to-cyan-400

                          shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]
                        "
                      />
                    )}
                    {item.name}
                  </button>
                );
              })}
            </nav>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="flex items-center gap-3">
              <a
                href="/cv/Akhmad_Haris_cv.pdf"
                download
                className="
                  group

                  hidden
                  sm:inline-flex

                  items-center
                  gap-2

                  px-5
                  py-2.5

                  rounded-xl

                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400

                  text-slate-950

                  text-sm
                  font-bold

                  shadow-[0_0_20px_rgba(59,130,246,0.35)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                "
              >
                Download CV
                <FaArrowDown
                  className="
                    text-xs

                    transition-transform
                    duration-300

                    group-hover:translate-y-1
                  "
                />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open navigation menu"
                className="
                  glass
                  glass-hover

                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  text-slate-200

                  lg:hidden
                "
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="
              fixed
              inset-0
              z-50

              bg-black/70
              backdrop-blur-sm

              lg:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* =================================================
          MOBILE DRAWER
      ================================================= */}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="
              fixed
              right-0
              top-0
              bottom-0
              z-50

              flex
              w-full
              max-w-sm

              flex-col

              border-l
              border-white/10

              bg-[#070a14]

              shadow-2xl

              lg:hidden
            "
            aria-label="Mobile navigation"
          >
            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-between

                border-b
                border-white/10

                px-5
                py-5
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-xl

                    bg-gradient-to-br
                    from-blue-500
                    to-cyan-400

                    text-sm
                    font-black
                    text-slate-950
                  "
                >
                  AH
                </div>

                <div>
                  <p className="text-sm font-bold text-white">Akhmad Haris</p>

                  <p className="mt-0.5 text-[11px] text-slate-500">Portfolio</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close navigation menu"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-lg

                  bg-white/5

                  text-slate-300

                  transition-colors

                  hover:bg-white/10
                  hover:text-white
                "
              >
                <FaTimes />
              </button>
            </div>

            {/* =================================================
                MOBILE LINKS
            ================================================= */}

            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <div className="space-y-1.5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigation(item.id)}
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between

                        rounded-xl

                        px-4
                        py-3.5

                        text-left

                        transition-all
                        duration-200

                        ${
                          isActive
                            ? `
                              bg-gradient-to-r
                              from-blue-500/15
                              to-cyan-400/10

                              text-white
                            `
                            : `
                              text-slate-400
                              hover:bg-white/5
                              hover:text-white
                            `
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`
                            w-5
                            text-[10px]
                            font-bold

                            ${isActive ? "text-cyan-400" : "text-slate-600"}
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-semibold">
                          {item.name}
                        </span>
                      </div>

                      {isActive && (
                        <span
                          className="
                            h-2
                            w-2

                            rounded-full

                            bg-cyan-400

                            shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]
                          "
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* =================================================
                  MOBILE SOCIAL
              ================================================= */}

              <div className="mt-8 border-t border-white/10 pt-6">
                <p
                  className="
                    mb-3

                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]

                    text-slate-500
                  "
                >
                  Connect
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com/Hariss1011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      glass
                      glass-hover

                      flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      px-4
                      py-3

                      text-sm
                      font-semibold
                      text-slate-200
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2

                      rounded-xl

                      bg-blue-500/10
                      border
                      border-blue-500/25

                      px-4
                      py-3

                      text-sm
                      font-semibold
                      text-blue-300

                      transition-all

                      hover:bg-blue-500/20
                    "
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                </div>
              </div>
            </nav>

            {/* =================================================
                MOBILE CV
            ================================================= */}

            <div
              className="
                border-t
                border-white/10

                bg-white/[0.02]

                p-5
              "
            >
              <a
                href="/cv/Akhmad_Haris_cv.pdf"
                download
                className="
                group

                inline-flex
                items-center
                gap-2

                px-5
                py-2.5

                rounded-xl

                bg-gradient-to-r
                from-blue-500
                to-cyan-400

                text-slate-950

                text-sm
                font-bold

                shadow-[0_0_20px_rgba(59,130,246,0.35)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
              "
              >
                Download CV
                <FaArrowDown
                  className="
                  text-xs

                  transition-transform
                  duration-300

                  group-hover:translate-y-1
                "
                />
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
