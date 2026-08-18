import { useState } from "react";

import SectionTitle from "../../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import projects from "../../../data/projects";

import { FaLayerGroup, FaArrowDown } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  /*
   * =========================================
   * PROJECT DETAIL VIEW
   * =========================================
   */

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    );
  }

  /*
   * =========================================
   * PROJECT DATA
   * =========================================
   */

  const featuredProject = projects[0];

  const otherProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden

        bg-[#05070d]

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
            -left-40
            top-0

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
            bottom-0

            h-96
            w-96

            rounded-full

            bg-cyan-500/50

            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0

            opacity-[0.025]

            [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]

            [background-size:40px_40px]
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
            subtitle="Projects"
            title="Selected work & projects"
            description="
              A selection of projects that showcase my
              experience in web development, information
              systems, database management, and problem
              solving.
            "
          />
        </Reveal>

        {/* =======================================
            FEATURED PROJECT
        ======================================== */}

        {featuredProject && (
          <Reveal className="mt-14">
            {/* Label */}

            <div
              className="
                mb-5

                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-xl

                  bg-blue-600

                  text-white

                  shadow-lg
                  shadow-blue-500/20
                "
              >
                <FaLayerGroup className="text-sm" />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]

                    text-blue-300
                  "
                >
                  Featured Project
                </p>

                <p
                  className="
                    mt-0.5

                    text-sm

                    text-slate-400
                  "
                >
                  My highlighted work
                </p>
              </div>
            </div>

            {/* Project Card */}

            <ProjectCard
              project={featuredProject}
              featured
              onViewDetails={() => setSelectedProject(featuredProject)}
            />
          </Reveal>
        )}

        {/* =======================================
            OTHER PROJECTS
        ======================================== */}

        {otherProjects.length > 0 && (
          <div className="mt-20">
            <Reveal
              className="
                mb-8

                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]

                    text-slate-500
                  "
                >
                  More Work
                </p>

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
                  Other Projects
                </h3>
              </div>

              <p
                className="
                  max-w-md

                  text-sm
                  leading-6

                  text-slate-400

                  sm:text-right
                "
              >
                Other projects and experiments that I have worked on during my
                learning and development journey.
              </p>
            </Reveal>

            {/* Grid */}

            <StaggerContainer
              className="
                grid
                gap-7

                md:grid-cols-2
              "
              stagger={0.12}
            >
              {otherProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard
                    project={project}
                    onViewDetails={() => setSelectedProject(project)}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* =======================================
            EMPTY STATE
        ======================================== */}

        {projects.length === 1 && (
          <div
            className="
              mt-10

              flex
              justify-center
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-3

                rounded-full

                border
                border-white/10

                bg-white/[0.06]

                px-5
                py-3

                text-sm
                font-medium

                text-slate-400

                shadow-sm
              "
            >
              <span
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-blue-500
                "
              />
              More projects will be added soon.
            </div>
          </div>
        )}

        {/* =======================================
            CONTACT CTA
        ======================================== */}

        <div
          className="
            mt-16

            flex
            justify-center
          "
        >
          <a
            href="#contact"
            className="
              group

              inline-flex
              flex-col
              items-center
              gap-2

              text-xs
              font-semibold

              text-slate-500

              transition-colors
              duration-300

              hover:text-blue-300
            "
          >
            <span>Interested in working together?</span>

            <span
              className="
                flex
                h-8
                w-8

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/[0.06]

                shadow-sm

                transition-all
                duration-300

                group-hover:-translate-y-1
                group-hover:border-blue-500/25
                group-hover:text-blue-300
              "
            >
              <FaArrowDown className="text-xs" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
