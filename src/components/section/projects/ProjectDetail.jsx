import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
  FaCalendarAlt,
  FaLayerGroup,
  FaCode,
  FaLightbulb,
  FaExclamationCircle,
} from "react-icons/fa";

const ProjectDetail = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const screenshots = project?.screenshots || [];
  const technologies = project?.technologies || [];
  const features = project?.features || [];
  const challenges = project?.challenges || [];
  const solutions = project?.solutions || [];

  useEffect(() => {
    setActiveImage(0);
    setLightboxOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project?.slug]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowRight") {
        setActiveImage((prev) => (prev + 1) % screenshots.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage(
          (prev) => (prev - 1 + screenshots.length) % screenshots.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, screenshots.length]);

  if (!project) return null;

  const openImage = (index) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };

  const previousImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % screenshots.length);
  };

  const SectionLabel = ({ number, children }) => (
    <div className="flex items-center gap-3 mb-7">
      <span className="text-xs font-semibold tracking-[0.2em] text-blue-400">
        {number}
      </span>
      <span className="h-px w-8 bg-blue-400/50" />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {children}
      </span>
    </div>
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#070a14] text-slate-200">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-72 right-[-10%] h-[550px] w-[550px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute top-[45%] -left-72 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-12">
        {/* Navigation */}
        <div className="flex items-center justify-between border-b border-white/[0.07] py-6">
          <button
            onClick={onClose}
            className="group inline-flex items-center gap-3 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-blue-400/50 group-hover:bg-blue-500/10">
              <FaArrowLeft className="text-xs" />
            </span>
            Back to Projects
          </button>

          <span className="hidden text-xs font-medium tracking-[0.2em] text-slate-600 sm:block">
            PROJECT SHOWCASE
          </span>
        </div>

        {/* Hero */}
        <section className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-300">
                {project.category}
              </span>

              {project.status && (
                <span className="text-xs text-slate-500">{project.status}</span>
              )}
            </div>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="mt-5 text-lg leading-relaxed text-blue-200/80 sm:text-xl">
                {project.subtitle}
              </p>
            )}

            <p className="mt-7 max-w-lg text-sm leading-8 text-slate-400 sm:text-base">
              {project.overview || project.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  <FaGithub />
                  View Source Code
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/[0.08]"
                >
                  Live Preview
                  <FaArrowRight className="text-xs" />
                </a>
              )}
            </div>
          </div>

          {/* Main Preview */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-blue-500/[0.07] blur-2xl" />

            <button
              type="button"
              onClick={() => screenshots.length > 0 && openImage(0)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-[#101827] text-left shadow-2xl shadow-black/40"
            >
              {screenshots[0]?.src ? (
                <img
                  src={screenshots[0].src}
                  alt={screenshots[0].title || project.title}
                  className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                />
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center text-slate-600">
                  No project preview available
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#070a14]/50 via-transparent to-transparent opacity-70" />

              <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition group-hover:bg-blue-600">
                <FaExpand className="text-sm" />
              </span>
            </button>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Project interface preview</span>
              <span>
                {screenshots.length > 0
                  ? `01 / ${String(screenshots.length).padStart(2, "0")}`
                  : "Preview"}
              </span>
            </div>
          </div>
        </section>

        {/* Project Information */}
        <section className="grid grid-cols-2 gap-y-6 border-y border-white/[0.08] py-7 sm:grid-cols-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
              <FaCalendarAlt />
              Year
            </div>
            <p className="text-sm font-semibold text-slate-200">
              {project.year || "—"}
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
              <FaLayerGroup />
              Category
            </div>
            <p className="text-sm font-semibold text-slate-200">
              {project.category || "—"}
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
              <FaCode />
              Technologies
            </div>
            <p className="text-sm font-semibold text-slate-200">
              {technologies.length} technologies
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
              <FaExpand />
              Screenshots
            </div>
            <p className="text-sm font-semibold text-slate-200">
              {screenshots.length} images
            </p>
          </div>
        </section>

        {/* Overview and Tech Stack */}
        <section className="grid gap-14 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
          <div>
            <SectionLabel number="01">Project Overview</SectionLabel>

            <h2 className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
              Understanding the problem and the purpose behind the project.
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              {project.description || project.overview}
            </p>
          </div>

          <div>
            <SectionLabel number="02">Technology Stack</SectionLabel>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {technologies.map((technology, index) => (
                <span
                  key={`${technology}-${index}`}
                  className="rounded-lg border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              Technologies and tools used throughout the development process.
            </p>
          </div>
        </section>

        {/* Key Features */}
        {features.length > 0 && (
          <section className="border-t border-white/[0.08] py-20">
            <SectionLabel number="03">Key Features</SectionLabel>

            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                What this application can do.
              </h2>

              <p className="max-w-sm text-sm leading-7 text-slate-500">
                Core functionalities designed to support the application's main
                workflow.
              </p>
            </div>

            <div className="grid gap-x-16 md:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="flex gap-5 border-t border-white/[0.08] py-5"
                >
                  <span className="pt-0.5 text-xs font-semibold tabular-nums text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-7 text-slate-300 sm:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenges and Solutions */}
        {(challenges.length > 0 || solutions.length > 0) && (
          <section className="border-t border-white/[0.08] py-20">
            <SectionLabel number="04">Development Process</SectionLabel>

            <h2 className="mb-12 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Challenges, decisions, and solutions.
            </h2>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <FaExclamationCircle className="text-sm text-amber-400" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Challenges
                  </h3>
                </div>

                <div className="space-y-5">
                  {challenges.map((challenge, index) => (
                    <div key={`${challenge}-${index}`} className="flex gap-4">
                      <span className="text-xs text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-7 text-slate-400">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center gap-3">
                  <FaLightbulb className="text-sm text-cyan-400" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Solutions
                  </h3>
                </div>

                <div className="space-y-5">
                  {solutions.map((solution, index) => (
                    <div key={`${solution}-${index}`} className="flex gap-4">
                      <span className="text-xs text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-7 text-slate-400">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Screenshot Gallery */}
        {screenshots.length > 1 && (
          <section className="border-t border-white/[0.08] py-20">
            <SectionLabel number="05">Application Showcase</SectionLabel>

            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Inside the application.
                </h2>
                <p className="mt-3 text-sm text-slate-500">
                  A closer look at the interface and its functionality.
                </p>
              </div>

              <span className="text-xs text-slate-500">
                {screenshots.length} screenshots
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {screenshots.map((screenshot, index) => (
                <button
                  key={`${screenshot.src}-${index}`}
                  type="button"
                  onClick={() => openImage(index)}
                  className={`group overflow-hidden rounded-xl border border-white/[0.09] bg-[#101827] text-left transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 ${
                    index === 0 && screenshots.length >= 4
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={screenshot.src}
                      alt={screenshot.title || `Screenshot ${index + 1}`}
                      loading="lazy"
                      className={`w-full object-cover object-top transition duration-500 group-hover:scale-[1.035] ${
                        index === 0 && screenshots.length >= 4
                          ? "aspect-[16/8]"
                          : "aspect-[16/10]"
                      }`}
                    />

                    <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                      <FaExpand className="text-xs" />
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                    <span className="text-sm font-medium text-slate-300">
                      {screenshot.title || `Screenshot ${index + 1}`}
                    </span>
                    <span className="text-xs text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Closing */}
        <section className="border-t border-white/[0.08] py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Explore the project
              </p>

              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Interested in the implementation?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                Explore the source code and discover more about how this project
                was developed.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/[0.08]"
                >
                  <FaGithub />
                  GitHub
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Live Demo
                  <FaArrowRight className="text-xs" />
                </a>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxOpen && screenshots[activeImage] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03050b]/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Close image preview"
          >
            <FaTimes />
          </button>

          {screenshots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition hover:bg-blue-600 sm:left-8"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition hover:bg-blue-600 sm:right-8"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <div
            className="flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={screenshots[activeImage].src}
              alt={screenshots[activeImage].title || project.title}
              className="max-h-[78vh] max-w-full rounded-lg object-contain"
            />

            <div className="mt-5 flex w-full items-center justify-between text-sm">
              <span className="text-slate-300">
                {screenshots[activeImage].title || project.title}
              </span>

              <span className="text-slate-500">
                {activeImage + 1} / {screenshots.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDetail;
