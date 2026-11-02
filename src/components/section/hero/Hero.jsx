import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

import profile from "../../../data/profile";
import Button from "../../common/Button";
import Badge from "../../common/Badge";
import Counter from "../../common/Counter";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

const Hero = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: profile.github,
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: profile.linkedin,
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: `mailto:${profile.email}`,
      label: "Email",
    },
  ];

  const stats = [
    { value: 6, suffix: "", label: "Projects" },
    { value: 15, suffix: "+", label: "Technologies" },
    { value: 1, suffix: "", label: "Internship" },
  ];

  const nameParts = profile.name.trim().split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section
      id="home"
      className="
        relative isolate flex min-h-screen
        items-center overflow-hidden
        bg-[#080e1a]
        px-5 pb-16 pt-28
        sm:px-8
        lg:px-12
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 top-20
          h-[420px] w-[420px]
          rounded-full bg-blue-600/[0.08]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 bottom-0
          h-[400px] w-[400px]
          rounded-full bg-cyan-500/[0.06]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]
          bg-[size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10 mx-auto grid w-full
          max-w-7xl items-center
          gap-14
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16
        "
      >
        {/* LEFT: INTRODUCTION */}
        <StaggerContainer className="order-2 lg:order-1" staggerChildren={0.12}>
          {/* AVAILABILITY */}
          <StaggerItem>
            <Badge>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Available for Opportunities
            </Badge>
          </StaggerItem>

          {/* NAME */}
          <StaggerItem>
            <div className="mt-7">
              <p className="mb-2 text-sm font-medium tracking-wide text-blue-400 sm:text-base">
                Hello, I'm
              </p>

              <h1
                className="
                  text-5xl font-black
                  leading-[1.08] tracking-tight
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                  xl:text-[5.5rem]
                "
              >
                <span className="block">{firstName}</span>

                {lastName && (
                  <span
                    className="
                      mt-1 block
                      bg-gradient-to-r
                      from-blue-400
                      via-cyan-300
                      to-blue-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {lastName}
                  </span>
                )}
              </h1>
            </div>
          </StaggerItem>

          {/* TITLE */}
          <StaggerItem>
            <p className="mt-6 text-lg font-semibold text-slate-200 sm:text-xl">
              {profile.title}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-3 py-1.5 text-xs font-medium text-blue-300 sm:text-sm">
                <FaCode className="text-[11px]" />
                Web Development
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/[0.08] px-3 py-1.5 text-xs font-medium text-cyan-300 sm:text-sm">
                <FaDatabase className="text-[11px]" />
                Data Management
              </span>
            </div>
          </StaggerItem>

          {/* DESCRIPTION */}
          <StaggerItem>
            <p
              className="
                mt-6 max-w-xl
                text-sm leading-7
                text-slate-400
                sm:text-base sm:leading-8
              "
            >
              {profile.description}
            </p>
          </StaggerItem>

          {/* ACTION BUTTONS */}
          <StaggerItem>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href={profile.cv}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Button>

              <Button href="#projects" variant="outline" className="group">
                Explore My Projects
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </StaggerItem>

          {/* SOCIAL LINKS */}
          <StaggerItem>
            <div className="mt-9 flex items-center gap-3">
              <span className="mr-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                Connect
              </span>

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                    className="
                      flex h-10 w-10 items-center
                      justify-center rounded-xl
                      border border-white/[0.08]
                      bg-white/[0.03]
                      text-slate-400
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-blue-400/30
                      hover:bg-blue-500/10
                      hover:text-blue-400
                    "
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </StaggerItem>

          {/* LOCATION */}
          <StaggerItem>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>{profile.location}</span>
            </div>
          </StaggerItem>

          {/* STATISTICS */}
          <StaggerItem>
            <div
              className="
                mt-10 grid max-w-lg
                grid-cols-3 gap-5
                border-t border-white/[0.08]
                pt-7
              "
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-baseline gap-0.5">
                    <Counter
                      value={stat.value}
                      className="
                        text-2xl font-bold
                        tracking-tight text-white
                        sm:text-3xl
                      "
                    />

                    <span className="text-xl font-bold text-blue-400">
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* RIGHT: PROFILE VISUAL */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative order-1 mx-auto
            w-full max-w-[340px]
            sm:max-w-[390px]
            lg:order-2 lg:max-w-[440px]
          "
        >
          {/* SUBTLE BACKGROUND GLOW */}
          <div
            aria-hidden="true"
            className="
              absolute left-1/2 top-[42%]
              h-[70%] w-[70%]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-blue-500/[0.14]
              blur-[100px]
            "
          />

          {/* DECORATIVE FRAME */}
          <div
            aria-hidden="true"
            className="
              absolute -right-3 -top-3
              h-full w-full
              rounded-[2rem]
              border border-blue-400/20
              sm:-right-5 sm:-top-5
            "
          />

          {/* IMAGE CONTAINER */}
          <div
            className="
              relative overflow-hidden
              rounded-[1.75rem]
              border border-white/[0.12]
              bg-[#0b1424]
              p-2
              shadow-[0_30px_90px_rgba(0,0,0,0.4)]
              sm:rounded-[2rem]
              sm:p-2.5
            "
          >
            <div
              className="
                relative aspect-[4/5]
                overflow-hidden
                rounded-[1.35rem]
                bg-[#0c1729]
                sm:rounded-[1.5rem]
              "
            >
              <img
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                fetchPriority="high"
                className="
                  h-full w-full
                  object-cover object-center
                  transition-transform duration-700
                  hover:scale-[1.025]
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-[#05070d]/20
                  via-transparent
                  to-blue-950/[0.08]
                "
              />
            </div>
          </div>

          {/* PROFILE INFORMATION CARD */}
          <div
            className="
              relative mt-5
              overflow-hidden
              rounded-2xl
              border border-white/[0.09]
              bg-[#0d1728]/90
              px-5 py-4
              shadow-[0_15px_40px_rgba(0,0,0,0.2)]
              sm:mt-6 sm:px-6 sm:py-5
            "
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-xs">
                  Personal Portfolio
                </p>

                <h2 className="mt-1.5 truncate text-lg font-bold tracking-tight text-white sm:text-xl">
                  {profile.name}
                </h2>
              </div>

              <div
                className="
                  flex shrink-0 items-center gap-2
                  rounded-full
                  border border-emerald-400/15
                  bg-emerald-400/[0.07]
                  px-2.5 py-1.5
                  sm:px-3
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[10px] font-medium text-emerald-300 sm:text-xs">
                  Open to Work
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-3">
              <p className="text-xs text-slate-400 sm:text-sm">
                Web Development & Data
              </p>

              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
                Portfolio
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
