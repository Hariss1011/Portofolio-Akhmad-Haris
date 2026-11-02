import SectionTitle from "../../common/SectionTitle";
import SkillCard from "./SkillCard";
import ToolBadge from "./ToolBadge";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import { skillCategories, tools } from "../../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070a14] py-24 sm:py-28"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <Reveal>
          <SectionTitle
            subtitle="My Skills"
            title="Technologies & Tools I Work With"
            description="Technologies and tools I use to develop web applications, work with databases, and support data-driven solutions."
          />
        </Reveal>

        {/* Skill Categories */}
        <StaggerContainer
          className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-7"
          stagger={0.12}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.title} className="h-full">
              <SkillCard category={category} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Development Tools */}
        <div className="mt-20 border-t border-white/[0.08] pt-16 sm:mt-24 sm:pt-20">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              My Workspace
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Development Tools
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Software and tools that support my daily development workflow.
            </p>
          </Reveal>

          <StaggerContainer
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            stagger={0.04}
          >
            {tools.map((tool) => (
              <StaggerItem key={tool} y={12}>
                <ToolBadge tool={tool} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;
