import { motion } from "framer-motion";

import profile from "../../../data/profile";

import Button from "../../common/Button";
import Badge from "../../common/Badge";
import Card from "../../common/Card";
import Counter from "../../common/Counter";
import { StaggerContainer, StaggerItem } from "../../common/Stagger";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

const Hero = () => {
  const firstName = profile.name.split(" ")[0];
  const lastName = profile.name.split(" ").slice(1).join(" ");

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden

        bg-[#05070d]

        pt-32
        sm:pt-36
        lg:pt-40

        pb-20
        sm:pb-24
        lg:pb-28
      "
    >
      {/* =========================================
          BACKGROUND — mesh gradient + grid
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

        <div className="glow-orb absolute -left-40 -top-20 h-[520px] w-[520px] bg-blue-600/25" />
        <div className="glow-orb absolute right-[-220px] top-[10%] h-[480px] w-[480px] bg-cyan-500/20" />
        <div className="glow-orb absolute left-1/2 bottom-[-260px] h-[420px] w-[420px] -translate-x-1/2 bg-blue-500/15" />
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
        <div
          className="
            grid
            items-center

            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-10
          "
        >
          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <StaggerContainer
            className="max-w-3xl"
            stagger={0.12}
            once
            amount={0}
          >
            {/* Availability */}

            <StaggerItem
              className="
                glass

                inline-flex
                items-center
                gap-2

                rounded-full

                px-4
                py-2

                text-sm
                font-semibold
                text-emerald-300
              "
            >
              <span
                className="
                  h-2
                  w-2

                  rounded-full

                  bg-emerald-400

                  shadow-[0_0_0_4px_rgba(52,211,153,0.15)]
                "
              />
              Available for Work
            </StaggerItem>

            {/* Heading */}

            <StaggerItem
              as="h1"
              className="
                mt-7

                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.04em]

                text-white

                sm:text-6xl

                lg:text-7xl
                xl:text-8xl
              "
            >
              <span className="block">{firstName}</span>

              <span className="mt-2 block text-gradient">{lastName}</span>
            </StaggerItem>

            {/* Title */}

            <StaggerItem as="div" className="mt-7 flex items-center gap-3">
              <span className="hidden h-px w-10 bg-blue-500/60 sm:block" />

              <h2
                className="
                  text-lg
                  font-semibold
                  text-slate-400

                  sm:text-xl
                "
              >
                {profile.title}
              </h2>
            </StaggerItem>

            {/* Roles */}

            <StaggerItem
              as="div"
              className="
                mt-6

                flex
                flex-wrap
                gap-2.5
              "
            >
              {profile.roles.map((role, index) => (
                <Badge key={role} color={index % 2 === 0 ? "blue" : "cyan"}>
                  {role}
                </Badge>
              ))}
            </StaggerItem>

            {/* Description */}

            <StaggerItem
              as="p"
              className="
                mt-7
                max-w-2xl

                text-base
                leading-7

                text-slate-400

                sm:text-lg
                sm:leading-8
              "
            >
              {profile.description}
            </StaggerItem>

            {/* Buttons */}

            <StaggerItem
              as="div"
              className="
                mt-9

                flex
                flex-wrap
                gap-3
              "
            >
              <Button href={profile.cv}>Download </Button>

              <Button href="#projects" variant="secondary">
                View Projects
              </Button>
            </StaggerItem>

            {/* Social */}

            <StaggerItem
              as="div"
              className="
                mt-8

                flex
                items-center
                gap-3
              "
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  glass
                  glass-hover

                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-xl

                  text-slate-300

                  hover:text-white
                "
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  glass
                  glass-hover

                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-xl

                  text-slate-300

                  hover:text-white
                "
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="
                  glass
                  glass-hover

                  flex
                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-xl

                  text-slate-300

                  hover:text-white
                "
              >
                <FaEnvelope />
              </a>

              <div
                className="
                  ml-2

                  hidden
                  items-center
                  gap-2

                  text-sm
                  text-slate-500

                  sm:flex
                "
              >
                <FaMapMarkerAlt />
                <span>{profile.location}</span>
              </div>
            </StaggerItem>

            {/* Statistics */}

            <StaggerItem
              as="div"
              className="
                mt-12

                grid
                max-w-xl
                grid-cols-3

                gap-3
              "
            >
              <div className="glass rounded-2xl px-4 py-5 text-center sm:text-left">
                <Counter
                  value={5}
                  suffix="+"
                  className="block text-2xl font-black tracking-tight text-white sm:text-3xl"
                />
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  Projects
                </p>
              </div>

              <div className="glass rounded-2xl px-4 py-5 text-center sm:text-left">
                <Counter
                  value={15}
                  suffix="+"
                  className="block text-2xl font-black tracking-tight text-white sm:text-3xl"
                />
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  Technologies
                </p>
              </div>

              <div className="glass rounded-2xl px-4 py-5 text-center sm:text-left">
                <Counter
                  value={1}
                  className="block text-2xl font-black tracking-tight text-white sm:text-3xl"
                />
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  Internship
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* =====================================
              RIGHT CONTENT
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="
              relative

              flex
              min-h-[560px]

              items-center
              justify-center

              lg:min-h-[680px]
            "
          >
            {/* =================================
                Code Card
            ================================== */}

            <Card
              hover={false}
              className="
                absolute

                left-0
                top-2

                z-10

                hidden

                w-[350px]

                !bg-[#0a0f1e]

                shadow-2xl

                sm:block
                lg:left-0
                xl:left-4
              "
            >
              {/* Window Header */}

              <div
                className="
                  flex
                  items-center
                  gap-2

                  border-b
                  border-white/10

                  p-6
                  pb-4
                "
              >
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-2 text-xs font-medium text-slate-500">
                  developer.js
                </span>
              </div>

              {/* Code */}

              <pre
                className="
                  overflow-hidden

                  p-6
                  pt-5

                  font-mono
                  text-xs
                  leading-6

                  text-slate-300

                  sm:text-sm
                  sm:leading-7
                "
              >
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-green-400">name</span>:{" "}
                <span className="text-orange-300">"Akhmad Haris"</span>,{"\n"}
                {"  "}
                <span className="text-green-400">role</span>:{" "}
                <span className="text-orange-300">"Web Developer"</span>,{"\n"}
                {"  "}
                <span className="text-green-400">focus</span>:{" "}
                <span className="text-orange-300">"Data Analytics"</span>,{"\n"}
                {"  "}
                <span className="text-green-400">stack</span>: [
                <span className="text-cyan-300">"React"</span>,{" "}
                <span className="text-cyan-300">"Laravel"</span>
                ],{"\n"}
                {"  "}
                <span className="text-green-400">status</span>:{" "}
                <span className="text-emerald-400">"Available"</span>
                {"\n"}
                <span className="text-yellow-300">{"}"}</span>;
              </pre>

              {/* Code Footer */}

              <div
                className="
                  flex
                  items-center
                  gap-2

                  border-t
                  border-white/10

                  p-6
                  pt-4

                  text-xs
                  text-slate-500
                "
              >
                <FaCode className="text-blue-400" />
                <span>Building digital solutions</span>
              </div>
            </Card>

            {/* =================================
                Profile Image
            ================================== */}

            <div
              className="
                relative
                z-20

                mt-20

                rounded-[2.5rem]

                bg-gradient-to-br
                from-blue-500
                to-cyan-400

                p-1.5

                shadow-[0_30px_90px_rgba(34,211,238,0.25)]

                sm:mt-28
              "
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="
                  h-[360px]
                  w-[280px]

                  rounded-[2.2rem]

                  border-4
                  border-[#05070d]

                  object-cover
                  object-center

                  sm:h-[430px]
                  sm:w-[340px]

                  lg:h-[460px]
                  lg:w-[360px]
                "
              />
            </div>

            {/* =================================
                Floating Badges
            ================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.9 },
                scale: { duration: 0.5, delay: 0.9 },
                y: {
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
              className="absolute right-0 top-16 z-30 hidden sm:block lg:right-0 xl:right-8"
            >
              <Badge color="cyan">⚛ React</Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.05 },
                scale: { duration: 0.5, delay: 1.05 },
                y: {
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.55,
                },
              }}
              className="absolute bottom-28 left-0 z-30 hidden sm:block xl:left-2"
            >
              <Badge color="blue">🚀 Laravel</Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.2 },
                scale: { duration: 0.5, delay: 1.2 },
                y: {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.7,
                },
              }}
              className="absolute right-0 top-1/2 z-30 hidden sm:block"
            >
              <Badge color="purple">🗄 MySQL</Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.35 },
                scale: { duration: 0.5, delay: 1.35 },
                y: {
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.85,
                },
              }}
              className="absolute bottom-10 right-8 z-30 hidden sm:block"
            >
              <Badge color="cyan">📊 Excel</Badge>
            </motion.div>

            {/* Location card */}

            <div
              className="
                glass

                absolute
                bottom-0
                left-1/2
                z-30

                flex
                -translate-x-1/2
                items-center
                gap-2

                rounded-full

                px-4
                py-2

                text-xs
                font-semibold
                text-slate-300

                sm:hidden
              "
            >
              <FaMapMarkerAlt className="text-blue-400" />
              {profile.location}
            </div>
          </motion.div>
        </div>

        {/* =========================================
            SCROLL INDICATOR
        ========================================== */}

        <div
          className="
            mt-16

            hidden

            flex-col
            items-center
            gap-2

            text-xs
            font-medium
            uppercase
            tracking-[0.2em]
            text-slate-600

            lg:flex
          "
        >
          <span>Scroll to explore</span>
          <FaArrowDown className="animate-bounce text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
