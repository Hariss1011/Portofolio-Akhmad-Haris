import Card from "../../common/Card";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const colorClasses = {
  blue: {
    border: "hover:border-blue-400",
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-300",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/25",
    glow: "from-blue-500/10 via-cyan-400/5 to-transparent",
    hoverBg: "hover:bg-blue-500/10",
  },

  emerald: {
    border: "hover:border-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-300",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    glow: "from-emerald-500/10 via-teal-400/5 to-transparent",
    hoverBg: "hover:bg-emerald-500/10",
  },

  orange: {
    border: "hover:border-orange-400",
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-300",
    badge: "bg-orange-500/10 text-orange-300 border-orange-500/25",
    glow: "from-orange-500/10 via-yellow-400/5 to-transparent",
    hoverBg: "hover:bg-orange-500/10",
  },

  purple: {
    border: "hover:border-purple-400",
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-300",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/25",
    glow: "from-purple-500/10 via-pink-400/5 to-transparent",
    hoverBg: "hover:bg-purple-500/10",
  },
};

const SkillCard = ({ category }) => {
  const color = colorClasses[category.color] || colorClasses.blue;

  return (
    <Card
      className={`
        group
        relative
        overflow-hidden

        p-7
        sm:p-8

        border
        border-white/10

        ${color.border}

        transition-all
        duration-500

        hover:-translate-y-2
      `}
    >
      {/* =====================================
          Background Glow
      ====================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-24
          -top-24

          h-64
          w-64

          rounded-full

          bg-gradient-to-br
          ${color.glow}

          opacity-0
          blur-3xl

          transition-all
          duration-700

          group-hover:opacity-100
        `}
      />

      {/* =====================================
          Top Badge
      ====================================== */}

      <div
        className={`
          absolute
          right-6
          top-6

          rounded-full

          border

          px-3
          py-1

          text-xs
          font-bold

          ${color.badge}
        `}
      >
        {category.skills.length} Skills
      </div>

      {/* =====================================
          Category Header
      ====================================== */}

      <div className="relative z-10 pr-20">
        <div
          className={`
            mb-6

            flex
            h-16
            w-16

            items-center
            justify-center

            rounded-2xl

            ${color.iconBg}

            shadow-sm

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:rotate-3
          `}
        >
          {/* Category Icon */}

          {category.icon ? (
            <category.icon
              className={`
                text-3xl
                ${color.iconText}
              `}
            />
          ) : (
            <span
              className={`
                text-2xl
                font-black
                ${color.iconText}
              `}
            >
              {category.title.charAt(0)}
            </span>
          )}
        </div>

        <h3
          className="
            text-2xl
            font-extrabold
            tracking-tight
            text-white
          "
        >
          {category.title}
        </h3>

        <p
          className="
            mt-3

            max-w-lg

            text-sm
            leading-7

            text-slate-400
          "
        >
          {category.description}
        </p>
      </div>

      {/* =====================================
          Divider
      ====================================== */}

      <div
        className="
          relative
          z-10

          my-7

          h-px

          bg-white/10
        "
      />

      {/* =====================================
          Skills
      ====================================== */}

      <div className="relative z-10 space-y-2">
        {category.skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className={`
                flex
                items-center
                justify-between

                rounded-2xl

                border
                border-transparent

                px-4
                py-3.5

                transition-all
                duration-300

                ${color.hoverBg}

                hover:border-white/10
              `}
            >
              <div className="flex items-center gap-4">
                {/* Technology Logo */}

                <div
                  className="
                    flex
                    h-10
                    w-10

                    shrink-0

                    items-center
                    justify-center

                    rounded-xl

                    bg-white/[0.06]

                    border
                    border-white/10

                    shadow-sm

                    transition-all
                    duration-300

                    group-hover:shadow-md
                  "
                >
                  {Icon && (
                    <Icon
                      className="
                        text-xl
                        text-slate-200
                      "
                    />
                  )}
                </div>

                <span
                  className="
                    text-sm
                    font-semibold
                    text-slate-200
                  "
                >
                  {skill.name}
                </span>
              </div>

              {/* Small indicator */}

              <span
                className={`
                  h-2
                  w-2

                  rounded-full

                  ${color.iconText.replace("text-", "bg-")}

                  opacity-60
                `}
              />
            </div>
          );
        })}
      </div>

      {/* =====================================
          Footer
      ====================================== */}

      <div
        className="
          relative
          z-10

          mt-7
          pt-6

          border-t
          border-white/10

          flex
          items-center
          justify-between
        "
      >
        <div>
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-wider
              text-slate-500
            "
          >
            Technology Stack
          </p>

          <p
            className={`
              mt-1

              text-sm
              font-bold

              ${color.iconText}
            `}
          >
            Used in portfolio projects
          </p>
        </div>

        <div
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-xl

            border
            border-white/10

            text-slate-500

            transition-all
            duration-300

            group-hover:border-white/15
            group-hover:text-slate-200
            group-hover:rotate-12
          "
        >
          <FaArrowUpRightFromSquare className="text-sm" />
        </div>
      </div>
    </Card>
  );
};

export default SkillCard;
