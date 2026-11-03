import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import ToolBadge from "./ToolBadge";
import { skillCategories, tools } from "../../../data/skills";

const Skills = () => {
  const { t } = useTranslation();

  const translatedCategories = skillCategories.map((category) => ({
    ...category,
    title: t(`skills.categories.${category.key}.title`),
    description: t(`skills.categories.${category.key}.description`),
    skills: category.skills.map((skill) => ({
      ...skill,
      name: t(`skills.items.${skill.key}`),
    })),
  }));

  return (
    <section id="skills" className="bg-[#F8F7F3] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div className="mb-9 sm:mb-11">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A45F45]">
            {t("skills.eyebrow")}
          </p>

          <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-bold tracking-tight text-[#242722] sm:text-4xl">
              {t("skills.title")}
            </h2>

            <p className="max-w-md text-sm leading-6 text-[#62665D]">
              {t("skills.description")}
            </p>
          </div>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          {translatedCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
            >
              <SkillCard category={category} index={index} />
            </motion.div>
          ))}
        </div>

        {/* DEVELOPMENT TOOLS */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#E4E3DC] bg-white">
          <div className="flex flex-col gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:gap-10">
            {/* TOOLS INTRO */}
            <div className="shrink-0 lg:w-64">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEE5DF] text-[#A45F45]">
                  <span className="text-lg font-bold">&lt;/&gt;</span>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A45F45]">
                    {t("skills.workspace")}
                  </p>
                  <h3 className="mt-0.5 text-lg font-bold tracking-tight text-[#242722]">
                    {t("skills.toolsTitle")}
                  </h3>
                </div>
              </div>

              <p className="mt-2 text-xs leading-5 text-[#74776E]">
                {t("skills.toolsDescription")}
              </p>
            </div>

            {/* TOOL LIST */}
            <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                >
                  <ToolBadge tool={tool} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
