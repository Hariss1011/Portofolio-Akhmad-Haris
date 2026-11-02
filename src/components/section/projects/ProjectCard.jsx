import { useState } from "react";

import {
  FaGithub,
  FaArrowRight,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";

const ProjectCard = ({ project, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);

  const isCompleted = project.status === "Completed";
  const technologies = project.technologies || [];
  const visibleTechnologies = technologies.slice(0, 4);
  const remainingTechnologies =
    technologies.length - visibleTechnologies.length;

  return (
    <article
      className="
        group relative flex h-full min-w-0 flex-col
        overflow-hidden rounded-2xl
        border border-white/[0.08]
        bg-[#0c1220]
        shadow-lg shadow-black/10
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-blue-400/25
        hover:shadow-2xl hover:shadow-blue-950/30
      "
    >
      {/* PROJECT IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#080e1a]">
        {!imageError ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} project preview`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="
              absolute inset-0 h-full w-full
              object-cover object-center
              transition-transform duration-700
              ease-out
              group-hover:scale-[1.045]
            "
          />
        ) : (
          <div
            className="
              absolute inset-0 flex flex-col
              items-center justify-center gap-3
              bg-gradient-to-br from-blue-950 via-[#101b31] to-[#080e1a]
            "
          >
            <FaLaptopCode className="text-4xl text-blue-400/80" />
            <span className="text-xs font-medium tracking-wide text-slate-500">
              Project Preview
            </span>
          </div>
        )}

        {/* IMAGE OVERLAY */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-[#080e1a]/70 via-transparent to-black/20
            opacity-80
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        {/* CATEGORY */}
        <div className="absolute left-4 top-4 z-10">
          <span
            className="
              inline-flex max-w-[220px] items-center
              rounded-lg border border-white/15
              bg-[#080e1a]/80 px-3 py-1.5
              text-[10px] font-semibold
              leading-4 text-slate-200
              shadow-lg backdrop-blur-md
              sm:text-[11px]
            "
          >
            {project.category}
          </span>
        </div>

        {/* STATUS */}
        <div className="absolute right-4 top-4 z-10">
          <span
            className={`
              inline-flex items-center gap-1.5
              rounded-lg border px-2.5 py-1.5
              text-[10px] font-semibold
              shadow-lg backdrop-blur-md
              sm:text-[11px]
              ${
                isCompleted
                  ? "border-emerald-400/20 bg-emerald-950/80 text-emerald-300"
                  : "border-amber-400/20 bg-amber-950/80 text-amber-300"
              }
            `}
          >
            <span
              className={`
                h-1.5 w-1.5 rounded-full
                ${isCompleted ? "bg-emerald-400" : "bg-amber-400"}
              `}
            />
            {project.status}
          </span>
        </div>

        {/* YEAR */}
        <div className="absolute bottom-4 left-5 z-10">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-white/80">
            {project.year}
          </span>
        </div>

        {/* IMAGE HOVER ACCENT */}
        <div
          className="
            pointer-events-none absolute inset-x-0 bottom-0
            h-1 bg-gradient-to-r
            from-blue-500 via-cyan-400 to-blue-500
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
        />
      </div>

      {/* PROJECT INFORMATION */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* PROJECT TITLE */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">
              Portfolio Project
            </span>
          </div>

          <h3
            className="
              text-xl font-bold tracking-tight text-white
              transition-colors duration-300
              group-hover:text-blue-100
              sm:text-2xl
            "
          >
            {project.title}
          </h3>

          <p className="mt-1.5 text-sm font-medium leading-6 text-blue-300/90">
            {project.subtitle}
          </p>
        </div>

        {/* OVERVIEW */}
        <p className="mt-4 line-clamp-3 min-h-[72px] text-[13px] leading-6 text-slate-400 sm:text-sm">
          {project.overview || project.description}
        </p>

        {/* TECHNOLOGY STACK */}
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
              Tech Stack
            </p>

            <span className="text-[10px] text-slate-600">
              {technologies.length} technologies
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-md border border-white/[0.08]
                  bg-white/[0.035] px-2.5 py-1.5
                  text-[10px] font-medium text-slate-300
                  transition-colors duration-300
                  group-hover:border-blue-400/15
                  sm:text-[11px]
                "
              >
                {technology}
              </span>
            ))}

            {remainingTechnologies > 0 && (
              <span
                className="
                  rounded-md border border-blue-400/15
                  bg-blue-500/[0.07] px-2.5 py-1.5
                  text-[10px] font-semibold text-blue-300
                  sm:text-[11px]
                "
              >
                +{remainingTechnologies}
              </span>
            )}
          </div>
        </div>

        {/* PROJECT FOOTER */}
        <div className="mt-auto pt-6">
          {/* SCREENSHOT INFORMATION */}
          <div className="mb-5 flex items-center gap-2 text-[11px] text-slate-500">
            <FaLaptopCode className="text-blue-400/80" />
            <span>
              {project.screenshots?.length || 0} application screenshots
            </span>
          </div>

          <div className="h-px bg-white/[0.08]" />

          {/* ACTIONS */}
          <div className="flex items-center gap-3 pt-5">
            <button
              type="button"
              onClick={onViewDetails}
              className="
                group/button inline-flex min-w-0 flex-1
                items-center justify-center gap-2
                rounded-xl bg-blue-600
                px-4 py-3
                text-xs font-bold text-white
                shadow-lg shadow-blue-600/15
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-blue-500
                hover:shadow-blue-500/25
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-blue-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#0c1220]
                sm:text-sm
              "
            >
              View Details
              <FaArrowRight
                className="
                  text-[10px]
                  transition-transform duration-300
                  group-hover/button:translate-x-1
                "
              />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="
                  inline-flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-xl border border-white/10
                  bg-white/[0.035]
                  text-slate-300
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:text-white
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-blue-400
                "
              >
                <FaGithub className="text-base" />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="
                  inline-flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-xl border border-white/10
                  bg-white/[0.035]
                  text-slate-300
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-400/25
                  hover:bg-blue-500/10
                  hover:text-blue-300
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-blue-400
                "
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
