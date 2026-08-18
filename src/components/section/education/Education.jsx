import education from "../../../data/education";

import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import {
  FaGraduationCap,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

const Education = () => {
  const educationItem = education[0];

  return (
    <section
      id="education"
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

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            -left-40
            top-32

            h-80
            w-80

            rounded-full

            bg-blue-500/50

            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20

            h-80
            w-80

            rounded-full

            bg-cyan-500/40

            blur-3xl
          "
        />
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
        {/* =======================================
            SECTION TITLE
        ======================================== */}

        <Reveal>
          <SectionTitle
            subtitle="Education"
            title="The foundation behind my technical journey."
            description="My academic background in Informatics Engineering gave me a strong foundation in software development, information systems, databases, and problem solving."
          />
        </Reveal>

        {/* =======================================
            EDUCATION CARD
        ======================================== */}

        <Reveal className="mx-auto mt-14 max-w-5xl">
          <Card
            className="
              group
              relative
              overflow-hidden

              p-0

              bg-white/[0.06]

              transition-all
              duration-500

              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            {/* Top Gradient */}

            <div
              className="
                h-1.5
                w-full

                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-blue-400
              "
            />

            <div
              className="
                grid

                lg:grid-cols-[280px_1fr]
              "
            >
              {/* =================================
                  LEFT
              ================================== */}

              <div
                className="
                  relative

                  flex
                  flex-col
                  items-center
                  justify-center

                  border-b
                  border-white/10

                  bg-white/5

                  p-8

                  text-center

                  lg:border-b-0
                  lg:border-r
                "
              >
                {/* Decorative Circle */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16

                    h-40
                    w-40

                    rounded-full

                    bg-blue-500/60

                    blur-2xl
                  "
                />

                {/* University Icon */}

                <div
                  className="
                    relative

                    flex
                    h-20
                    w-20

                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500

                    text-white

                    shadow-lg
                    shadow-blue-500/20

                    transition-transform
                    duration-500

                    group-hover:scale-105
                  "
                >
                  <FaGraduationCap className="text-4xl" />
                </div>

                {/* University */}

                <p
                  className="
                    relative

                    mt-6

                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]

                    text-blue-300
                  "
                >
                  University
                </p>

                <h3
                  className="
                    relative

                    mt-2

                    text-xl
                    font-extrabold
                    tracking-tight

                    text-white
                  "
                >
                  {educationItem.shortName}
                </h3>

                <p
                  className="
                    relative

                    mt-1

                    text-sm

                    text-slate-400
                  "
                >
                  {educationItem.institution}
                </p>

                {/* Status */}

                <div className="relative mt-6">
                  <Badge>
                    <span className="flex items-center gap-2">
                      <FaCheckCircle className="text-emerald-500" />
                      {educationItem.status}
                    </span>
                  </Badge>
                </div>
              </div>

              {/* =================================
                  RIGHT
              ================================== */}

              <div className="p-7 sm:p-9 lg:p-10">
                {/* Header */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5

                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold

                        text-blue-300
                      "
                    >
                      {educationItem.type}
                    </p>

                    <h2
                      className="
    mt-2

    text-2xl
    font-black
    tracking-tight

    text-white

    sm:text-3xl
  "
                    >
                      {educationItem.degree}
                    </h2>

                    <p
                      className="
    mt-2

    text-base
    font-semibold

    text-slate-300
  "
                    >
                      {educationItem.field}
                    </p>

                    {/* Academic Meta */}

                    <div
                      className="
    mt-5

    flex
    flex-wrap
    gap-3
  "
                    >
                      <div
                        className="
      rounded-xl

      border
      border-white/10

      bg-white/5

      px-4
      py-2.5
    "
                      >
                        <p
                          className="
        text-[10px]
        font-bold
        uppercase
        tracking-wider

        text-slate-500
      "
                        >
                          Period
                        </p>

                        <p
                          className="
        mt-0.5

        text-sm
        font-bold

        text-slate-200
      "
                        >
                          {educationItem.period}
                        </p>
                      </div>

                      <div
                        className="
      rounded-xl

      border
      border-blue-500/25

      bg-blue-500/10

      px-4
      py-2.5
    "
                      >
                        <p
                          className="
        text-[10px]
        font-bold
        uppercase
        tracking-wider

        text-blue-500
      "
                        >
                          GPA
                        </p>

                        <p
                          className="
        mt-0.5

        text-sm
        font-bold

        text-blue-300
      "
                        >
                          {educationItem.gpa}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Graduation Icon */}

                  <div
                    className="
                      hidden

                      h-12
                      w-12

                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      bg-blue-500/10

                      text-blue-300

                      sm:flex
                    "
                  >
                    <FaGraduationCap />
                  </div>
                </div>

                {/* Divider */}

                <div
                  className="
                    my-7

                    h-px

                    bg-white/10
                  "
                />

                {/* Description */}

                <p
                  className="
                    max-w-3xl

                    text-base
                    leading-8

                    text-slate-300
                  "
                >
                  {educationItem.description}
                </p>

                {/* =================================
                    HIGHLIGHTS
                ================================== */}

                <div className="mt-8">
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]

                      text-slate-500
                    "
                  >
                    Academic Foundation
                  </p>

                  <StaggerContainer
                    className="
                      mt-4

                      grid

                      gap-3

                      sm:grid-cols-2
                    "
                    stagger={0.08}
                  >
                    {educationItem.highlights.map((highlight, index) => {
                      const icons = [
                        FaCode,
                        FaDatabase,
                        FaLayerGroup,
                        FaGraduationCap,
                      ];

                      const Icon = icons[index];

                      return (
                        <StaggerItem
                          key={highlight}
                          y={14}
                          className="
                              flex
                              items-center
                              gap-3

                              rounded-xl

                              border
                              border-white/10

                              bg-white/5

                              px-4
                              py-3

                              transition-all
                              duration-300

                              hover:border-blue-500/25
                              hover:bg-blue-500/10
                            "
                        >
                          <div
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0

                                items-center
                                justify-center

                                rounded-lg

                                bg-white/[0.06]

                                text-blue-300

                                shadow-sm
                              "
                          >
                            <Icon className="text-sm" />
                          </div>

                          <span
                            className="
                                text-sm
                                font-semibold

                                text-slate-200
                              "
                          >
                            {highlight}
                          </span>
                        </StaggerItem>
                      );
                    })}
                  </StaggerContainer>
                </div>

                {/* =================================
                    ACADEMIC PROJECT
                ================================== */}

                <div
                  className="
                    mt-8

                    rounded-2xl

                    border
                    border-blue-500/25

                    bg-blue-500/50

                    p-5
                    sm:p-6
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0

                        items-center
                        justify-center

                        rounded-xl

                        bg-white/[0.06]

                        text-blue-300

                        shadow-sm
                      "
                    >
                      <FaCode />
                    </div>

                    <div>
                      <p
                        className="
                          text-sm
                          font-bold

                          text-white
                        "
                      >
                        Academic Project
                      </p>

                      <p
                        className="
                          mt-2

                          text-sm
                          leading-6

                          text-slate-300
                        "
                      >
                        {educationItem.project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* =======================================
            BOTTOM MESSAGE
        ======================================== */}

        <Reveal
          className="
            mx-auto
            mt-8

            max-w-5xl
          "
        >
          <div
            className="
              flex
              flex-col

              gap-4

              rounded-2xl

              border
              border-white/10

              bg-white/5

              p-6

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-bold

                  text-white
                "
              >
                Education is the starting point, not the endpoint.
              </p>

              <p
                className="
                  mt-1

                  text-sm

                  text-slate-400
                "
              >
                I continue strengthening my skills through projects, practical
                experience, and continuous learning.
              </p>
            </div>

            <FaGraduationCap
              className="
                hidden

                text-3xl
                text-blue-500

                sm:block
              "
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
