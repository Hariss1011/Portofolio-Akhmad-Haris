import { useState } from "react";
import {
  FaGithub,
  FaArrowRight,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";

const ProjectCard = ({ project, featured = false, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);

  const isCompleted = project.status === "Completed";

  return (
    <article
      className={`
        group relative flex min-w-0 flex-col overflow-hidden
        rounded-3xl border border-white/10
        bg-slate-900/70
        shadow-lg shadow-black/10
        transition-all duration-500
        hover:-translate-y-2
        hover:border-blue-500/30
        hover:shadow-2xl hover:shadow-blue-500/10
        ${featured ? "lg:grid lg:grid-cols-[1.05fr_0.95fr]" : ""}
      `}
    >
      {/* PROJECT COVER */}
      <div
        className={`
          relative overflow-hidden bg-slate-950
          ${featured ? "aspect-[16/9] lg:aspect-auto lg:min-h-[390px]" : "aspect-[16/9]"}
        `}
      >
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-950 to-slate-950">
            <FaLaptopCode className="text-4xl text-blue-400" />
            <span className="text-sm font-semibold text-slate-400">
              Project Preview
            </span>
          </div>
        ) : (
          <img
            src={project.thumbnail}
            alt={`${project.title} project cover`}
            onError={() => setImageError(true)}
            className="
              absolute inset-0 h-full w-full
              object-contain
              transition-transform duration-700
              group-hover:scale-[1.03]
            "
          />
        )}

        {/* COVER OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

        {/* CATEGORY */}
        <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
          <span className="inline-flex rounded-full border border-white/15 bg-slate-950/75 px-3 py-1.5 text-[10px] font-bold text-white shadow-lg backdrop-blur-md sm:text-xs">
            {project.category}
          </span>
        </div>

        {/* STATUS */}
        <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
          <span
            className={`
              inline-flex items-center gap-2 rounded-full
              border px-3 py-1.5 text-[10px] font-bold
              shadow-lg backdrop-blur-md sm:text-xs
              ${
                isCompleted
                  ? "border-emerald-400/20 bg-emerald-950/75 text-emerald-300"
                  : "border-amber-400/20 bg-amber-950/75 text-amber-300"
              }
            `}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isCompleted ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            {project.status}
          </span>
        </div>

        {/* COVER TITLE */}
        <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6">
          <p className="text-xs font-semibold text-white/70">{project.year}</p>
          <h4 className="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl">
            {project.title}
          </h4>
        </div>
      </div>

      {/* PROJECT CONTENT */}
      <div
        className={`
          flex min-w-0 flex-1 flex-col p-6 sm:p-8
          ${featured ? "justify-center lg:p-9" : ""}
        `}
      >
        {/* LABEL */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300 sm:text-xs">
            {featured ? "Featured Project" : "Portfolio Project"}
          </span>
        </div>

        {/* TITLE */}
        <h3
          className={`
            mt-4 font-black tracking-tight text-white
            ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}
          `}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-blue-300">
          {project.subtitle}
        </p>

        {/* OVERVIEW */}
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          {project.overview}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-6">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
            Technology Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies
              ?.slice(0, featured ? 6 : 5)
              .map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-lg border border-white/10
                    bg-white/[0.04] px-3 py-1.5
                    text-xs font-semibold text-slate-300
                    transition-colors duration-300
                    group-hover:border-blue-500/20
                  "
                >
                  {technology}
                </span>
              ))}
          </div>
        </div>

        {/* SCREENSHOT COUNT */}
        <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
          <FaLaptopCode className="text-blue-400" />
          {project.screenshots?.length || 0} application screenshots
        </div>

        <div className="my-6 h-px bg-white/10" />

        {/* ACTIONS */}
        <div className="mt-auto flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onViewDetails}
            className="
              group/button inline-flex items-center justify-center gap-2
              rounded-xl bg-blue-600 px-5 py-3
              text-sm font-bold text-white
              shadow-lg shadow-blue-600/20
              transition-all duration-300
              hover:-translate-y-1 hover:bg-blue-500
              hover:shadow-xl hover:shadow-blue-500/20
            "
          >
            View Details
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover/button:translate-x-1" />
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl border border-white/10
                bg-white/[0.04] px-5 py-3
                text-sm font-bold text-slate-300
                transition-all duration-300
                hover:-translate-y-1 hover:border-white/20
                hover:bg-white/[0.08] hover:text-white
              "
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="
                inline-flex items-center gap-2
                px-2 py-3 text-sm font-semibold
                text-slate-400 transition-colors
                hover:text-blue-300
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
