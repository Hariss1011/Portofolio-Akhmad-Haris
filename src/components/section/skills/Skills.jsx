import SectionTitle from "../../common/SectionTitle";
import SkillCard from "./SkillCard";
import ToolBadge from "./ToolBadge";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import { skillCategories, tools } from "../../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-[#070a14]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionTitle
            subtitle="My Skills"
            title="Technologies & Tools I Work With"
            description="I use various technologies to build modern web applications, manage databases, and continuously develop my skills in data analytics."
          />
        </Reveal>

        {/* ================= Skill Categories ================= */}

        <StaggerContainer
          className="grid lg:grid-cols-2 gap-8 mt-16"
          stagger={0.15}
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <SkillCard category={category} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ================= Tools ================= */}

        <div className="mt-20">
          <Reveal className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-100">
              Development Tools
            </h3>

            <p className="text-slate-400 mt-3">
              Tools and software that I use during development.
            </p>
          </Reveal>

          <StaggerContainer
            className="
                        flex
                        flex-wrap
                        justify-center
                        gap-4
                        "
            stagger={0.04}
          >
            {tools.map((tool) => (
              <StaggerItem key={tool} y={14}>
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
