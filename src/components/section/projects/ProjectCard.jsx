import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  FaGithub,
  FaArrowRight,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";

const ProjectCard = ({ project, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);
  const { t } = useTranslation();

  const content = t(`projects.items.${project.slug}`, {
    returnObjects: true,
  });

  const isCompleted = project.status === "Completed";
  const technologies = project.technologies || [];
  const visibleTechnologies = technologies.slice(0, 4);
  const remainingTechnologies =
    technologies.length - visibleTechnologies.length;

  return (
    <article
      className="
        group flex h-full min-w-0 flex-col overflow-hidden
        rounded-2xl border border-[#E3E2DA]
        bg-white transition-all duration-300
        hover:-translate-y-1 hover:border-[#C9B7AA]
        hover:shadow-xl hover:shadow-[#292D27]/[0.07]
      "
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAEAE2]">
        {!imageError ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} project preview`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="
              absolute inset-0 h-full w-full object-cover object-center
              transition-transform duration-700 ease-out
              group-hover:scale-[1.035]
            "
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#EAEAE2]">
            <FaLaptopCode className="text-4xl text-[#A45F45]/70" />
            <span className="text-xs font-medium text-[#85877E]">
              {t("projects.previewUnavailable")}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#242722]/25 via-transparent to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="inline-flex max-w-[220px] items-center rounded-md border border-white/70 bg-[#F8F7F3]/95 px-3 py-1.5 text-[10px] font-bold text-[#494D44] shadow-sm backdrop-blur-sm sm:text-[11px]">
            {content.category}
          </span>
        </div>

        <div className="absolute right-4 top-4">
          <span
            className={`
              inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5
              text-[10px] font-bold shadow-sm backdrop-blur-sm sm:text-[11px]
              ${
                isCompleted
                  ? "border-[#C8D5C3] bg-[#F0F4ED]/95 text-[#58704F]"
                  : "border-[#E8D7B8] bg-[#FBF4E7]/95 text-[#96713D]"
              }
            `}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isCompleted ? "bg-[#788B70]" : "bg-[#C69A50]"
              }`}
            />
            {t(isCompleted ? "common.completed" : "common.inDevelopment")}
          </span>
        </div>

        <div className="absolute bottom-4 left-4">
          <span className="rounded-md bg-[#242722]/70 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A45F45]">
            {t("common.projectOverview")}
          </p>

          <h3 className="text-xl font-bold leading-snug tracking-tight text-[#292D27] transition-colors duration-300 group-hover:text-[#A45F45] sm:text-[22px]">
            {project.title}
          </h3>

          {content.subtitle && (
            <p className="mt-1.5 text-sm font-medium leading-6 text-[#788B70]">
              {content.subtitle}
            </p>
          )}
        </div>

        <p className="mt-4 line-clamp-3 min-h-[72px] text-[13px] leading-6 text-[#686C63] sm:text-sm">
          {content.overview}
        </p>

        <div className="mt-5">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#85877E]">
              {t("common.technologyStack")}
            </p>
            <span className="text-[10px] font-medium text-[#A0A197]">
              {technologies.length} {t("projects.tools")}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-md border border-[#E6E5DE] bg-[#F8F7F3]
                  px-2.5 py-1.5 text-[10px] font-semibold text-[#55594F]
                  sm:text-[11px]
                "
              >
                {technology}
              </span>
            ))}

            {remainingTechnologies > 0 && (
              <span className="rounded-md border border-[#D8C5B9] bg-[#F7F0EB] px-2.5 py-1.5 text-[10px] font-bold text-[#A45F45] sm:text-[11px]">
                +{remainingTechnologies}
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <div className="mb-4 flex items-center gap-2 text-[11px] text-[#85877E]">
            <FaLaptopCode className="text-[#A45F45]" />
            <span>
              {project.screenshots?.length || 0} {t("projects.screenshots")}
            </span>
          </div>

          <div className="h-px bg-[#E9E8E1]" />

          <div className="flex items-center gap-2.5 pt-4">
            <button
              type="button"
              onClick={onViewDetails}
              className="
                group/button inline-flex min-w-0 flex-1 items-center
                justify-center gap-2 rounded-lg bg-[#292D27] px-4 py-3
                text-xs font-bold text-white transition-all duration-300
                hover:bg-[#A45F45] focus:outline-none
                focus-visible:ring-2 focus-visible:ring-[#A45F45]
                focus-visible:ring-offset-2 sm:text-sm
              "
            >
              {t("common.viewDetails")}
              <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/button:translate-x-1" />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="
                  inline-flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-lg border border-[#E3E2DA] bg-white text-[#55594F]
                  transition-all duration-300 hover:border-[#292D27]
                  hover:bg-[#292D27] hover:text-white
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[#A45F45]
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
                  inline-flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-lg border border-[#E3E2DA] bg-white text-[#55594F]
                  transition-all duration-300 hover:border-[#A45F45]
                  hover:bg-[#F7F0EB] hover:text-[#A45F45]
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[#A45F45]
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
