import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  FaLaptopCode,
  FaCheck,
  FaImage,
} from "react-icons/fa";

const SectionHeading = ({ number, eyebrow, title, description }) => (
  <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <div className="mb-2 flex items-center gap-3">
        <span className="text-xs font-bold tracking-[0.16em] text-[#A45F45]">
          {number}
        </span>
        <span className="h-px w-7 bg-[#C9A797]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#85877E]">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#242722] sm:text-3xl">
        {title}
      </h2>
    </div>

    {description && (
      <p className="max-w-md text-sm leading-6 text-[#73766D]">{description}</p>
    )}
  </div>
);

const ProjectDetail = ({ project, onClose }) => {
  const { t } = useTranslation();

  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const content = t(`projects.items.${project?.slug}`, {
    returnObjects: true,
  });

  const screenshots = project?.screenshots || [];
  const technologies = project?.technologies || [];
  const features = content?.features || [];
  const challenges = content?.challenges || [];
  const solutions = content?.solutions || [];
  const screenshotTitles = content?.screenshots || [];

  const isCompleted = project?.status === "Completed";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setActiveImage(0);
    setLightboxOpen(false);
  }, [project?.slug]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);

      if (event.key === "ArrowRight" && screenshots.length > 1) {
        setActiveImage((current) => (current + 1) % screenshots.length);
      }

      if (event.key === "ArrowLeft" && screenshots.length > 1) {
        setActiveImage(
          (current) => (current - 1 + screenshots.length) % screenshots.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, screenshots.length]);

  if (!project) return null;

  const openImage = (index) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };

  const previousImage = () => {
    setActiveImage(
      (current) => (current - 1 + screenshots.length) % screenshots.length,
    );
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % screenshots.length);
  };

  const projectFacts = [
    {
      icon: FaCalendarAlt,
      label: t("projects.detail.development"),
      value: project.year || "—",
    },
    {
      icon: FaLayerGroup,
      label: t("projects.detail.category"),
      value: content.category || "—",
    },
    {
      icon: FaCode,
      label: t("projects.detail.technology"),
      value: `${technologies.length} ${t("projects.tools")}`,
    },
    {
      icon: FaImage,
      label: t("projects.detail.gallery"),
      value: `${screenshots.length} ${t("projects.screenshots")}`,
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F7F3] text-[#292D27]">
      {/* TOP NAVIGATION */}
      <header className="border-b border-[#E3E2DA] bg-[#F8F7F3]">
        <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={onClose}
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#62665D] transition hover:text-[#A45F45]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCDDD5] bg-white transition group-hover:border-[#A45F45] group-hover:bg-[#F7F0EB]">
              <FaArrowLeft className="text-xs" />
            </span>
            {t("common.backToProjects")}
          </button>

          <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-[#85877E] sm:block">
            Portfolio / {t("projects.detail.projectDetail")}
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-12">
        {/* HERO */}
        <section className="grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:py-14">
          <div className="order-2 lg:order-1">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-[#F0E7E0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#A45F45]">
                {content.category}
              </span>

              {project.status && (
                <span
                  className={`inline-flex items-center gap-2 text-xs font-semibold ${
                    isCompleted ? "text-[#637B5B]" : "text-[#A17B43]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isCompleted ? "bg-[#788B70]" : "bg-[#C69A50]"
                    }`}
                  />
                  {t(isCompleted ? "common.completed" : "common.inDevelopment")}
                </span>
              )}
            </div>

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#85877E]">
              {t("projects.detail.caseStudy")}
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[#242722] sm:text-5xl lg:text-[3.7rem]">
              {project.title}
            </h1>

            {content.subtitle && (
              <p className="mt-4 text-lg font-medium leading-relaxed text-[#788B70] sm:text-xl">
                {content.subtitle}
              </p>
            )}

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#686C63] sm:text-base">
              {content.overview}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#292D27] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#A45F45]"
                >
                  <FaGithub className="text-base" />
                  {t("projects.detail.viewSource")}
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-[#DCDDD5] bg-white px-5 py-3 text-sm font-bold text-[#494D44] transition hover:-translate-y-0.5 hover:border-[#A45F45] hover:text-[#A45F45]"
                >
                  {t("common.liveDemo")}
                  <FaArrowRight className="text-xs" />
                </a>
              )}
            </div>
          </div>

          {/* HERO PREVIEW */}
          <div className="order-1 min-w-0 lg:order-2">
            <div className="relative rounded-2xl border border-[#E1DFD6] bg-white p-2.5 shadow-xl shadow-[#292D27]/[0.06] sm:p-3">
              <button
                type="button"
                onClick={() => screenshots[0]?.src && openImage(0)}
                disabled={!screenshots[0]?.src}
                className="group relative block w-full overflow-hidden rounded-xl bg-[#EAEAE2]"
                aria-label={t("projects.detail.openPreview")}
              >
                {screenshots[0]?.src ? (
                  <img
                    src={screenshots[0].src}
                    alt={screenshotTitles[0] || project.title}
                    className="aspect-[16/10] w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                ) : (
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 text-[#85877E]">
                    <FaLaptopCode className="text-4xl text-[#A45F45]/70" />
                    <span className="text-sm font-medium">
                      {t("projects.previewUnavailable")}
                    </span>
                  </div>
                )}

                {screenshots[0]?.src && (
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#292D27]/80 text-white backdrop-blur-sm transition group-hover:bg-[#A45F45]">
                    <FaExpand className="text-sm" />
                  </span>
                )}
              </button>

              <div className="flex items-center justify-between gap-3 px-2 pt-3">
                <span className="text-xs font-medium text-[#686C63]">
                  {screenshotTitles[0] ||
                    t("projects.detail.applicationInterface")}
                </span>

                <span className="text-[10px] font-bold tracking-widest text-[#A45F45]">
                  {screenshots.length > 0
                    ? `01 / ${String(screenshots.length).padStart(2, "0")}`
                    : "PREVIEW"}
                </span>
              </div>
            </div>

            <p className="mt-2 text-right text-[10px] text-[#A0A197]">
              {t("projects.detail.clickToEnlarge")}
            </p>
          </div>
        </section>

        {/* PROJECT FACTS */}
        <section className="grid grid-cols-2 border-y border-[#DCDDD5] sm:grid-cols-4">
          {projectFacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`flex items-start gap-3 px-3 py-4 sm:px-5 sm:py-5 ${
                  index % 2 === 0
                    ? "border-r border-[#DCDDD5] sm:border-r-0"
                    : ""
                } ${
                  index < 2 ? "border-b border-[#DCDDD5] sm:border-b-0" : ""
                } ${index !== 3 ? "sm:border-r sm:border-[#DCDDD5]" : ""}`}
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0E7E0] text-xs text-[#A45F45]">
                  <Icon />
                </span>

                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#85877E]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#292D27]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* 01 PROJECT OVERVIEW */}
        <section className="grid gap-7 py-10 sm:py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-[#A45F45]">
                01
              </span>
              <span className="h-px w-7 bg-[#C9A797]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#85877E]">
                {t("common.projectOverview")}
              </span>
            </div>

            <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight text-[#242722] sm:text-4xl">
              {t("projects.detail.overviewHeading")}
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#73766D]">
              {t("projects.detail.overviewDescription")}
            </p>
          </div>

          <div className="relative border-l-2 border-[#C9A797] pl-5 sm:pl-7">
            <p className="whitespace-pre-line text-sm leading-8 text-[#55594F] sm:text-base sm:leading-8">
              {content.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#EDEFE8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#687B5F]">
                {content.category}
              </span>
              <span className="rounded-md bg-white px-3 py-1.5 text-[10px] font-semibold text-[#73766D] ring-1 ring-[#E3E2DA]">
                {project.year}
              </span>
            </div>
          </div>
        </section>

        {/* 02 TECHNOLOGY */}
        {technologies.length > 0 && (
          <section className="border-y border-[#DCDDD5] py-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="shrink-0">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-xs font-bold tracking-widest text-[#A45F45]">
                    02
                  </span>
                  <span className="h-px w-7 bg-[#C9A797]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#85877E]">
                    {t("common.technologyStack")}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#242722]">
                  {t("projects.detail.technologyHeading")}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <span
                    key={`${technology}-${index}`}
                    className="rounded-md border border-[#E3E2DA] bg-white px-3.5 py-2 text-xs font-semibold text-[#55594F] transition hover:border-[#C9A797] hover:text-[#A45F45]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 03 FEATURES */}
        {features.length > 0 && (
          <section className="py-10 sm:py-12">
            <SectionHeading
              number="03"
              eyebrow={t("common.keyFeatures")}
              title={t("projects.detail.featuresHeading")}
              description={t("projects.detail.featuresDescription")}
            />

            <div className="grid overflow-hidden rounded-xl border border-[#E3E2DA] bg-white sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className={`group flex items-start gap-4 px-4 py-4 transition-colors hover:bg-[#F7F5F0] sm:px-5 sm:py-5 ${
                    index % 2 === 0 ? "sm:border-r sm:border-[#E3E2DA]" : ""
                  } ${
                    index <
                    features.length - (features.length % 2 === 0 ? 2 : 1)
                      ? "border-b border-[#E3E2DA]"
                      : ""
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#F0E7E0] text-[10px] font-bold text-[#A45F45] transition-colors group-hover:bg-[#A45F45] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="min-w-0 pt-0.5 text-sm font-semibold leading-6 text-[#3D4139] sm:text-[15px]">
                    {feature}
                  </p>

                  <FaCheck className="ml-auto mt-2 shrink-0 text-[10px] text-[#788B70]" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 04 CHALLENGES & SOLUTIONS */}
        {(challenges.length > 0 || solutions.length > 0) && (
          <section className="border-t border-[#DCDDD5] py-10 sm:py-12">
            <SectionHeading
              number="04"
              eyebrow={t("common.developmentProcess")}
              title={t("projects.detail.processHeading")}
              description={t("projects.detail.processDescription")}
            />

            <div className="overflow-hidden rounded-xl border border-[#D8D8CF] bg-white">
              <div className="grid grid-cols-2 bg-[#292D27]">
                <div className="flex items-center gap-2.5 px-4 py-4 sm:px-6">
                  <FaExclamationCircle className="shrink-0 text-sm text-[#D6A28B]" />
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
                    {t("common.challenges")}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 border-l border-white/15 px-4 py-4 sm:px-6">
                  <FaLightbulb className="shrink-0 text-sm text-[#B6C9A9]" />
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
                    {t("common.solutions")}
                  </span>
                </div>
              </div>

              {Array.from({
                length: Math.max(challenges.length, solutions.length),
              }).map((_, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#F8F8F4]"
                  } ${
                    index !== Math.max(challenges.length, solutions.length) - 1
                      ? "border-b border-[#DCDDD5]"
                      : ""
                  }`}
                >
                  <div className="px-4 py-5 sm:px-6 sm:py-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider text-[#A45F45]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-5 bg-[#D8B6A5]" />
                    </div>

                    <p className="text-[13px] font-medium leading-7 text-[#3D4139] sm:text-[15px] sm:leading-7">
                      {challenges[index] || "—"}
                    </p>
                  </div>

                  <div className="border-l border-[#DCDDD5] px-4 py-5 sm:px-6 sm:py-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[11px] font-bold tracking-wider text-[#788B70]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-5 bg-[#B7C3AF]" />
                    </div>

                    <p className="text-[13px] font-medium leading-7 text-[#3D4139] sm:text-[15px] sm:leading-7">
                      {solutions[index] || "—"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 05 SCREENSHOT GALLERY */}
        {screenshots.length > 0 && (
          <section className="border-t border-[#DCDDD5] py-10 sm:py-12">
            <SectionHeading
              number="05"
              eyebrow={t("common.applicationShowcase")}
              title={t("projects.detail.galleryHeading")}
              description={t("projects.detail.galleryDescription")}
            />

            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#73766D]">
                {t("projects.detail.screenshotLabel")}
              </span>
              <span className="text-xs font-bold text-[#A45F45]">
                {String(screenshots.length).padStart(2, "0")}{" "}
                {t("projects.detail.images")}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {screenshots.map((screenshot, index) => (
                <button
                  key={`${screenshot.src}-${index}`}
                  type="button"
                  onClick={() => openImage(index)}
                  className="group overflow-hidden rounded-xl border border-[#E3E2DA] bg-white text-left transition duration-300 hover:-translate-y-1 hover:border-[#C9A797] hover:shadow-lg hover:shadow-[#292D27]/[0.06]"
                >
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#ECECE5] p-2 sm:p-3">
                    {screenshot.src ? (
                      <img
                        src={screenshot.src}
                        alt={
                          screenshotTitles[index] || `Screenshot ${index + 1}`
                        }
                        loading="lazy"
                        className="h-full w-full rounded-md object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-[#85877E]">
                        <FaLaptopCode className="text-3xl" />
                        <span className="text-xs">
                          {t("projects.previewUnavailable")}
                        </span>
                      </div>
                    )}

                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#292D27]/80 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                      <FaExpand className="text-[10px]" />
                    </span>
                  </div>

                  <div className="flex min-h-14 items-center justify-between gap-3 px-4 py-3">
                    <span className="text-xs font-semibold leading-5 text-[#494D44] sm:text-sm">
                      {screenshotTitles[index] ||
                        `${t("projects.detail.screenshot")} ${index + 1}`}
                    </span>

                    <span className="shrink-0 text-[10px] font-bold tracking-wider text-[#A45F45]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CLOSING CTA */}
        <section className="mb-10 mt-2 overflow-hidden rounded-2xl bg-[#292D27] px-6 py-8 sm:px-9 sm:py-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6A28B]">
                {t("projects.detail.closingEyebrow")}
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t("projects.detail.closingTitle")}
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/65">
                {t("projects.detail.closingDescription")}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-[#292D27]"
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
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#A45F45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#BD795B]"
                >
                  {t("common.liveDemo")}
                  <FaArrowRight className="text-xs" />
                </a>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && screenshots[activeImage] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171914]/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t("projects.detail.imagePreview")}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label={t("projects.detail.closePreview")}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#A45F45]"
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
                aria-label={t("projects.detail.previousImage")}
                className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#A45F45] sm:left-8"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                aria-label={t("projects.detail.nextImage")}
                className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#A45F45] sm:right-8"
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
              alt={screenshotTitles[activeImage] || project.title}
              className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-2xl"
            />

            <div className="mt-5 flex w-full max-w-5xl items-center justify-between gap-4 text-sm">
              <span className="font-medium text-white">
                {screenshotTitles[activeImage] || project.title}
              </span>

              <span className="shrink-0 text-xs text-white/60">
                {String(activeImage + 1).padStart(2, "0")} /{" "}
                {String(screenshots.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDetail;
