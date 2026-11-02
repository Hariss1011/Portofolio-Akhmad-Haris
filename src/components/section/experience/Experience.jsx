import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

import experience from "../../../data/experience";
import SectionTitle from "../../common/SectionTitle";
import Reveal from "../../common/Reveal";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0a0f1e] py-24 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          subtitle="Experience"
          title="Where I've Gained Practical Experience"
          description="A look at how I've applied my technical knowledge, contributed to real work, and continued developing professionally."
        />

        <div className="mt-16">
          {experience.length > 0 ? (
            experience.map((item, index) => (
              <Reveal key={`${item.company}-${index}`}>
                <article className="relative grid grid-cols-1 gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-12">
                  {/* Left: Experience metadata */}
                  <aside className="lg:col-span-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold tracking-widest text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-10 bg-blue-500/40" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Experience
                      </span>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <FaCalendarAlt className="mt-1 shrink-0 text-sm text-blue-400" />
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                            Period
                          </p>
                          <p className="mt-1 text-sm font-medium leading-relaxed text-slate-300">
                            {item.period}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="mt-1 shrink-0 text-sm text-blue-400" />
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                            Location
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-300">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {item.type && (
                      <span className="mt-6 inline-flex rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5 text-xs font-medium text-blue-300">
                        {item.type}
                      </span>
                    )}
                  </aside>

                  {/* Right: Main experience content */}
                  <div className="lg:col-span-9">
                    <div className="border-b border-white/[0.08] pb-7">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                        <FaBriefcase className="text-blue-400" />
                        <span>Professional Experience</span>
                      </div>

                      <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                        {item.role}
                      </h3>

                      <p className="mt-2 text-base font-semibold text-blue-300 sm:text-lg">
                        {item.company}
                      </p>

                      <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-[15px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    {item.responsibilities?.length > 0 && (
                      <div className="py-7">
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                          Key Responsibilities
                        </h4>

                        <div className="mt-5 space-y-4">
                          {item.responsibilities.map((responsibility, idx) => (
                            <div key={idx} className="group flex gap-4">
                              <span className="mt-0.5 shrink-0 font-mono text-xs text-blue-400/80">
                                {String(idx + 1).padStart(2, "0")}
                              </span>

                              <p className="text-sm leading-7 text-slate-400 transition-colors duration-200 group-hover:text-slate-200 sm:text-[15px]">
                                {responsibility}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {item.skills?.length > 0 && (
                      <div className="border-t border-white/[0.08] pt-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                          Skills & Technologies
                        </h4>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:text-blue-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Divider between experiences */}
                  {index !== experience.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/30 via-white/[0.08] to-transparent" />
                  )}
                </article>
              </Reveal>
            ))
          ) : (
            <p className="py-10 text-center text-sm text-slate-400">
              Experience details will be added soon.
            </p>
          )}
        </div>

        {/* Closing statement */}
        <Reveal>
          <div className="mt-16 border-t border-white/[0.08] pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                Every experience is an opportunity to learn, contribute, and
                grow into a better professional.
              </p>

              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-cyan-300"
              >
                Let's work together
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
