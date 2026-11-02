import about from "../../../data/about";

import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import { FaLightbulb, FaChartLine, FaCode, FaArrowRight } from "react-icons/fa";

const highlightIcons = [FaLightbulb, FaChartLine, FaCode];

const highlightAccents = [
  {
    icon: "border-blue-400/20 bg-blue-400/10 text-blue-300",
    line: "bg-blue-400",
  },
  {
    icon: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    line: "bg-cyan-400",
  },
  {
    icon: "border-violet-400/20 bg-violet-400/10 text-violet-300",
    line: "bg-violet-400",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[#070a14]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-48 top-24 h-80 w-80 rounded-full bg-blue-600/[0.09] blur-[120px]" />
        <div className="absolute -right-48 bottom-10 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative mx-auto w-full max-w-7xl
          px-5 sm:px-8 lg:px-10
        "
      >
        {/* SECTION TITLE */}
        <Reveal>
          <SectionTitle
            subtitle={about.subtitle}
            title={about.title}
            description={about.description}
          />
        </Reveal>

        {/* ABOUT LAYOUT */}
        <div
          className="
            mt-12 grid items-stretch gap-5
            lg:mt-16
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* MAIN STORY */}
          <Reveal x={-20} y={0}>
            <Card
              hover={false}
              className="
                relative h-full overflow-hidden
                border-white/[0.08]
                bg-[#0c1423]
                p-6 sm:p-8 lg:p-9
              "
            >
              {/* TOP ACCENT */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent" />

              <div className="relative">
                {/* CARD LABEL */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center
                      justify-center rounded-xl
                      border border-blue-400/20
                      bg-blue-400/10 text-blue-300
                    "
                  >
                    <FaLightbulb size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-xs">
                      Professional Profile
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                      A little about me
                    </h3>
                  </div>
                </div>

                {/* STORY */}
                <div className="mt-8 space-y-5">
                  {about.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="
                        text-sm leading-7 text-slate-400
                        sm:text-[15px] sm:leading-8
                      "
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* PROFESSIONAL FOCUS */}
                <div className="mt-9 border-t border-white/[0.08] pt-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Areas of Interest
                    </p>

                    <span className="text-[10px] font-medium text-slate-600">
                      Professional Focus
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {about.focus.map((item, index) => (
                      <Badge
                        key={item}
                        color={index % 2 === 0 ? "blue" : "cyan"}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* PROFESSIONAL HIGHLIGHTS */}
          <div className="flex flex-col gap-5">
            <Reveal y={16}>
              <div className="mb-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  What Defines Me
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  My Professional Strengths
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  The principles I bring when approaching projects,
                  collaborating, and learning new things.
                </p>
              </div>
            </Reveal>

            <StaggerContainer
              className="flex flex-1 flex-col gap-3"
              staggerChildren={0.1}
            >
              {about.highlights.map((item, index) => {
                const Icon = highlightIcons[index] || FaLightbulb;
                const accent =
                  highlightAccents[index % highlightAccents.length];

                return (
                  <StaggerItem key={item.title} y={16}>
                    <Card
                      hover={false}
                      className="
                        group relative overflow-hidden
                        border-white/[0.08]
                        bg-[#0c1423]
                        p-5 sm:p-6
                        transition-all duration-300
                        hover:border-white/[0.14]
                        hover:bg-[#101b2d]
                      "
                    >
                      <div className="flex items-start gap-4">
                        {/* ICON */}
                        <div
                          className={`
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-xl border
                            ${accent.icon}
                          `}
                        >
                          <Icon size={17} />
                        </div>

                        {/* TEXT */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="text-base font-bold text-white">
                              {item.title}
                            </h4>

                            <span className="text-[10px] font-semibold tracking-widest text-slate-600">
                              0{index + 1}
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* BOTTOM ACCENT */}
                      <div
                        className={`
                          absolute bottom-0 left-0 h-px w-0
                          transition-all duration-500
                          group-hover:w-full
                          ${accent.line}
                        `}
                      />
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <Reveal y={16} className="mt-5">
          <div
            className="
              flex flex-col gap-4
              rounded-2xl
              border border-blue-400/15
              bg-gradient-to-r
              from-blue-500/[0.09]
              via-[#0c1423]
              to-cyan-500/[0.06]
              p-6 sm:flex-row sm:items-center
              sm:justify-between sm:p-7
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex h-10 w-10 shrink-0 items-center
                  justify-center rounded-xl
                  border border-blue-400/20
                  bg-blue-400/10 text-blue-300
                "
              >
                <FaArrowRight size={15} />
              </div>

              <div>
                <p className="text-sm font-bold text-white sm:text-base">
                  Ready to turn knowledge into meaningful contributions.
                </p>

                <p className="mt-1 text-xs leading-6 text-slate-400 sm:text-sm">
                  Interested in contributing to real projects while continuing
                  to grow as a technology professional.
                </p>
              </div>
            </div>

            <span
              className="
                flex shrink-0 items-center gap-2
                text-xs font-semibold text-emerald-300
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to Opportunities
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
