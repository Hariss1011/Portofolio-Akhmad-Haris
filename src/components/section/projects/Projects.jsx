import { useNavigate } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";
import Reveal from "../../common/Reveal";

import projects from "../../../data/projects";

import { FaArrowRight, FaLayerGroup, FaRegFolderOpen } from "react-icons/fa";

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
      className="relative overflow-hidden bg-[#F8F7F3] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* SECTION INTRO */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#A45F45]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A45F45]">
                  Portfolio / Selected Work
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#242722] sm:text-5xl lg:text-[3.5rem]">
                Building solutions
                <br className="hidden sm:block" /> through meaningful projects.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#62665D] sm:text-base">
                A collection of web applications and information systems
                developed through practical experience, academic work, and
                continuous learning. Each project reflects my approach to
                solving problems through technology.
              </p>
            </div>

            <div className="flex items-center gap-5 border-t border-[#DCDDD5] pt-5 lg:justify-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="text-4xl font-bold tracking-tight text-[#242722]">
                  {String(projects.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#85877E]">
                  Total Projects
                </p>
              </div>

              <div className="h-11 w-px bg-[#DCDDD5]" />

              <div>
                <p className="text-4xl font-bold tracking-tight text-[#242722]">
                  2025<span className="text-[#A45F45]">—</span>26
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#85877E]">
                  Development Period
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* PROJECT COLLECTION LABEL */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex items-center justify-between border-y border-[#DCDDD5] py-4 sm:mt-16">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAEAE2] text-[#A45F45]">
                <FaLayerGroup className="text-sm" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#292D27]">
                  Project Showcase
                </p>
                <p className="mt-0.5 text-xs text-[#85877E]">
                  Selected development work
                </p>
              </div>
            </div>

            <span className="hidden text-xs font-medium text-[#85877E] sm:block">
              Explore my work and implementations
            </span>
          </div>
        </Reveal>

        {/* FEATURED PROJECTS */}
        {featuredProjects.length > 0 && (
          <div className="mt-14 sm:mt-16">
            <Reveal>
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A45F45]">
                    01 / Featured Collection
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight text-[#242722] sm:text-3xl">
                    Featured Projects
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-6 text-[#73766D] sm:text-right">
                  Core projects showcasing my experience in application
                  development, database management, and information systems.
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

        {/* ADDITIONAL PROJECTS */}
        {otherProjects.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <Reveal>
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#788B70]">
                    02 / Additional Collection
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight text-[#242722] sm:text-3xl">
                    More Projects
                  </h3>
                </div>

                <p className="max-w-md text-sm leading-6 text-[#73766D] sm:text-right">
                  Other applications and systems built through academic projects
                  and independent development.
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
          <div className="mt-12 rounded-2xl border border-[#DCDDD5] bg-white px-6 py-16 text-center">
            <FaRegFolderOpen className="mx-auto text-3xl text-[#A45F45]" />
            <p className="mt-4 text-sm font-semibold text-[#292D27]">
              No projects available yet.
            </p>
            <p className="mt-1 text-xs text-[#85877E]">
              Projects will be displayed here soon.
            </p>
          </div>
        )}

        {/* BOTTOM CTA */}
        <Reveal>
          <div className="mt-16 border-t border-[#DCDDD5] pt-7 sm:mt-20 sm:pt-8">
            <a
              href="#contact"
              className="group flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-bold text-[#292D27] transition-colors group-hover:text-[#A45F45]">
                  Have a project or opportunity in mind?
                </p>
                <p className="mt-1 text-sm text-[#73766D]">
                  I would be glad to discuss how I can contribute.
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-3 text-sm font-bold text-[#A45F45] transition-all duration-300 group-hover:gap-5">
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
