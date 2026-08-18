import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLightbulb,
  FaExclamationTriangle,
  FaCode,
  FaCalendarAlt,
  FaLayerGroup,
  FaChevronLeft,
  FaChevronRight,
  FaLaptopCode,
} from "react-icons/fa";

import { useState } from "react";

const ProjectDetail = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [imageError, setImageError] = useState(false);

  if (!project) {
    return null;
  }

  const screenshots = project.screenshots || [];

  const nextImage = () => {
    if (screenshots.length === 0) return;

    setActiveImage((current) =>
      current === screenshots.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    if (screenshots.length === 0) return;

    setActiveImage((current) =>
      current === 0 ? screenshots.length - 1 : current - 1,
    );
  };

  return (
    <section
      className="
        relative
        min-h-screen

        overflow-hidden

        bg-white/5

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            -top-40

            h-96
            w-96

            rounded-full

            bg-blue-500/60

            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            top-1/3

            h-96
            w-96

            rounded-full

            bg-cyan-500/50

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
            BACK BUTTON
        ======================================== */}

        <button
          type="button"
          onClick={onClose}
          className="
            group

            inline-flex
            items-center
            gap-3

            rounded-xl

            border
            border-white/10

            bg-white/[0.06]

            px-4
            py-2.5

            text-sm
            font-semibold

            text-slate-300

            shadow-sm

            transition-all
            duration-300

            hover:-translate-x-1
            hover:border-blue-500/25
            hover:text-blue-300
            hover:shadow-md
          "
        >
          <FaArrowLeft
            className="
              transition-transform
              duration-300

              group-hover:-translate-x-1
            "
          />
          Back to Projects
        </button>

        {/* =======================================
            PROJECT HERO
        ======================================== */}

        <div
          className="
            mt-10

            grid
            gap-10

            lg:grid-cols-[1fr_1.15fr]

            lg:items-center
          "
        >
          {/* =====================================
              LEFT — PROJECT INFORMATION
          ====================================== */}

          <div>
            {/* Category */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-blue-500/25

                bg-blue-500/10

                px-4
                py-2

                text-xs
                font-bold
                uppercase
                tracking-wider

                text-blue-300
              "
            >
              <FaLayerGroup />

              {project.category}
            </div>

            {/* Title */}

            <h1
              className="
                mt-6

                text-4xl
                font-black
                tracking-tight

                text-white

                sm:text-5xl

                lg:text-6xl
              "
            >
              {project.title}
            </h1>

            {/* Overview */}

            <p
              className="
                mt-6

                max-w-2xl

                text-base
                leading-8

                text-slate-400

                sm:text-lg
              "
            >
              {project.overview}
            </p>

            {/* Meta */}

            <div
              className="
                mt-7

                flex
                flex-wrap
                gap-3
              "
            >
              {/* Year */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-white/10

                  bg-white/[0.06]

                  px-4
                  py-2.5

                  text-sm
                  font-semibold

                  text-slate-300

                  shadow-sm
                "
              >
                <FaCalendarAlt className="text-blue-500" />

                {project.year}
              </div>

              {/* Status */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-emerald-500/25

                  bg-emerald-500/10

                  px-4
                  py-2.5

                  text-sm
                  font-semibold

                  text-emerald-300
                "
              >
                <span
                  className="
                    h-2
                    w-2

                    rounded-full

                    bg-emerald-500
                  "
                />

                {project.status}
              </div>
            </div>

            {/* Buttons */}

            <div
              className="
                mt-8

                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              {/* GitHub */}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    bg-slate-900

                    px-5
                    py-3

                    text-sm
                    font-bold

                    text-white

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-blue-600
                    hover:shadow-lg
                    hover:shadow-blue-500/20
                  "
                >
                  <FaGithub />
                  View on GitHub
                </a>
              )}

              {/* Demo */}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-white/10

                    bg-white/[0.06]

                    px-5
                    py-3

                    text-sm
                    font-bold

                    text-slate-200

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-blue-500/25
                    hover:text-blue-300
                    hover:shadow-md
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* =====================================
              RIGHT — MAIN IMAGE
          ====================================== */}

          <div
            className="
              relative

              overflow-hidden

              rounded-3xl

              border
              border-white/10

              bg-white/[0.06]

              p-2

              shadow-2xl
              shadow-slate-200/70
            "
          >
            <div
              className="
                relative

                aspect-[16/10]

                overflow-hidden

                rounded-2xl

                bg-white/5
              "
            >
              <img
                src={
                  screenshots.length > 0
                    ? screenshots[activeImage]
                    : project.thumbnail
                }
                alt={`${project.title} screenshot`}
                className="
                  h-full
                  w-full

                  object-cover

                  transition-all
                  duration-500
                "
              />

              {/* Image Gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-slate-950/30
                  via-transparent
                  to-transparent
                "
              />

              {/* Navigation */}

              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous screenshot"
                    className="
                      absolute
                      left-4
                      top-1/2

                      flex
                      h-10
                      w-10

                      -translate-y-1/2

                      items-center
                      justify-center

                      rounded-xl

                      bg-white/5

                      text-slate-200

                      shadow-lg

                      backdrop-blur

                      transition-all
                      duration-300

                      hover:scale-105
                      hover:bg-white/[0.06]
                      hover:text-blue-300
                    "
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next screenshot"
                    className="
                      absolute
                      right-4
                      top-1/2

                      flex
                      h-10
                      w-10

                      -translate-y-1/2

                      items-center
                      justify-center

                      rounded-xl

                      bg-white/5

                      text-slate-200

                      shadow-lg

                      backdrop-blur

                      transition-all
                      duration-300

                      hover:scale-105
                      hover:bg-white/[0.06]
                      hover:text-blue-300
                    "
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* Image Counter */}

            {screenshots.length > 1 && (
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  px-4
                  py-3
                "
              >
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View screenshot ${index + 1}`}
                    className={`
                      h-2

                      rounded-full

                      transition-all
                      duration-300

                      ${
                        activeImage === index
                          ? "w-7 bg-blue-600"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }
                    `}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* =======================================
            PROJECT OVERVIEW
        ======================================== */}

        <div
          className="
            mt-20

            grid
            gap-8

            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* Description */}

          <div
            className="
              rounded-3xl

              border
              border-white/10

              bg-white/[0.06]

              p-7
              sm:p-9
              lg:p-10

              shadow-sm
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-xl

                  bg-blue-500/10

                  text-blue-300
                "
              >
                <FaCode />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider

                    text-blue-300
                  "
                >
                  Project Overview
                </p>

                <h2
                  className="
                    mt-1

                    text-xl
                    font-black

                    text-white

                    sm:text-2xl
                  "
                >
                  About the project
                </h2>
              </div>
            </div>

            <p
              className="
                mt-6

                text-sm
                leading-8

                text-slate-400

                sm:text-base
              "
            >
              {project.description}
            </p>
          </div>

          {/* Technology */}

          <div
            className="
              rounded-3xl

              border
              border-white/10

              bg-white/[0.06]

              p-7
              sm:p-9

              shadow-sm
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider

                text-slate-500
              "
            >
              Technology Stack
            </p>

            <h2
              className="
                mt-2

                text-xl
                font-black

                text-white
              "
            >
              Built with
            </h2>

            <div
              className="
                mt-6

                flex
                flex-wrap
                gap-2
              "
            >
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                      rounded-xl

                      border
                      border-white/10

                      bg-white/5

                      px-3
                      py-2

                      text-xs
                      font-semibold

                      text-slate-300
                    "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =======================================
            FEATURES
        ======================================== */}

        {project.features?.length > 0 && (
          <div className="mt-8">
            <div
              className="
                rounded-3xl

                border
                border-white/10

                bg-white/[0.06]

                p-7
                sm:p-9
                lg:p-10

                shadow-sm
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider

                    text-blue-300
                  "
                >
                  Key Features
                </p>

                <h2
                  className="
                    mt-2

                    text-2xl
                    font-black

                    text-white

                    sm:text-3xl
                  "
                >
                  What the application can do
                </h2>
              </div>

              <div
                className="
                  mt-8

                  grid
                  gap-3

                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="
                        group

                        flex
                        items-start
                        gap-3

                        rounded-2xl

                        border
                        border-white/10

                        bg-white/5

                        p-4

                        transition-all
                        duration-300

                        hover:-translate-y-1
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
                          font-medium
                          leading-6

                          text-slate-300
                        "
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =======================================
            CHALLENGES & SOLUTIONS
        ======================================== */}

        {(project.challenges?.length > 0 || project.solutions?.length > 0) && (
          <div
            className="
              mt-8

              grid
              gap-8

              lg:grid-cols-2
            "
          >
            {/* Challenges */}

            {project.challenges?.length > 0 && (
              <div
                className="
                  rounded-3xl

                  border
                  border-orange-500/25

                  bg-white/[0.06]

                  p-7
                  sm:p-9

                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11

                      items-center
                      justify-center

                      rounded-xl

                      bg-orange-500/10

                      text-orange-500
                    "
                  >
                    <FaExclamationTriangle />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider

                        text-orange-500
                      "
                    >
                      Challenges
                    </p>

                    <h2
                      className="
                        mt-1

                        text-xl
                        font-black

                        text-white
                      "
                    >
                      Problems I faced
                    </h2>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="
                          flex
                          gap-3

                          rounded-xl

                          bg-orange-500/50

                          p-4
                        "
                    >
                      <span
                        className="
                            mt-2

                            h-1.5
                            w-1.5
                            shrink-0

                            rounded-full

                            bg-orange-400
                          "
                      />

                      <p
                        className="
                            text-sm
                            leading-6

                            text-slate-300
                          "
                      >
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Solutions */}

            {project.solutions?.length > 0 && (
              <div
                className="
                  rounded-3xl

                  border
                  border-emerald-500/25

                  bg-white/[0.06]

                  p-7
                  sm:p-9

                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11

                      items-center
                      justify-center

                      rounded-xl

                      bg-emerald-500/10

                      text-emerald-500
                    "
                  >
                    <FaLightbulb />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider

                        text-emerald-500
                      "
                    >
                      Solutions
                    </p>

                    <h2
                      className="
                        mt-1

                        text-xl
                        font-black

                        text-white
                      "
                    >
                      How I solved them
                    </h2>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {project.solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="
                          flex
                          gap-3

                          rounded-xl

                          bg-emerald-500/50

                          p-4
                        "
                    >
                      <FaCheckCircle
                        className="
                            mt-0.5
                            shrink-0

                            text-emerald-500
                          "
                      />

                      <p
                        className="
                            text-sm
                            leading-6

                            text-slate-300
                          "
                      >
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* =======================================
            SCREENSHOTS
        ======================================== */}

        {screenshots.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]

                  text-blue-300
                "
              >
                Project Preview
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
                Application Screenshots
              </h2>
            </div>

            <div
              className="
                grid
                gap-5

                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className="
                      group

                      relative

                      overflow-hidden

                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.06]

                      p-1

                      text-left

                      shadow-sm

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-blue-500/25
                      hover:shadow-xl
                    "
                >
                  <div
                    className="
                        aspect-[16/10]

                        overflow-hidden

                        rounded-xl

                        bg-white/5
                      "
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="
                          h-full
                          w-full

                          object-cover

                          transition-transform
                          duration-500

                          group-hover:scale-105
                        "
                    />
                  </div>

                  <div
                    className="
                        absolute
                        bottom-3
                        left-3

                        rounded-lg

                        bg-slate-950/70

                        px-2.5
                        py-1

                        text-[10px]
                        font-bold

                        text-white

                        backdrop-blur
                      "
                  >
                    0{index + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =======================================
            BOTTOM CTA
        ======================================== */}

        <div
          className="
            mt-20

            overflow-hidden

            rounded-3xl

            bg-slate-950

            p-8

            shadow-2xl
            shadow-slate-300/30

            sm:p-10
            lg:p-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]

                  text-blue-400
                "
              >
                Explore the project
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
                Want to see how it was built?
              </h2>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-500

                  sm:text-base
                "
              >
                Explore the source code and see the implementation behind this
                project.
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    bg-white/[0.06]

                    px-5
                    py-3

                    text-sm
                    font-bold

                    text-white

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-blue-500
                    hover:text-white
                  "
                >
                  <FaGithub />
                  GitHub Repository
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-slate-700

                    px-5
                    py-3

                    text-sm
                    font-bold

                    text-slate-500

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-blue-400
                    hover:text-blue-400
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* =======================================
            BACK TO PROJECTS
        ======================================== */}

        <div
          className="
            mt-10

            flex
            justify-center
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              group

              inline-flex
              items-center
              gap-2

              text-sm
              font-bold

              text-slate-400

              transition-colors
              duration-300

              hover:text-blue-300
            "
          >
            <FaArrowLeft
              className="
                transition-transform
                duration-300

                group-hover:-translate-x-1
              "
            />
            Back to all projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
