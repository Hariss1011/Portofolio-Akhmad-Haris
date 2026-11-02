import profile from "../../../data/profile";

import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import Button from "../../common/Button";
import Reveal from "../../common/Reveal";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaArrowRight,
  FaCheckCircle,
  FaBriefcase,
} from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
      action: true,
    },
    {
      label: "Phone",
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
      description: "Explore my repositories",
      href: profile.github,
      icon: FaGithub,
      iconStyle: "bg-white/[0.08] text-white",
      hoverStyle: "hover:border-white/20 hover:bg-white/[0.04]",
    },
    {
      name: "LinkedIn",
      description: "Connect professionally",
      href: profile.linkedin,
      icon: FaLinkedin,
      iconStyle: "bg-blue-500/15 text-blue-300",
      hoverStyle: "hover:border-blue-400/25 hover:bg-blue-500/[0.06]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0f1e] py-24 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/[0.09] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <Reveal>
          <SectionTitle
            subtitle="Contact"
            title="Let's connect and create something meaningful."
            description="Have an opportunity, a project idea, or simply want to connect? I'd be glad to hear from you and explore how we can work together."
          />
        </Reveal>

        {/* Main contact layout */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-7">
          {/* LEFT: Contact information */}
          <Reveal x={-20} y={0}>
            <Card className="relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121d30] via-[#101827] to-[#0d1422] p-6 sm:p-8 lg:p-9">
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500/80 via-cyan-400/70 to-transparent" />

              {/* Heading */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.08] text-blue-300">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                    Contact Information
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Get in touch directly
                  </p>
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                I'd love to hear from you.
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                Whether you're a recruiter, potential employer, or collaborator,
                feel free to reach out through any of the following channels.
              </p>

              {/* Contact items */}
              <div className="mt-8 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.045] text-blue-300 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-400/[0.10]">
                        <Icon />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          {item.label}
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-slate-200 sm:text-base">
                          {item.value}
                        </p>
                      </div>

                      {item.action && (
                        <FaArrowRight className="ml-auto shrink-0 text-xs text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300" />
                      )}
                    </>
                  );

                  return item.action ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-blue-400/[0.045]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.055] p-4">
                <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Open to opportunities
                  </p>
                  <p className="mt-1 text-xs leading-5 text-emerald-300/70">
                    Available for full-time roles, internships, and professional
                    collaborations.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* RIGHT: Professional CTA and social profiles */}
          <Reveal x={20} y={0} delay={0.1} className="flex flex-col gap-6">
            {/* Professional CTA */}
            <Card className="relative flex-1 overflow-hidden rounded-3xl border border-blue-400/15 bg-gradient-to-br from-[#142541] via-[#101b30] to-[#0c1424] p-6 text-white sm:p-8 lg:p-9">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.16] blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/[0.09] blur-[90px]" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/15 bg-blue-400/[0.10] text-blue-300">
                  <FaBriefcase />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Professional Opportunity
                </p>

                <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                  Ready to contribute, learn, and grow.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  As an Informatics Engineering graduate, I have a foundation in
                  web development, database management, information systems, and
                  data processing. I'm eager to apply these skills, contribute
                  to a team, and develop through real-world challenges.
                </p>

                {/* Main actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={`mailto:${profile.email}`}>
                    <FaEnvelope />
                    Contact Me
                  </Button>

                  <Button href={profile.cv} variant="secondary">
                    <FaFileDownload />
                    Download CV
                  </Button>
                </div>
              </div>
            </Card>

            {/* Social profiles */}
            <Card className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121d30] to-[#0d1422] p-6 sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                  Find Me Online
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  Professional Profiles
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
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
                      className={`group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 ${social.hoverStyle}`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${social.iconStyle}`}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-200">
                          {social.name}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-500">
                          {social.description}
                        </p>
                      </div>

                      <FaArrowRight className="shrink-0 text-xs text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-300" />
                    </a>
                  );
                })}
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Closing statement */}
        <Reveal>
          <div className="mx-auto mt-14 max-w-6xl border-t border-white/[0.08] pt-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Thank you for visiting
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Looking forward to meaningful conversations and opportunities.
                </p>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-cyan-300"
              >
                Let's talk
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
