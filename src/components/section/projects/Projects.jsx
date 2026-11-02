import { useNavigate } from "react-router-dom";

import SectionTitle from "../../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import projects from "../../../data/projects";

import { FaArrowRight, FaLayerGroup } from "react-icons/fa";

const Projects = () => {
  const navigate = useNavigate();

  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  const handleViewDetails = (project) => {
    sessionStorage.setItem("projectsScrollPosition", String(window.scrollY));

    navigate(`/projects/${project.slug}`, {
      state: {
        fromProjects: true,
      },
    });
  };

  return (
    <section
      id="projects"
      className="
        relative isolate overflow-hidden
        bg-[#070a14]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute -left-48 top-20
            h-[420px] w-[420px]
            rounded-full bg-blue-600/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute -right-48 top-[45%]
            h-[420px] w-[420px]
            rounded-full bg-cyan-500/[0.08]
            blur-[120px]
          "
        />

        <div
          className="
            absolute inset-0 opacity-[0.025]
            [background-image:linear-gradient(#64748b_1px,transparent_1px),linear-gradient(90deg,#64748b_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* SECTION INTRO */}
        <Reveal>
          <div className="max-w-3xl">
            <SectionTitle
              subtitle="Portfolio / Selected Work"
              title="Projects that turn ideas into solutions."
              description="
                A collection of web applications and information
                systems I've developed, focusing on practical
                functionality, structured data, and user-oriented
                solutions.
              "
            />
          </div>
        </Reveal>

        {/* PROJECT OVERVIEW */}
        <Reveal delay={0.1}>
          <div
            className="
              mt-10 flex flex-col gap-5
              border-y border-white/[0.08]
              py-5
              sm:flex-row sm:items-center sm:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-blue-400/15
                  bg-blue-500/10 text-blue-300
                "
              >
                <FaLayerGroup className="text-sm" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Selected Projects
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  A closer look at my development work
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 sm:gap-8">
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">
                  {String(projects.length).padStart(2, "0")}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Projects
                </p>
              </div>

              <div className="h-9 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-bold tracking-tight text-white">
                  2025–26
                </p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Development
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FEATURED PROJECTS */}
        {featuredProjects.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <Reveal>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
                      Featured Work
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Selected Projects
                  </h3>
                </div>

                <p className="max-w-sm text-sm leading-6 text-slate-500 sm:text-right">
                  A selection of projects that highlight my experience in
                  building web-based systems and managing application data.
                </p>
              </div>
            </Reveal>

            <StaggerContainer
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              stagger={0.1}
            >
              {featuredProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard
                    project={project}
                    onViewDetails={() => handleViewDetails(project)}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* OTHER PROJECTS */}
        {otherProjects.length > 0 && (
          <div className="mt-20 sm:mt-24">
            <Reveal>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                      Additional Work
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    More Projects
                  </h3>
                </div>

                <p className="max-w-sm text-sm leading-6 text-slate-500 sm:text-right">
                  Other applications developed through academic work and
                  continuous learning.
                </p>
              </div>
            </Reveal>

            <StaggerContainer
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              stagger={0.1}
            >
              {otherProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard
                    project={project}
                    onViewDetails={() => handleViewDetails(project)}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* EMPTY STATE */}
        {projects.length === 0 && (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
            <FaLayerGroup className="mx-auto text-3xl text-slate-600" />
            <p className="mt-4 text-sm text-slate-400">
              Projects will be displayed here soon.
            </p>
          </div>
        )}

        {/* BOTTOM CTA */}
        <Reveal>
          <div className="mt-20 border-t border-white/[0.08] pt-8 sm:mt-24">
            <a
              href="#contact"
              className="
                group flex flex-col gap-4
                sm:flex-row sm:items-center sm:justify-between
              "
            >
              <div>
                <p className="text-sm font-semibold text-white transition-colors group-hover:text-blue-300">
                  Have a project or opportunity in mind?
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Let's discuss how we can build something meaningful.
                </p>
              </div>

              <span
                className="
                  inline-flex w-fit items-center gap-3
                  text-sm font-semibold text-blue-300
                  transition-all duration-300
                  group-hover:gap-4
                "
              >
                Get in touch
                <FaArrowRight className="text-xs" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
