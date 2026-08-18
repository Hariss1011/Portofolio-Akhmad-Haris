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
      className="
        relative
        overflow-hidden

        bg-[#070a14]

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            top-20

            h-80
            w-80

            rounded-full

            bg-blue-500/50

            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20

            h-80
            w-80

            rounded-full

            bg-cyan-500/40

            blur-3xl
          "
        />
      </div>

      {/* =========================================
          CONTAINER
      ========================================== */}

      <div
        className="
          relative

          mx-auto
          w-full
          max-w-7xl

          px-6
          sm:px-8
          lg:px-10
        "
      >
        {/* =======================================
            TITLE
        ======================================== */}

        <Reveal>
          <SectionTitle
            subtitle="Certificates"
            title="Continuous learning beyond the classroom."
            description="Professional certifications and learning achievements that reflect my commitment to continuously developing technical and professional skills."
          />
        </Reveal>

        {/* =======================================
            CERTIFICATE GRID
        ======================================== */}

        {certificates.length > 0 ? (
          <StaggerContainer
            className="
              mt-14

              grid

              gap-6

              md:grid-cols-2
              xl:grid-cols-3
            "
            stagger={0.1}
          >
            {certificates.map((certificate) => (
              <StaggerItem key={certificate.id}>
                <CertificateCard certificate={certificate} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <Reveal
            className="
              mx-auto
              mt-14

              max-w-xl

              rounded-2xl

              border
              border-dashed
              border-white/15

              bg-white/[0.06]

              p-10

              text-center
            "
          >
            <FaCertificate
              className="
                mx-auto

                text-4xl

                text-slate-500
              "
            />

            <h3
              className="
                mt-4

                text-lg
                font-bold

                text-slate-100
              "
            >
              Certificates coming soon
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-slate-400
              "
            >
              Professional certifications will be added here.
            </p>
          </Reveal>
        )}

        {/* =======================================
            BOTTOM HIGHLIGHT
        ======================================== */}

        <Reveal className="mt-8">
          <div
            className="
              relative
              overflow-hidden

              rounded-2xl

              border
              border-slate-800

              bg-slate-950

              p-7

              sm:p-8
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none

                absolute
                -right-20
                -top-20

                h-48
                w-48

                rounded-full

                bg-blue-500/20

                blur-3xl
              "
            />

            <div
              className="
                relative

                flex
                flex-col
                gap-5

                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0

                    items-center
                    justify-center

                    rounded-xl

                    bg-blue-500/10

                    text-blue-400
                  "
                >
                  <FaCertificate />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]

                      text-blue-400
                    "
                  >
                    Continuous Growth
                  </p>

                  <h3
                    className="
                      mt-1

                      text-xl
                      font-bold

                      text-white

                      sm:text-2xl
                    "
                  >
                    Learning does not stop after graduation.
                  </h3>

                  <p
                    className="
                      mt-2

                      max-w-2xl

                      text-sm
                      leading-6

                      text-slate-500
                    "
                  >
                    I continue developing my skills through certifications,
                    personal projects, and practical learning.
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2

                  text-sm
                  font-semibold

                  text-white
                "
              >
                Explore my skills
                <FaArrowRight
                  className="
                    text-blue-400
                  "
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Certificates;
