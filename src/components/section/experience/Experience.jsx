import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheck,
} from "react-icons/fa";

import { motion } from "framer-motion";
import experience from "../../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#F8F7F3] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#788B70]/[0.07] blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#A45F45]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A45F45]">
              Experience
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#242722] sm:text-4xl lg:text-[42px]">
            Professional Experience
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#62665D] sm:text-base">
            Practical experience gained through professional work, technical
            contributions, and collaboration in a real working environment.
          </p>
        </motion.div>

        {/* Experience Content */}
        <div className="mt-12 space-y-8">
          {experience.length > 0 ? (
            experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="grid overflow-hidden rounded-2xl border border-[#E6E3DA] bg-white shadow-[0_12px_40px_rgba(36,39,34,0.045)] lg:grid-cols-[290px_minmax(0,1fr)]"
              >
                {/* Left: Experience Information */}
                <aside className="relative flex flex-col bg-[#292D27] p-7 text-white sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold tracking-widest text-[#D5A58E]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#E8C5B3]">
                      {item.type}
                    </span>
                  </div>

                  <div className="mt-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Organization
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-snug tracking-tight text-white">
                      {item.company}
                    </h3>

                    <div className="mt-5 h-px w-12 bg-[#B66E4E]" />
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-3">
                      <FaCalendarAlt className="mt-1 shrink-0 text-sm text-[#D5A58E]" />

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                          Period
                        </p>
                        <p className="mt-1.5 text-sm font-medium leading-relaxed text-white/90">
                          {item.period}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="mt-1 shrink-0 text-sm text-[#D5A58E]" />

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                          Location
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/90">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-white/55">
                      <FaBriefcase className="text-[#D5A58E]" />
                      <span>Professional Journey</span>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-16 -right-12 h-40 w-40 rounded-full border border-white/[0.06]" />
                </aside>

                {/* Right: Main Information */}
                <div className="min-w-0 p-7 sm:p-9 lg:p-10">
                  {/* Role */}
                  <div className="border-b border-[#EAE7DF] pb-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#A45F45]">
                      Position Held
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#292D27] sm:text-3xl">
                      {item.role}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#62665D] sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  {item.responsibilities?.length > 0 && (
                    <div className="py-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="text-sm font-bold text-[#292D27]">
                          Key Responsibilities
                        </h4>

                        <span className="text-[11px] font-medium text-[#92948B]">
                          {String(item.responsibilities.length).padStart(
                            2,
                            "0",
                          )}{" "}
                          Areas of Contribution
                        </span>
                      </div>

                      <div className="mt-5 grid gap-x-7 gap-y-5 sm:grid-cols-2">
                        {item.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3EDE7] text-[#A45F45]">
                              <FaCheck className="text-[9px]" />
                            </span>

                            <p className="text-[13px] leading-6 text-[#62665D] sm:text-sm">
                              {responsibility}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {item.skills?.length > 0 && (
                    <div className="border-t border-[#EAE7DF] pt-6">
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#454A40]">
                        Skills & Technologies
                      </h4>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="rounded-md border border-[#E5E2D9] bg-[#F8F7F3] px-3 py-1.5 text-xs font-medium text-[#555A50] transition-all duration-200 hover:border-[#C99A83] hover:bg-[#F3EDE7] hover:text-[#8F503A]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            ))
          ) : (
            <p className="rounded-xl border border-[#E6E3DA] bg-white py-10 text-center text-sm text-[#62665D]">
              Experience details will be added soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
