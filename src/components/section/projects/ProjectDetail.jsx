import { useEffect, useState } from "react";

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
  FaTimes,
  FaExpand,
  FaLaptopCode,
} from "react-icons/fa";

const ProjectDetail = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const screenshots = project?.screenshots || [];
  const activeScreenshot = screenshots[activeImage];

  // Reset gallery when opening another project
  useEffect(() => {
    setActiveImage(0);
    setIsLightboxOpen(false);
  }, [project?.slug]);

  // Close and navigate lightbox with keyboard
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === screenshots.length - 1 ? 0 : current + 1,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === 0 ? screenshots.length - 1 : current - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, screenshots.length]);

  if (!project) {
    return null;
  }

  const isCompleted = project.status === "Completed";

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

  const selectImage = (index) => {
    setActiveImage(index);
  };

  return (
    <>
      <section
        className="
          relative min-h-screen overflow-hidden
          bg-slate-950 py-20 sm:py-24 lg:py-28
        "
      >
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* BACK BUTTON */}
          <button
            type="button"
            onClick={onClose}
            className="
              group inline-flex items-center gap-3
              rounded-xl border border-white/10
              bg-white/[0.05] px-4 py-2.5
              text-sm font-semibold text-slate-300
              transition-all duration-300
              hover:-translate-x-1 hover:border-blue-500/30
              hover:text-blue-300
            "
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </button>

          {/* PROJECT HERO */}
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* PROJECT INFORMATION */}
            <div>
              <div
                className="
                inline-flex items-center gap-2
                rounded-full border border-blue-500/25
                bg-blue-500/10 px-4 py-2
                text-xs font-bold uppercase tracking-wider
                text-blue-300
              "
              >
                <FaLayerGroup />
                {project.category}
              </div>

              <h1
                className="
                mt-6 text-4xl font-black tracking-tight
                text-white sm:text-5xl lg:text-6xl
              "
              >
                {project.title}
              </h1>

              <p className="mt-3 text-base font-semibold text-blue-300 sm:text-lg">
                {project.subtitle}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                {project.overview}
              </p>

              {/* PROJECT META */}
              <div className="mt-7 flex flex-wrap gap-3">
                <div
                  className="
                  inline-flex items-center gap-2
                  rounded-xl border border-white/10
                  bg-white/[0.05] px-4 py-2.5
                  text-sm font-semibold text-slate-300
                "
                >
                  <FaCalendarAlt className="text-blue-400" />
                  {project.year}
                </div>

                <div
                  className={`
                  inline-flex items-center gap-2
                  rounded-xl border px-4 py-2.5
                  text-sm font-semibold
                  ${
                    isCompleted
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                      : "border-amber-500/20 bg-amber-500/10 text-amber-300"
                  }
                `}
                >
                  <span
                    className={`
                    h-2 w-2 rounded-full
                    ${isCompleted ? "bg-emerald-400" : "bg-amber-400"}
                  `}
                  />
                  {project.status}
                </div>

                <div
                  className="
                  inline-flex items-center gap-2
                  rounded-xl border border-white/10
                  bg-white/[0.05] px-4 py-2.5
                  text-sm font-semibold text-slate-300
                "
                >
                  <FaLaptopCode className="text-blue-400" />
                  {screenshots.length} Screenshots
                </div>
              </div>

              {/* PROJECT LINKS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-xl bg-blue-600 px-5 py-3
                      text-sm font-bold text-white
                      transition-all duration-300
                      hover:-translate-y-1 hover:bg-blue-500
                      hover:shadow-lg hover:shadow-blue-500/20
                    "
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-xl border border-white/10
                      bg-white/[0.05] px-5 py-3
                      text-sm font-bold text-slate-200
                      transition-all duration-300
                      hover:-translate-y-1 hover:border-blue-500/30
                      hover:text-blue-300
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* MAIN SCREENSHOT */}
            <div
              className="
              overflow-hidden rounded-3xl
              border border-white/10
              bg-slate-900/80 p-2
              shadow-2xl shadow-black/30
            "
            >
              <div
                className="
                group relative flex aspect-[16/10]
                items-center justify-center overflow-hidden
                rounded-2xl bg-slate-950
              "
              >
                {activeScreenshot ? (
                  <>
                    <img
                      src={activeScreenshot.src}
                      alt={`${project.title} - ${activeScreenshot.title}`}
                      className="
                        h-full w-full object-contain
                        transition-transform duration-500
                        group-hover:scale-[1.02]
                      "
                    />

                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      aria-label="Enlarge screenshot"
                      className="
                        absolute bottom-4 right-4
                        inline-flex items-center gap-2
                        rounded-xl border border-white/15
                        bg-slate-950/80 px-3 py-2
                        text-xs font-semibold text-white
                        opacity-0 backdrop-blur-md
                        transition-all duration-300
                        group-hover:opacity-100
                        hover:bg-blue-600
                      "
                    >
                      <FaExpand />
                      Enlarge
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-slate-500">
                    <FaLaptopCode className="text-4xl" />
                    <p className="text-sm">No screenshot available</p>
                  </div>
                )}

                {/* IMAGE NAVIGATION */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous screenshot"
                      className="
                        absolute left-3 top-1/2
                        flex h-10 w-10 -translate-y-1/2
                        items-center justify-center
                        rounded-xl border border-white/10
                        bg-slate-950/75 text-white
                        backdrop-blur-md transition-all
                        hover:scale-105 hover:bg-blue-600
                      "
                    >
                      <FaChevronLeft />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next screenshot"
                      className="
                        absolute right-3 top-1/2
                        flex h-10 w-10 -translate-y-1/2
                        items-center justify-center
                        rounded-xl border border-white/10
                        bg-slate-950/75 text-white
                        backdrop-blur-md transition-all
                        hover:scale-105 hover:bg-blue-600
                      "
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>

              {/* ACTIVE IMAGE INFORMATION */}
              {activeScreenshot && (
                <div
                  className="
                  flex items-center justify-between gap-3
                  px-4 py-4
                "
                >
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">
                      {activeScreenshot.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Screenshot {activeImage + 1} of {screenshots.length}
                    </p>
                  </div>

                  {screenshots.length > 1 && (
                    <div className="flex shrink-0 items-center gap-1.5">
                      {screenshots.map((screenshot, index) => (
                        <button
                          key={screenshot.src}
                          type="button"
                          onClick={() => selectImage(index)}
                          aria-label={`View ${screenshot.title}`}
                          className={`
                            h-2 rounded-full transition-all duration-300
                            ${
                              activeImage === index
                                ? "w-6 bg-blue-500"
                                : "w-2 bg-slate-600 hover:bg-slate-400"
                            }
                          `}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* PROJECT OVERVIEW AND TECHNOLOGIES */}
          <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* DESCRIPTION */}
            <div
              className="
              rounded-3xl border border-white/10
              bg-white/[0.04] p-7 sm:p-9
            "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-blue-500/10 text-blue-400
                "
                >
                  <FaCode />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Project Overview
                  </p>
                  <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
                    About the project
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
                {project.description}
              </p>
            </div>

            {/* TECHNOLOGY STACK */}
            <div
              className="
              rounded-3xl border border-white/10
              bg-white/[0.04] p-7 sm:p-9
            "
            >
              <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Technology Stack
              </p>

              <h2 className="mt-2 text-xl font-black text-white">Built with</h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies?.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-xl border border-white/10
                      bg-white/[0.05] px-3 py-2
                      text-xs font-semibold text-slate-300
                      transition-colors hover:border-blue-500/30
                      hover:bg-blue-500/10
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* KEY FEATURES */}
          {project.features?.length > 0 && (
            <div
              className="
              mt-8 rounded-3xl border border-white/10
              bg-white/[0.04] p-7 sm:p-9 lg:p-10
            "
            >
              <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Key Features
              </p>

              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                What the application can do
              </h2>

              <div
                className="
                mt-8 grid gap-3
                sm:grid-cols-2 lg:grid-cols-3
              "
              >
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="
                      flex items-start gap-3 rounded-2xl
                      border border-white/10 bg-white/[0.03]
                      p-4 transition-all duration-300
                      hover:-translate-y-1 hover:border-blue-500/30
                      hover:bg-blue-500/[0.06]
                    "
                  >
                    <FaCheckCircle className="mt-0.5 shrink-0 text-blue-400" />
                    <span className="text-sm font-medium leading-6 text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CHALLENGES AND SOLUTIONS */}
          {(project.challenges?.length > 0 ||
            project.solutions?.length > 0) && (
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* CHALLENGES */}
              {project.challenges?.length > 0 && (
                <div
                  className="
                  rounded-3xl border border-orange-500/20
                  bg-white/[0.04] p-7 sm:p-9
                "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                      flex h-11 w-11 items-center justify-center
                      rounded-xl bg-orange-500/10 text-orange-400
                    "
                    >
                      <FaExclamationTriangle />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-300">
                        Challenges
                      </p>
                      <h2 className="mt-1 text-xl font-black text-white">
                        Problems I faced
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="
                          flex gap-3 rounded-xl
                          border border-orange-500/10
                          bg-orange-500/[0.05] p-4
                        "
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                        <p className="text-sm leading-6 text-slate-300">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SOLUTIONS */}
              {project.solutions?.length > 0 && (
                <div
                  className="
                  rounded-3xl border border-emerald-500/20
                  bg-white/[0.04] p-7 sm:p-9
                "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                      flex h-11 w-11 items-center justify-center
                      rounded-xl bg-emerald-500/10 text-emerald-400
                    "
                    >
                      <FaLightbulb />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                        Solutions
                      </p>
                      <h2 className="mt-1 text-xl font-black text-white">
                        How I solved them
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {project.solutions.map((solution, index) => (
                      <div
                        key={index}
                        className="
                          flex gap-3 rounded-xl
                          border border-emerald-500/10
                          bg-emerald-500/[0.05] p-4
                        "
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400" />
                        <p className="text-sm leading-6 text-slate-300">
                          {solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SCREENSHOT GALLERY */}
          {screenshots.length > 0 && (
            <div className="mt-20">
              <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                    Project Preview
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Application Screenshots
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Explore the interfaces and features of this application.
                  </p>
                </div>

                <span
                  className="
                  inline-flex w-fit items-center gap-2
                  rounded-full border border-white/10
                  bg-white/[0.04] px-3 py-2
                  text-xs font-semibold text-slate-400
                "
                >
                  <FaLaptopCode className="text-blue-400" />
                  {screenshots.length} Images
                </span>
              </div>

              <div
                className="
                grid gap-5
                sm:grid-cols-2 lg:grid-cols-3
              "
              >
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.src}
                    type="button"
                    onClick={() => {
                      setActiveImage(index);
                      setIsLightboxOpen(true);
                    }}
                    className="
                      group overflow-hidden rounded-2xl
                      border border-white/10 bg-slate-900/80
                      text-left transition-all duration-300
                      hover:-translate-y-1 hover:border-blue-500/40
                      hover:shadow-xl hover:shadow-blue-500/10
                    "
                  >
                    <div
                      className="
                      relative flex aspect-[16/10]
                      items-center justify-center overflow-hidden
                      bg-slate-950 p-2
                    "
                    >
                      <img
                        src={screenshot.src}
                        alt={`${project.title} - ${screenshot.title}`}
                        loading="lazy"
                        className="
                          h-full w-full object-contain
                          transition-transform duration-500
                          group-hover:scale-[1.03]
                        "
                      />

                      <div
                        className="
                        absolute inset-0 flex items-center
                        justify-center bg-slate-950/0
                        transition-colors duration-300
                        group-hover:bg-slate-950/35
                      "
                      >
                        <span
                          className="
                          flex h-11 w-11 scale-90 items-center
                          justify-center rounded-full
                          bg-blue-600 text-white opacity-0
                          transition-all duration-300
                          group-hover:scale-100 group-hover:opacity-100
                        "
                        >
                          <FaExpand />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/10 px-4 py-4">
                      <span
                        className="
                        flex h-8 w-8 shrink-0 items-center
                        justify-center rounded-lg
                        bg-blue-500/10 text-xs font-bold text-blue-300
                      "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-white">
                          {screenshot.title}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          Click to enlarge
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* BOTTOM CTA */}
          <div
            className="
            mt-20 overflow-hidden rounded-3xl
            border border-blue-500/20
            bg-gradient-to-br from-blue-950/80
            via-slate-900 to-slate-950
            p-8 sm:p-10 lg:p-12
          "
          >
            <div
              className="
              flex flex-col gap-8
              lg:flex-row lg:items-center
              lg:justify-between
            "
            >
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                  Explore the project
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Want to see how it was built?
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  Explore the source code and see the implementation behind this
                  project.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-xl bg-white px-5 py-3
                      text-sm font-bold text-slate-950
                      transition-all duration-300
                      hover:-translate-y-1 hover:bg-blue-100
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
                      inline-flex items-center justify-center gap-2
                      rounded-xl border border-white/15
                      bg-white/[0.05] px-5 py-3
                      text-sm font-bold text-white
                      transition-all duration-300
                      hover:-translate-y-1 hover:border-blue-400
                      hover:text-blue-300
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* BACK TO PROJECTS */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="
                group inline-flex items-center gap-2
                text-sm font-bold text-slate-400
                transition-colors duration-300
                hover:text-blue-300
              "
            >
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Back to all projects
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE LIGHTBOX
      ====================================================== */}
      {isLightboxOpen && activeScreenshot && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-slate-950/95 p-4
            backdrop-blur-md sm:p-8
          "
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close image preview"
            className="
              absolute right-5 top-5 z-20
              flex h-11 w-11 items-center
              justify-center rounded-xl
              border border-white/10 bg-white/10
              text-white transition-colors
              hover:bg-red-500
            "
          >
            <FaTimes />
          </button>

          {/* PREVIOUS */}
          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous screenshot"
              className="
                absolute left-3 top-1/2 z-20
                flex h-10 w-10 -translate-y-1/2
                items-center justify-center
                rounded-xl border border-white/10
                bg-slate-900/90 text-white
                transition-colors hover:bg-blue-600
                sm:left-6 sm:h-12 sm:w-12
              "
            >
              <FaChevronLeft />
            </button>
          )}

          {/* IMAGE */}
          <div
            className="
              relative flex max-h-[85vh] w-full
              max-w-6xl flex-col items-center
              justify-center gap-4
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeScreenshot.src}
              alt={`${project.title} - ${activeScreenshot.title}`}
              className="
                max-h-[75vh] max-w-full
                rounded-xl object-contain
                shadow-2xl shadow-black/50
              "
            />

            <div className="text-center">
              <p className="text-sm font-bold text-white sm:text-base">
                {activeScreenshot.title}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {activeImage + 1} / {screenshots.length}
              </p>
            </div>
          </div>

          {/* NEXT */}
          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next screenshot"
              className="
                absolute right-3 top-1/2 z-20
                flex h-10 w-10 -translate-y-1/2
                items-center justify-center
                rounded-xl border border-white/10
                bg-slate-900/90 text-white
                transition-colors hover:bg-blue-600
                sm:right-6 sm:h-12 sm:w-12
              "
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
