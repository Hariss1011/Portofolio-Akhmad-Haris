import profile from "../../data/profile";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: profile.github,
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: FaLinkedin,
    },
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className="bg-[#20231F] text-[#F8F7F3]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-10 sm:px-8 sm:pt-12 lg:px-10">
        {/* Main Content */}
        <div className="grid gap-9 border-b border-white/15 pb-9 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.2fr_0.85fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="Back to home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#A45F45] text-sm font-extrabold text-white transition-colors duration-300 group-hover:bg-[#B87558]">
                AH
              </div>

              <div>
                <p className="text-sm font-bold tracking-tight text-white">
                  {profile.name}
                </p>
                <p className="mt-0.5 text-xs text-[#C1C1B8]">
                  Informatics Engineering Graduate
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#C1C1B8]">
              Interested in web development, data management, and information
              systems. Continuously learning and building practical solutions
              through technology.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#C1C1B8]">
              <FaMapMarkerAlt className="text-[#D49A7D]" />
              <span>{profile.location}</span>
            </div>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2.5">
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
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/[0.06] text-[#E5E3DA] transition-all duration-300 hover:border-[#D49A7D] hover:bg-[#A45F45] hover:text-white"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#D49A7D]">
              Explore
            </p>

            <h3 className="mt-2 text-base font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center text-[13px] text-[#C1C1B8] transition-colors duration-200 hover:text-[#E8B49A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#D49A7D]">
              Get in Touch
            </p>

            <h3 className="mt-2 text-base font-semibold text-white">
              Let's connect.
            </h3>

            <p className="mt-3 text-[13px] leading-6 text-[#C1C1B8]">
              Have an opportunity or want to discuss a project? Feel free to
              reach out.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-4 inline-flex max-w-full items-center gap-2 text-[13px] font-medium text-[#E8B49A] transition-colors duration-200 hover:text-white"
            >
              <FaEnvelope className="shrink-0 text-xs" />
              <span className="break-all">{profile.email}</span>
              <FaArrowRight className="shrink-0 text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <div>
              <a
                href={`mailto:${profile.email}`}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#A45F45] px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#B87558]"
              >
                Contact Me
                <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-[#D0CEC5]">
              © {currentYear}{" "}
              <span className="font-semibold text-white">{profile.name}</span>.
              All rights reserved.
            </p>

            <p className="mt-1 text-[11px] text-[#AFAFA5]">
              Built with React & Tailwind CSS.
            </p>
          </div>

          <a
            href="#home"
            aria-label="Back to top"
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#D0CEC5] transition-colors duration-200 hover:text-white"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/[0.06] text-[#E8B49A] transition-all duration-300 group-hover:border-[#D49A7D] group-hover:bg-[#A45F45] group-hover:text-white">
              <FaArrowUp className="text-[10px]" />
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-[2px] bg-[#A45F45]" />
    </footer>
  );
};

export default Footer;
