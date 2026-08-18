import about from "../../../data/about";

import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import { FaCode, FaChartLine, FaLightbulb, FaArrowRight } from "react-icons/fa";

const highlightIcons = [FaLightbulb, FaChartLine, FaCode];

const highlightStyles = [
  {
    icon: "bg-blue-500/10 border-blue-500/25 text-blue-300 group-hover:bg-blue-500/20",
    glow: "group-hover:text-blue-500/10",
  },
  {
    icon: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300 group-hover:bg-cyan-500/20",
    glow: "group-hover:text-cyan-500/10",
  },
  {
    icon: "bg-purple-500/10 border-purple-500/25 text-purple-300 group-hover:bg-purple-500/20",
    glow: "group-hover:text-purple-500/10",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        bg-[#070a14]

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb absolute -left-40 top-20 h-72 w-72 bg-blue-600/15" />
        <div className="glow-orb absolute -right-40 bottom-20 h-80 w-80 bg-cyan-500/10" />
      </div>

      {/* =========================================
          CONTAINER
      ========================================== */}

      <div
        className="
          relative
          mx-auto

          w-full
          max-w-7xl

          px-6
          sm:px-8
          lg:px-10
        "
      >
        <Reveal>
          <SectionTitle
            subtitle={about.subtitle}
            title={about.title}
            description={about.description}
          />
        </Reveal>

        {/* =======================================
            BENTO GRID
        ======================================== */}

        <div
          className="
            grid

            gap-5

            lg:grid-cols-3
            lg:grid-rows-[auto_auto]
          "
        >
          {/* =====================================
              STORY CARD — spans 2 cols, 2 rows
          ====================================== */}

          <Reveal x={-24} y={0} className="lg:col-span-2 lg:row-span-2">
            <Card
              className="
                relative
                h-full

                p-7
                sm:p-9
                lg:p-10
              "
            >
              {/* Accent */}

              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />

              <div className="relative">
                {/* Label */}

                <div className="mb-7 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11

                      items-center
                      justify-center

                      rounded-xl

                      bg-blue-500/10
                      border
                      border-blue-500/25

                      text-blue-300
                    "
                  >
                    <FaLightbulb />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                      My Journey
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
                      From systems to insights
                    </h3>
                  </div>
                </div>

                {/* Paragraphs */}

                <div className="space-y-5">
                  {about.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-8 text-slate-400"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Focus */}

                <div className="mt-9 border-t border-white/10 pt-7">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Current Focus
                  </p>

                  <div className="flex flex-wrap gap-2">
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

          {/* =====================================
              HIGHLIGHT TILES — bento column
          ====================================== */}

          <StaggerContainer className="flex flex-col gap-5">
            {about.highlights.map((item, index) => {
              const Icon = highlightIcons[index];
              const style = highlightStyles[index];

              return (
                <StaggerItem key={item.title} y={20}>
                  <Card
                    className="
                      group
                      relative

                      p-6
                    "
                  >
                    {/* Background number */}

                    <span
                      className={`
                        pointer-events-none

                        absolute
                        right-4
                        top-0

                        text-7xl
                        font-black

                        text-white/[0.04]

                        transition-colors
                        duration-300

                        ${style.glow}
                      `}
                    >
                      {item.value}
                    </span>

                    {/* Icon */}

                    <div
                      className={`
                        relative

                        flex
                        h-11
                        w-11

                        items-center
                        justify-center

                        rounded-xl

                        border

                        transition-all
                        duration-300

                        ${style.icon}
                      `}
                    >
                      <Icon />
                    </div>

                    {/* Content */}

                    <div className="relative mt-5">
                      <h3 className="text-lg font-bold tracking-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        relative
                        mt-5

                        flex
                        items-center
                        gap-2

                        text-xs
                        font-semibold

                        text-slate-600

                        transition-all
                        duration-300

                        group-hover:gap-3
                        group-hover:text-blue-300
                      "
                    >
                      <span>Core value</span>
                      <FaArrowRight />
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* =======================================
            BOTTOM STATEMENT
        ======================================== */}

        <Reveal className="mt-5">
          <Card
            hover={false}
            className="
              relative

              border-blue-500/20

              bg-gradient-to-r
              from-blue-500/10
              via-transparent
              to-cyan-400/10

              p-7

              sm:p-9
            "
          >
            <div
              className="
                relative

                flex
                flex-col

                gap-6

                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  What I Bring
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Technical skills with a willingness to keep learning.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                  I am looking for an opportunity where I can contribute from
                  day one while continuously developing my technical and
                  professional capabilities.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.1)]" />
                Open to opportunities
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
