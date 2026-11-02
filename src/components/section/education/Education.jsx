import education from "../../../data/education";

import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import {
  FaGraduationCap,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaCheckCircle,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

const academicIcons = [FaCode, FaDatabase, FaLayerGroup, FaGraduationCap];

const Education = () => {
  const educationItem = education[0];

  return (
    <section
      id="education"
      className="
        relative overflow-hidden
        bg-[#080e1a]
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-48 top-20 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div className="absolute -right-48 bottom-10 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative mx-auto w-full max-w-7xl
          px-5 sm:px-8 lg:px-10
        "
      >
        {/* SECTION TITLE */}
        <Reveal>
          <SectionTitle
            subtitle="Education"
            title="The foundation behind my technical journey."
            description="My academic background has shaped my understanding of software development, information systems, databases, and analytical problem solving."
          />
        </Reveal>

        {/* EDUCATION CONTENT */}
        <Reveal y={20} className="mx-auto mt-12 max-w-6xl lg:mt-16">
          <Card
            hover={false}
            className="
              relative overflow-hidden
              border-white/[0.08]
              bg-[#0c1423]
              p-0
            "
          >
            {/* TOP ACCENT */}
            <div className="h-1 w-full bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500" />

            {/* MAIN GRID */}
            <div className="grid lg:grid-cols-[0.25fr_0.64fr]">
              {/* UNIVERSITY PANEL */}
              <div
                className="
    relative flex flex-col justify-between
    overflow-hidden
    border-b border-white/[0.08]
    bg-gradient-to-br from-blue-500/[0.08] via-white/[0.025] to-transparent
    p-6 sm:p-8
    lg:border-b-0 lg:border-r
    lg:p-9
  "
              >
                {/* DECORATIVE GLOW */}
                <div
                  aria-hidden="true"
                  className="
      pointer-events-none absolute
      -right-20 -top-20
      h-64 w-64 rounded-full
      bg-blue-500/[0.10] blur-[80px]
    "
                />

                <div
                  aria-hidden="true"
                  className="
      pointer-events-none absolute
      -bottom-24 -left-20
      h-52 w-52 rounded-full
      bg-cyan-500/[0.06] blur-[70px]
    "
                />

                <div className="relative">
                  {/* UNIVERSITY ICON */}
                  <div
                    className="
        flex h-16 w-16 items-center
        justify-center rounded-2xl
        border border-blue-400/20
        bg-blue-400/10
        text-blue-300
        shadow-lg shadow-blue-950/20
      "
                  >
                    <FaGraduationCap size={30} />
                  </div>

                  {/* UNIVERSITY LABEL */}
                  <div className="mt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-xs">
                      University
                    </p>

                    <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                      {educationItem.shortName}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                      {educationItem.institution}
                    </p>
                  </div>

                  {/* STATUS */}
                  <div className="mt-7">
                    <Badge color="blue">
                      <span className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-400" />
                        {educationItem.status}
                      </span>
                    </Badge>
                  </div>
                </div>

                {/* STUDY PERIOD */}
                <div className="relative mt-10 border-t border-white/[0.10] pt-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="
          flex h-10 w-10 shrink-0 items-center
          justify-center rounded-xl
          border border-white/[0.06]
          bg-white/[0.05]
          text-blue-300
        "
                    >
                      <FaCalendarAlt size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Study Period
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-200">
                        {educationItem.period}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Academic Background</span>
                  </div>
                </div>
              </div>

              {/* ACADEMIC DETAILS */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* DEGREE */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
                    {educationItem.type}
                  </p>

                  <h2
                    className="
                      mt-3 text-2xl font-bold
                      leading-tight tracking-tight
                      text-white sm:text-3xl
                    "
                  >
                    {educationItem.degree}
                  </h2>

                  <p className="mt-2 text-base font-medium text-slate-300">
                    {educationItem.field}
                  </p>
                </div>

                {/* GPA */}
                <div
                  className="
                    mt-7 flex flex-wrap items-center
                    justify-between gap-4
                    rounded-xl border border-blue-400/15
                    bg-blue-400/[0.06]
                    px-5 py-4
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-10 w-10 items-center
                        justify-center rounded-xl
                        bg-blue-400/10 text-blue-300
                      "
                    >
                      <FaAward size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Grade Point Average
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-200">
                        Academic Achievement
                      </p>
                    </div>
                  </div>

                  <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {educationItem.gpa}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Academic Overview
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-[15px] sm:leading-8">
                    {educationItem.description}
                  </p>
                </div>

                {/* ACADEMIC FOUNDATION */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Academic Foundation
                  </p>

                  <StaggerContainer
                    className="mt-4 grid gap-3 sm:grid-cols-2"
                    staggerChildren={0.08}
                  >
                    {educationItem.highlights.map((highlight, index) => {
                      const Icon = academicIcons[index] || FaGraduationCap;

                      return (
                        <StaggerItem
                          key={highlight}
                          y={12}
                          className="
                            flex items-center gap-3
                            rounded-xl border border-white/[0.07]
                            bg-white/[0.025]
                            px-4 py-3
                            transition-colors duration-300
                            hover:border-blue-400/20
                            hover:bg-blue-400/[0.05]
                          "
                        >
                          <div
                            className="
                              flex h-9 w-9 shrink-0
                              items-center justify-center
                              rounded-lg bg-blue-400/10
                              text-blue-300
                            "
                          >
                            <Icon size={14} />
                          </div>

                          <span className="text-xs font-medium leading-5 text-slate-300 sm:text-sm">
                            {highlight}
                          </span>
                        </StaggerItem>
                      );
                    })}
                  </StaggerContainer>
                </div>

                {/* FINAL PROJECT */}
                <div className="mt-8 border-t border-white/[0.08] pt-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-xl border border-cyan-400/15
                        bg-cyan-400/[0.08]
                        text-cyan-300
                      "
                    >
                      <FaCode size={16} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                        Final Academic Project
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {educationItem.project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* CLOSING STATEMENT */}
        <Reveal y={14} className="mx-auto mt-5 max-w-6xl">
          <div
            className="
              flex items-center gap-4
              rounded-2xl border border-white/[0.07]
              bg-white/[0.025]
              px-5 py-5 sm:px-7
            "
          >
            <div
              className="
                flex h-10 w-10 shrink-0 items-center
                justify-center rounded-xl
                bg-blue-400/10 text-blue-300
              "
            >
              <FaLayerGroup size={16} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-200">
                Learning beyond the classroom.
              </p>

              <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                Applying academic knowledge through personal projects, practical
                experience, and continuous learning.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
