import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLightbulb, FaBriefcase } from "react-icons/fa";

const capabilityIcons = [FaCode, FaDatabase, FaLightbulb];

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  const { t } = useTranslation();

  const paragraphs = t("about.profile.paragraphs", {
    returnObjects: true,
  });

  const capabilityItems = t("about.capabilities.items", {
    returnObjects: true,
  });

  const interestItems = t("about.interests.items", {
    returnObjects: true,
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F7F3] py-16 text-[#34382F] sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#E9D8CB]/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADING */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-9 flex flex-wrap items-end justify-between gap-4 border-b border-[#DEDAD0] pb-5 sm:mb-11"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B66E4E]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#A35F43]">
                {t("about.eyebrow")}
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-[#292D27] sm:text-3xl lg:text-4xl">
              {t("about.title")}
            </h2>
          </div>

          <span className="text-xs font-medium text-[#77796F]">
            {t("about.sectionLabel")}
          </span>
        </motion.div>

        {/* PROFILE AND EXPERIENCE */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-10">
          {/* PROFILE STORY */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-[#B66E4E]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A35F43]">
                  {t("about.profile.label")}
                </p>

                <h3 className="mt-0.5 text-xl font-semibold text-[#34382F] sm:text-2xl">
                  {t("about.profile.title")}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {Array.isArray(paragraphs) &&
                paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-[15px] leading-[1.85] sm:text-base sm:leading-[1.9] ${
                      index === 0
                        ? "font-medium text-[#454A40]"
                        : "text-[#5F635A]"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </motion.div>

          {/* INTERNSHIP HIGHLIGHT */}
          <motion.aside
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-[#DDD8CE] bg-[#F0EEE7] p-5 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B66E4E]/10 text-[#A35F43]">
                <FaBriefcase size={16} />
              </div>

              <span className="rounded-full border border-[#788B70]/25 bg-[#788B70]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#667C5D]">
                {t("about.experienceNote.type")}
              </span>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#A35F43]">
              {t("about.experienceNote.eyebrow")}
            </p>

            <h3 className="mt-2 text-xl font-semibold leading-snug text-[#34382F] sm:text-2xl">
              {t("about.experienceNote.organization")}
            </h3>

            <p className="mt-2 text-sm font-medium text-[#788B70]">
              {t("about.experienceNote.title")}
            </p>

            <div className="my-5 h-px bg-[#DCD6CA]" />

            <p className="text-sm leading-7 text-[#5F635A]">
              {t("about.experienceNote.description")}
            </p>
          </motion.aside>
        </div>

        {/* CORE CAPABILITIES */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-2xl bg-[#34382F] text-[#F8F7F3] sm:mt-12"
        >
          <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D9A58D]">
                {t("about.capabilities.eyebrow")}
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("about.capabilities.title")}
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#D0D0C7]">
              {t("about.capabilities.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            {Array.isArray(capabilityItems) &&
              capabilityItems.map((item, index) => {
                const Icon = capabilityIcons[index] || FaLightbulb;

                return (
                  <article
                    key={item.number}
                    className={`px-5 py-6 sm:px-8 sm:py-7 ${
                      index > 0
                        ? "border-t border-white/10 md:border-l md:border-t-0"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-[#D9A58D]">
                        {item.number}
                      </span>

                      <Icon className="text-[#D9A58D]" size={18} />
                    </div>

                    <h4 className="mt-4 text-lg font-semibold text-[#F8F7F3]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#D0D0C7]">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-1.5 text-xs text-[#E1E0D7]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
          </div>
        </motion.div>

        {/* AREAS OF INTEREST */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid gap-4 sm:grid-cols-[0.65fr_1.35fr] sm:items-center sm:gap-8"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A35F43]">
              {t("about.interests.eyebrow")}
            </p>

            <h3 className="mt-1 text-lg font-semibold text-[#34382F] sm:text-xl">
              {t("about.interests.title")}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {Array.isArray(interestItems) &&
              interestItems.map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full border px-3.5 py-2 text-xs font-medium sm:text-sm ${
                    index % 2 === 0
                      ? "border-[#B66E4E]/25 bg-[#B66E4E]/[0.06] text-[#965A41]"
                      : "border-[#788B70]/30 bg-[#788B70]/[0.07] text-[#63785B]"
                  }`}
                >
                  {item}
                </span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
