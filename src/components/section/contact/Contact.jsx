import profile from "../../../data/profile";

import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import Button from "../../common/Button";
import Reveal from "../../common/Reveal";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaArrowRight,
  FaCheckCircle,
  FaBriefcase,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden

        bg-[#0a0f1e]

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
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

            bg-blue-500/60

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

            bg-cyan-500/50

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
            SECTION TITLE
        ======================================== */}

        <Reveal>
          <SectionTitle
            subtitle="Contact"
            title="Let's build something meaningful together."
            description="Whether you are a recruiter, potential employer, collaborator, or simply want to connect, feel free to reach out. I am always open to discussing opportunities and meaningful projects."
          />
        </Reveal>

        {/* =======================================
            MAIN CONTACT GRID
        ======================================== */}

        <div
          className="
            mx-auto
            mt-14

            grid
            max-w-6xl

            gap-8

            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* =====================================
              LEFT — CONTACT INFORMATION
          ====================================== */}

          <Reveal x={-24} y={0}>
            <Card
              className="
              relative
              overflow-hidden

              p-7
              sm:p-8
              lg:p-10

              bg-white/[0.06]
            "
            >
              {/* Top Accent */}

              <div
                className="
                absolute
                left-0
                top-0

                h-1
                w-full

                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-transparent
              "
              />

              {/* Heading */}

              <div className="max-w-xl">
                <div
                  className="
                  inline-flex
                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-2xl

                  bg-blue-500/10

                  text-blue-300
                "
                >
                  <FaEnvelope />
                </div>

                <h3
                  className="
                  mt-6

                  text-2xl
                  font-black
                  tracking-tight

                  text-white

                  sm:text-3xl
                "
                >
                  Get in touch
                </h3>

                <p
                  className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-400

                  sm:text-base
                "
                >
                  I am currently open to entry-level opportunities in Web
                  Development, Data Analytics, Database Administration, and
                  other technology-related roles where I can contribute and
                  continue developing my skills.
                </p>
              </div>

              {/* =================================
                CONTACT ITEMS
            ================================== */}

              <div className="mt-8 space-y-4">
                {/* Email */}

                <a
                  href={`mailto:${profile.email}`}
                  className="
                  group

                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  p-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-500/25
                  hover:bg-blue-500/10
                  hover:shadow-md
                "
                >
                  <div
                    className="
                    flex
                    h-11
                    w-11
                    shrink-0

                    items-center
                    justify-center

                    rounded-xl

                    bg-white/[0.06]

                    text-blue-300

                    shadow-sm

                    transition-transform
                    duration-300

                    group-hover:scale-105
                  "
                  >
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider

                      text-slate-500
                    "
                    >
                      Email
                    </p>

                    <p
                      className="
                      mt-1

                      truncate

                      text-sm
                      font-semibold

                      text-slate-200

                      sm:text-base
                    "
                    >
                      {profile.email}
                    </p>
                  </div>

                  <FaArrowRight
                    className="
                    ml-auto
                    shrink-0

                    text-slate-500

                    transition-all
                    duration-300

                    group-hover:translate-x-1
                    group-hover:text-blue-300
                  "
                  />
                </a>

                {/* Phone */}

                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="
                  group

                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  p-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-500/25
                  hover:bg-blue-500/10
                  hover:shadow-md
                "
                >
                  <div
                    className="
                    flex
                    h-11
                    w-11
                    shrink-0

                    items-center
                    justify-center

                    rounded-xl

                    bg-white/[0.06]

                    text-blue-300

                    shadow-sm
                  "
                  >
                    <FaPhone />
                  </div>

                  <div>
                    <p
                      className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider

                      text-slate-500
                    "
                    >
                      Phone
                    </p>

                    <p
                      className="
                      mt-1

                      text-sm
                      font-semibold

                      text-slate-200

                      sm:text-base
                    "
                    >
                      {profile.phone}
                    </p>
                  </div>

                  <FaArrowRight
                    className="
                    ml-auto
                    shrink-0

                    text-slate-500

                    transition-all
                    duration-300

                    group-hover:translate-x-1
                    group-hover:text-blue-300
                  "
                  />
                </a>

                {/* Location */}

                <div
                  className="
                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  p-4
                "
                >
                  <div
                    className="
                    flex
                    h-11
                    w-11
                    shrink-0

                    items-center
                    justify-center

                    rounded-xl

                    bg-white/[0.06]

                    text-blue-300

                    shadow-sm
                  "
                  >
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p
                      className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider

                      text-slate-500
                    "
                    >
                      Location
                    </p>

                    <p
                      className="
                      mt-1

                      text-sm
                      font-semibold

                      text-slate-200

                      sm:text-base
                    "
                    >
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================
                AVAILABILITY
            ================================== */}

              <div
                className="
                mt-6

                flex
                items-start
                gap-3

                rounded-2xl

                border
                border-emerald-500/25

                bg-emerald-500/10

                p-4
              "
              >
                <FaCheckCircle
                  className="
                  mt-0.5
                  shrink-0

                  text-emerald-500
                "
                />

                <div>
                  <p
                    className="
                    text-sm
                    font-bold

                    text-emerald-300
                  "
                  >
                    Open to full-time roles, internships, collaborations, and
                    professional opportunities.
                  </p>

                  <p
                    className="
                    mt-1

                    text-xs
                    leading-5

                    text-emerald-300/80
                  "
                  >
                    Open to full-time roles, internships, collaborations, and
                    professional opportunities.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* =====================================
              RIGHT — PROFILE / SOCIAL
          ====================================== */}

          <Reveal x={24} y={0} delay={0.1} className="space-y-6">
            {/* Profile CTA */}

            <Card
              className="
                relative
                overflow-hidden

                border-0

                bg-slate-950

                p-7
                sm:p-8
                lg:p-9

                text-white
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none

                  absolute
                  -right-24
                  -top-24

                  h-64
                  w-64

                  rounded-full

                  bg-blue-500/20

                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none

                  absolute
                  -bottom-24
                  -left-24

                  h-64
                  w-64

                  rounded-full

                  bg-cyan-500/10

                  blur-3xl
                "
              />

              <div className="relative">
                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-2xl

                    bg-blue-500/10

                    text-blue-400
                  "
                >
                  <FaBriefcase />
                </div>

                <p
                  className="
                    mt-6

                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]

                    text-blue-400
                  "
                >
                  Professional Opportunity
                </p>

                <h3
                  className="
                    mt-2

                    text-2xl
                    font-black
                    tracking-tight

                    sm:text-3xl
                  "
                >
                  Ready to contribute and grow.
                </h3>

                <p
                  className="
                    mt-4

                    text-sm
                    leading-7

                    text-slate-500

                    sm:text-base
                  "
                >
                  s a fresh graduate in Informatics Engineering, I bring a
                  foundation in web development, databases, information systems,
                  and data analysis. I am eager to contribute to a professional
                  team, learn from real-world challenges, and continuously grow
                  as a technology professional.
                </p>

                {/* Buttons */}

                <div
                  className="
                    mt-7

                    flex
                    flex-col
                    gap-3

                    sm:flex-row
                  "
                >
                  <Button href={`mailto:${profile.email}`}>Contact Me</Button>

                  <Button href={profile.cv} variant="secondary">
                    <FaFileDownload />
                    Download CV
                  </Button>
                </div>
              </div>
            </Card>

            {/* =================================
                SOCIAL LINKS
            ================================== */}

            <Card
              className="
                p-6
                sm:p-7

                bg-white/[0.06]
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]

                    text-slate-500
                  "
                >
                  Professional Profiles
                </p>

                <h3
                  className="
                    mt-2

                    text-xl
                    font-extrabold

                    text-white
                  "
                >
                  Connect with me
                </h3>
              </div>

              <div
                className="
                  mt-5

                  grid
                  gap-3

                  sm:grid-cols-2
                "
              >
                {/* GitHub */}

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    flex
                    items-center
                    gap-3

                    rounded-xl

                    border
                    border-white/10

                    p-4

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-white/15
                    hover:bg-white/5
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-xl

                      bg-slate-900

                      text-white
                    "
                  >
                    <FaGithub />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs

                        text-slate-500
                      "
                    >
                      GitHub
                    </p>

                    <p
                      className="
                        text-sm
                        font-bold

                        text-slate-200
                      "
                    >
                      View Projects
                    </p>
                  </div>

                  <FaArrowRight
                    className="
                      ml-auto

                      text-slate-500

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </a>

                {/* LinkedIn */}

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    flex
                    items-center
                    gap-3

                    rounded-xl

                    border
                    border-white/10

                    p-4

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-blue-500/25
                    hover:bg-blue-500/10
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-xl

                      bg-blue-600

                      text-white
                    "
                  >
                    <FaLinkedin />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs

                        text-slate-500
                      "
                    >
                      LinkedIn
                    </p>

                    <p
                      className="
                        text-sm
                        font-bold

                        text-slate-200
                      "
                    >
                      Connect with me
                    </p>
                  </div>

                  <FaArrowRight
                    className="
                      ml-auto

                      text-slate-500

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </a>
              </div>
            </Card>
          </Reveal>
        </div>

        {/* =======================================
            BOTTOM CONTACT STRIP
        ======================================== */}

        <Reveal
          className="
            mx-auto
            mt-8
            max-w-6xl

            rounded-2xl

            border
            border-blue-500/25

            bg-gradient-to-r
            from-blue-500/10
            via-white/[0.03]
            to-cyan-500/10

            p-6

            sm:p-7
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]

                  text-blue-300
                "
              >
                Akhmad Haris
              </p>

              <p
                className="
                  mt-1

                  text-sm
                  font-semibold

                  text-slate-200
                "
              >
                Fresh Graduate in Informatics Engineering
              </p>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="
                inline-flex
                items-center
                gap-2

                text-sm
                font-bold

                text-blue-300

                transition-colors
                duration-300

                hover:text-blue-300
              "
            >
              {profile.email}

              <FaArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
