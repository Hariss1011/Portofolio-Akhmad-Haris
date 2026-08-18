import { useState } from "react";
import {
  FaGithub,
  FaArrowRight,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";

const ProjectCard = ({ project, featured = false, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);
  return (
    <article
      className={`
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.06]

        shadow-sm

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-blue-500/25
        hover:shadow-2xl
        hover:shadow-blue-500/10

        ${featured ? "grid lg:grid-cols-2" : "flex flex-col"}
      `}
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div
        className={`
          relative
          overflow-hidden

          bg-white/5

          ${
            featured
              ? "h-[280px] sm:h-[360px] lg:h-full lg:min-h-[460px]"
              : "aspect-[16/10]"
          }
        `}
      >
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl text-blue-300">
              <FaLaptopCode />
            </div>
            <p className="px-6 text-center text-sm font-semibold text-slate-500">
              Preview coming soon
            </p>
          </div>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            onError={() => setImageError(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Dark Gradient */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-t
            from-slate-950/60
            via-transparent
            to-transparent
          "
        />

        {/* Category */}

        <div
          className="
            absolute
            left-5
            top-5
          "
        >
          <span
            className="
              inline-flex
              items-center

              rounded-full

              border
              border-white/20

              bg-slate-950/70

              px-3
              py-1.5

              text-xs
              font-bold

              text-white

              backdrop-blur-md
            "
          >
            {project.category}
          </span>
        </div>

        {/* Status */}

        <div
          className="
            absolute
            right-5
            top-5
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-white/5

              px-3
              py-1.5

              text-xs
              font-bold

              text-emerald-300

              shadow-lg
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
          </span>
        </div>

        {/* Image Bottom Info */}

        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
          "
        >
          <p
            className="
              text-xs
              font-semibold

              text-white/70
            "
          >
            {project.year}
          </p>

          <h4
            className="
              mt-1

              text-lg
              font-bold

              text-white

              sm:text-xl
            "
          >
            {project.title}
          </h4>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className={`
          flex
          min-w-0
          flex-col

          p-6
          sm:p-8

          ${featured ? "justify-center lg:p-10" : ""}
        `}
      >
        {/* Small Label */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <span
            className="
              h-2
              w-2

              rounded-full

              bg-blue-600
            "
          />

          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]

              text-blue-300
            "
          >
            {featured ? "Featured Project" : "Project"}
          </span>
        </div>

        {/* Title */}

        <h3
          className={`
            mt-4

            font-black
            tracking-tight

            text-white

            ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}
          `}
        >
          {project.title}
        </h3>

        {/* Overview */}

        <p
          className="
            mt-4

            text-sm
            leading-7

            text-slate-400

            sm:text-base
          "
        >
          {project.overview}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================== */}

        <div className="mt-6">
          <p
            className="
              mb-3

              text-xs
              font-bold
              uppercase
              tracking-wider

              text-slate-500
            "
          >
            Technology
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-2
            "
          >
            {project.technologies
              ?.slice(0, featured ? 6 : 5)
              .map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-lg

                    border
                    border-white/10

                    bg-white/5

                    px-3
                    py-1.5

                    text-xs
                    font-semibold

                    text-slate-300

                    transition-all
                    duration-300

                    group-hover:border-blue-500/25
                    group-hover:bg-blue-500/10
                  "
                >
                  {technology}
                </span>
              ))}
          </div>
        </div>

        {/* Divider */}

        <div
          className="
            my-7

            h-px

            bg-white/5
          "
        />

        {/* =================================================
            ACTIONS
        ================================================== */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          {/* View Details */}

          <button
            type="button"
            onClick={onViewDetails}
            className="
              group/button

              inline-flex
              items-center
              justify-center
              gap-2

              rounded-xl

              bg-blue-600

              px-5
              py-3

              text-sm
              font-bold

              text-white

              shadow-lg
              shadow-blue-500/20

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-blue-700
              hover:shadow-xl
            "
          >
            View Details
            <FaArrowRight
              className="
                text-xs

                transition-transform
                duration-300

                group-hover/button:translate-x-1
              "
            />
          </button>

          {/* GitHub */}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
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

                text-slate-300

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-white/15
                hover:bg-white/5
                hover:text-white
              "
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {/* Demo */}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl

                px-3
                py-3

                text-sm
                font-semibold

                text-slate-500

                transition-colors
                duration-300

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
