import experience from "../../../data/experience";

import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import Reveal from "../../common/Reveal";

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden

        bg-[#0a0f1e]

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -right-40
            top-20

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
            -left-40
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
            TITLE
        ======================================== */}

        <Reveal>
          <SectionTitle
            subtitle="Experience"
            title="Where I turned technical knowledge into real experience."
            description="My professional experience has helped me understand how technology is used in real working environments, while strengthening my communication, problem-solving, and technical support skills."
          />
        </Reveal>

        {/* =======================================
            EXPERIENCE TIMELINE
        ======================================== */}

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative">
            {/* Timeline line */}

            <div
              className="
                absolute
                left-[27px]
                top-8
                bottom-8

                hidden
                w-px

                bg-gradient-to-b
                from-blue-500
                via-slate-200
                to-transparent

                sm:block
              "
            />

            <div className="space-y-8">
              {experience.map((item, index) => (
                <Reveal
                  key={`${item.company}-${index}`}
                  x={-24}
                  delay={index * 0.1}
                  amount={0.1}
                  className="
                    relative

                    sm:pl-20
                  "
                >
                  {/* =================================
                      TIMELINE DOT
                  ================================== */}

                  <div
                    className="
                      absolute
                      left-0
                      top-7

                      hidden

                      h-14
                      w-14

                      items-center
                      justify-center

                      rounded-2xl

                      border-4
                      border-slate-50

                      bg-blue-600

                      text-white

                      shadow-lg
                      shadow-blue-500/20

                      sm:flex
                    "
                  >
                    <FaBriefcase />
                  </div>

                  {/* =================================
                      EXPERIENCE CARD
                  ================================== */}

                  <Card
                    className="
                      group
                      relative
                      overflow-hidden

                      p-7
                      sm:p-8
                      lg:p-9

                      bg-white/[0.06]

                      transition-all
                      duration-500

                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    {/* Top Accent */}

                    <div
                      className="
                        absolute
                        left-0
                        top-0

                        h-1
                        w-full

                        bg-gradient-to-r
                        from-blue-600
                        via-cyan-500
                        to-transparent
                      "
                    />

                    {/* =================================
                        HEADER
                    ================================== */}

                    <div
                      className="
                        flex
                        flex-col
                        gap-6

                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                      "
                    >
                      <div>
                        {/* Mobile Icon */}

                        <div
                          className="
                            mb-5

                            flex
                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-xl

                            bg-blue-500/10

                            text-blue-300

                            sm:hidden
                          "
                        >
                          <FaBriefcase />
                        </div>

                        <div
                          className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                          "
                        >
                          <span
                            className="
                              text-sm
                              font-bold
                              uppercase
                              tracking-wider

                              text-blue-300
                            "
                          >
                            {item.type}
                          </span>

                          <span className="text-slate-500">•</span>

                          <span
                            className="
                              text-sm

                              text-slate-500
                            "
                          >
                            {item.period}
                          </span>
                        </div>

                        <h3
                          className="
                            mt-2

                            text-2xl
                            font-black
                            tracking-tight

                            text-white

                            sm:text-3xl
                          "
                        >
                          {item.role}
                        </h3>

                        <p
                          className="
                            mt-2

                            text-base
                            font-semibold

                            text-slate-300
                          "
                        >
                          {item.company}
                        </p>
                      </div>

                      {/* Meta */}

                      <div
                        className="
                          flex
                          flex-col
                          gap-2

                          text-sm
                          text-slate-400
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <FaMapMarkerAlt className="text-blue-500" />

                          <span>{item.location}</span>
                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <FaCalendarAlt className="text-blue-500" />

                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* =================================
                        DIVIDER
                    ================================== */}

                    <div
                      className="
                        my-7

                        h-px

                        bg-white/10
                      "
                    />

                    {/* =================================
                        DESCRIPTION
                    ================================== */}

                    <div>
                      <p
                        className="
                          text-base
                          leading-8

                          text-slate-300
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* =================================
                        RESPONSIBILITIES
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
                        Responsibilities
                      </p>

                      <div
                        className="
                          mt-4

                          grid
                          gap-3

                          lg:grid-cols-2
                        "
                      >
                        {item.responsibilities.map((responsibility) => (
                          <div
                            key={responsibility}
                            className="
                                flex
                                items-start
                                gap-3

                                rounded-xl

                                border
                                border-white/10

                                bg-white/5

                                p-4

                                transition-all
                                duration-300

                                hover:border-blue-500/25
                                hover:bg-blue-500/10
                              "
                          >
                            <FaCheckCircle
                              className="
                                  mt-0.5
                                  shrink-0

                                  text-blue-500
                                "
                            />

                            <span
                              className="
                                  text-sm
                                  leading-6

                                  text-slate-300
                                "
                            >
                              {responsibility}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* =================================
                        SKILLS
                    ================================== */}

                    <div
                      className="
                        mt-8

                        border-t
                        border-white/10

                        pt-7
                      "
                    >
                      <p
                        className="
                          mb-4

                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.16em]

                          text-slate-500
                        "
                      >
                        Skills Developed
                      </p>

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {item.skills.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* =================================
                        FOOTER
                    ================================== */}

                    <div
                      className="
                        mt-7

                        flex
                        items-center
                        justify-between

                        border-t
                        border-white/10

                        pt-6
                      "
                    >
                      <div>
                        <p
                          className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-wider

                            text-slate-500
                          "
                        >
                          Professional Growth
                        </p>

                        <p
                          className="
                            mt-1

                            text-sm
                            font-bold

                            text-slate-200
                          "
                        >
                          Technical & problem-solving experience
                        </p>
                      </div>

                      <div
                        className="
                          flex
                          h-10
                          w-10

                          items-center
                          justify-center

                          rounded-xl

                          border
                          border-white/10

                          text-slate-500

                          transition-all
                          duration-300

                          group-hover:border-blue-500/25
                          group-hover:bg-blue-500/10
                          group-hover:text-blue-300
                        "
                      >
                        <FaArrowRight
                          className="
                            text-sm

                            transition-transform
                            duration-300

                            group-hover:translate-x-0.5
                          "
                        />
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================
            BOTTOM MESSAGE
        ======================================== */}

        <Reveal className="mx-auto mt-8 max-w-5xl">
          <div
            className="
              rounded-2xl

              border
              border-blue-500/25

              bg-gradient-to-r
              from-blue-500/10
              to-cyan-500/10

              p-6

              sm:p-7
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center
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
                <FaBriefcase />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-bold

                    text-white
                  "
                >
                  Learning through real-world experience.
                </p>

                <p
                  className="
                    mt-1

                    text-sm
                    leading-6

                    text-slate-400
                  "
                >
                  My internship experience gave me the opportunity to apply
                  technical knowledge in a professional environment and
                  understand the importance of communication, reliability, and
                  problem solving.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
