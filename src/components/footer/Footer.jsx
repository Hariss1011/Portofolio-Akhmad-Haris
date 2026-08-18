import profile from "../../data/profile";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Certificates",
      href: "#certificates",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-slate-950

        text-white
      "
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            -top-40

            h-96
            w-96

            rounded-full

            bg-blue-600/10

            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0

            h-96
            w-96

            rounded-full

            bg-cyan-500/10

            blur-3xl
          "
        />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative

          mx-auto
          w-full
          max-w-7xl

          px-6
          py-16

          sm:px-8
          sm:py-20

          lg:px-10
        "
      >
        {/* =======================================
            TOP CONTENT
        ======================================== */}

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[1.4fr_0.8fr_0.8fr]
          "
        >
          {/* =====================================
              BRAND
          ====================================== */}

          <div className="max-w-xl">
            {/* Logo */}

            <a
              href="#home"
              className="
                inline-flex
                items-center
                gap-3

                group
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-xl

                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500

                  text-lg
                  font-black

                  shadow-lg
                  shadow-blue-500/20

                  transition-transform
                  duration-300

                  group-hover:scale-105
                "
              >
                AH
              </div>

              <div>
                <p
                  className="
                    text-base
                    font-extrabold

                    text-white
                  "
                >
                  Akhmad Haris
                </p>

                <p
                  className="
                    text-xs

                    text-slate-400
                  "
                >
                  Informatics Engineering
                </p>
              </div>
            </a>

            {/* Description */}

            <p
              className="
                mt-6

                max-w-md

                text-sm
                leading-7

                text-slate-500
              "
            >
              Fresh Graduate in Informatics Engineering with an interest in Web
              Development, Data Analytics, and Information Technology. Always
              learning, building, and looking for opportunities to create
              meaningful solutions through technology.
            </p>

            {/* Location */}

            <div
              className="
                mt-6

                flex
                items-center
                gap-2

                text-sm

                text-slate-400
              "
            >
              <FaMapMarkerAlt className="text-blue-500" />

              <span>{profile.location}</span>
            </div>

            {/* Social */}

            <div
              className="
                mt-7

                flex
                items-center
                gap-3
              "
            >
              {/* GitHub */}

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-slate-800

                  bg-slate-900

                  text-slate-500

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-slate-600
                  hover:bg-slate-800
                  hover:text-white
                "
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-slate-800

                  bg-slate-900

                  text-slate-500

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-500/50
                  hover:bg-blue-500/10
                  hover:text-blue-400
                "
              >
                <FaLinkedin />
              </a>

              {/* Email */}

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-slate-800

                  bg-slate-900

                  text-slate-500

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-cyan-500/50
                  hover:bg-cyan-500/10
                  hover:text-cyan-400
                "
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* =====================================
              NAVIGATION
          ====================================== */}

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]

                text-slate-400
              "
            >
              Navigation
            </p>

            <ul className="mt-6 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="
                      inline-flex
                      items-center

                      text-sm

                      text-slate-500

                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-white
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================
              CONTACT
          ====================================== */}

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]

                text-slate-400
              "
            >
              Let's Connect
            </p>

            <p
              className="
                mt-6

                text-sm
                leading-6

                text-slate-500
              "
            >
              Interested in working together or discussing an opportunity? Feel
              free to reach out.
            </p>

            {/* Email */}

            <a
              href={`mailto:${profile.email}`}
              className="
                mt-5

                flex
                items-center
                gap-3

                text-sm
                font-semibold

                text-slate-500

                transition-colors
                duration-300

                hover:text-blue-400
              "
            >
              <FaEnvelope className="text-blue-500" />

              <span className="break-all">{profile.email}</span>
            </a>

            {/* CTA */}

            <a
              href={`mailto:${profile.email}`}
              className="
                mt-6

                inline-flex
                items-center
                gap-2

                rounded-xl

                bg-white/[0.06]

                px-4
                py-2.5

                text-sm
                font-bold

                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-blue-500
                hover:text-white

                hover:shadow-lg
                hover:shadow-blue-500/20
              "
            >
              Get in touch
              <FaEnvelope className="text-xs" />
            </a>
          </div>
        </div>

        {/* =======================================
            DIVIDER
        ======================================== */}

        <div
          className="
            my-12

            h-px

            bg-gradient-to-r
            from-transparent
            via-slate-800
            to-transparent
          "
        />

        {/* =======================================
            BOTTOM
        ======================================== */}

        <div
          className="
            flex
            flex-col
            gap-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}

          <div>
            <p
              className="
                text-sm

                text-slate-400
              "
            >
              © {currentYear}{" "}
              <span className="font-semibold text-slate-500">
                {profile.name}
              </span>
              . All rights reserved.
            </p>

            <p
              className="
                mt-1

                text-xs

                text-slate-300
              "
            >
              Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Back to Top */}

          <a
            href="#home"
            aria-label="Back to top"
            className="
              group

              flex
              items-center
              gap-3

              self-start

              rounded-xl

              border
              border-slate-800

              bg-slate-900

              px-4
              py-2.5

              text-sm
              font-semibold

              text-slate-500

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-500/40
              hover:bg-blue-500/10
              hover:text-white

              sm:self-auto
            "
          >
            Back to top
            <span
              className="
                flex
                h-6
                w-6

                items-center
                justify-center

                rounded-lg

                bg-slate-800

                text-xs

                transition-all
                duration-300

                group-hover:bg-blue-500
                group-hover:text-white
              "
            >
              <FaArrowUp />
            </span>
          </a>
        </div>
      </div>

      {/* =========================================
          BOTTOM LINE
      ========================================== */}

      <div
        className="
          h-1

          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-blue-600
        "
      />
    </footer>
  );
};

export default Footer;
