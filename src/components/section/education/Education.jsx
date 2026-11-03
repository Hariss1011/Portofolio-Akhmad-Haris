import { useTranslation } from "react-i18next";
import education from "../../../data/education";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaAward,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";

const academicIcons = [FaCode, FaDatabase, FaProjectDiagram, FaGraduationCap];

const Education = () => {
  const { t } = useTranslation();
  const item = education[0];

  const highlights = t("education.highlights", {
    returnObjects: true,
  });

  return (
    <section id="education" className="bg-[#F8F7F3] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div className="mb-9 flex flex-col gap-3 sm:mb-11">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A45F45]">
            {t("education.eyebrow")}
          </p>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-bold tracking-tight text-[#242722] sm:text-4xl">
              {t("education.title")}
            </h2>

            <p className="max-w-md text-sm leading-6 text-[#62665D]">
              {t("education.subheading")}
            </p>
          </div>
        </div>

        {/* EDUCATION CONTENT */}
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-[#E4E3DC] bg-white"
        >
          <div className="grid lg:grid-cols-[0.25fr_0.75fr]">
            {/* LEFT INFORMATION */}
            <div className="flex flex-col justify-between gap-8 bg-[#34382F] p-6 text-white sm:p-8 lg:p-9">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#D9A48B]">
                  <FaGraduationCap size={23} />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5B6A9]">
                  {t("education.universityLabel")}
                </p>

                <h3 className="mt-2 text-3xl font-bold tracking-tight">
                  {item.shortName}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-[#D5D5CC]">
                  {t("education.university")}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#A7B79B]/30 bg-[#A7B79B]/10 px-3 py-1.5 text-xs font-semibold text-[#D7E1D0]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A7B79B]" />
                  {t("education.status")}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
                <div>
                  <div className="flex items-center gap-2 text-[#C5B6A9]">
                    <FaCalendarAlt size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {t("education.periodLabel")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {item.period}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#C5B6A9]">
                    <FaAward size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {t("education.gpa")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {item.gpa}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT INFORMATION */}
            <div className="p-6 sm:p-8 lg:p-9">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A45F45]">
                  {t("education.type")}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#242722] sm:text-3xl">
                  {t("education.degree")}
                </h3>

                <p className="mt-2 text-sm font-semibold leading-6 text-[#62665D]">
                  {t("education.field")}
                </p>

                <p className="mt-5 text-[14px] leading-[1.85] text-[#50554C] sm:text-[15px]">
                  {t("education.description")}
                </p>
              </div>

              {/* ACADEMIC FOUNDATION */}
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#777B70]">
                  {t("education.focusTitle")}
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {highlights.map((highlight, index) => {
                    const Icon = academicIcons[index] || FaGraduationCap;

                    return (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08,
                        }}
                        className="
                          flex items-center gap-3
                          rounded-xl border border-[#E6E3DA]
                          bg-[#F8F7F3]
                          px-4 py-3
                          transition-all duration-300
                          hover:border-[#C99A83]
                          hover:bg-[#F3EDE7]
                        "
                      >
                        <div
                          className="
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-lg bg-[#EEE5DF]
                            text-[#A45F45]
                          "
                        >
                          <Icon size={14} />
                        </div>

                        <span className="text-xs font-medium leading-5 text-[#454A40] sm:text-sm">
                          {highlight}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* ACADEMIC PROJECT */}
              <div className="mt-7 rounded-xl border border-[#E5E4DC] bg-[#F8F7F3] p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEE5DF] text-[#A45F45]">
                    <FaExternalLinkAlt size={13} />
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-[0.13em] text-[#34382F]">
                    {t("education.projectTitle")}
                  </h4>
                </div>

                <p className="mt-3 text-[13px] leading-[1.8] text-[#62665D] sm:text-sm">
                  {t("education.project")}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Education;
