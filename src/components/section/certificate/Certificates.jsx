import certificates from "../../../data/certificates";

import SectionTitle from "../../common/SectionTitle";
import CertificateCard from "./CertificateCard";
import Reveal from "../../common/Reveal";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import { FaCertificate, FaArrowRight } from "react-icons/fa";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#070a14] py-24 sm:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/[0.10] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <Reveal>
          <SectionTitle
            subtitle="Certifications"
            title="Learning, Growing & Building Expertise."
            description="A collection of certifications and learning achievements that demonstrate my commitment to developing practical skills and professional knowledge."
          />
        </Reveal>

        {/* Certificate overview */}
        {certificates.length > 0 && (
          <Reveal>
            <div className="mt-12 flex flex-col gap-4 border-y border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-cyan-500/[0.06] text-blue-300">
                  <FaCertificate />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Professional Development
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Certifications and learning achievements
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="font-mono text-2xl font-bold text-white">
                  {String(certificates.length).padStart(2, "0")}
                </span>
                <span className="text-slate-500">
                  {certificates.length === 1 ? "Certificate" : "Certificates"}
                </span>
              </div>
            </div>
          </Reveal>
        )}

        {/* Certificate grid */}
        {certificates.length > 0 ? (
          <StaggerContainer
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            stagger={0.1}
          >
            {certificates.map((certificate) => (
              <StaggerItem key={certificate.id}>
                <CertificateCard certificate={certificate} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <Reveal className="mx-auto mt-14 max-w-xl rounded-2xl border border-dashed border-white/15 bg-white/[0.04] px-6 py-14 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-400/[0.08] text-2xl text-blue-300">
              <FaCertificate />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              Certificates coming soon
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Professional certifications and learning achievements will be
              displayed here.
            </p>
          </Reveal>
        )}

        {/* Closing note */}
        {certificates.length > 0 && (
          <Reveal>
            <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Always Improving
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                  I believe professional growth comes from continuous learning
                  and applying knowledge through real-world projects.
                </p>
              </div>

              <a
                href="#skills"
                className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-blue-300"
              >
                Explore my skills
                <FaArrowRight className="text-xs text-blue-400" />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Certificates;
