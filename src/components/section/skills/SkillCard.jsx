const colorClasses = {
  blue: {
    border: "hover:border-blue-400/30",
    iconBg: "bg-blue-400/10",
    iconText: "text-blue-300",
    badge: "border-blue-400/20 bg-blue-400/10 text-blue-300",
    glow: "bg-blue-500/[0.07]",
    hoverBg: "hover:bg-blue-400/[0.06]",
    indicator: "bg-blue-400",
  },

  emerald: {
    border: "hover:border-emerald-400/30",
    iconBg: "bg-emerald-400/10",
    iconText: "text-emerald-300",
    badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    glow: "bg-emerald-500/[0.07]",
    hoverBg: "hover:bg-emerald-400/[0.06]",
    indicator: "bg-emerald-400",
  },

  orange: {
    border: "hover:border-orange-400/30",
    iconBg: "bg-orange-400/10",
    iconText: "text-orange-300",
    badge: "border-orange-400/20 bg-orange-400/10 text-orange-300",
    glow: "bg-orange-500/[0.07]",
    hoverBg: "hover:bg-orange-400/[0.06]",
    indicator: "bg-orange-400",
  },

  purple: {
    border: "hover:border-purple-400/30",
    iconBg: "bg-purple-400/10",
    iconText: "text-purple-300",
    badge: "border-purple-400/20 bg-purple-400/10 text-purple-300",
    glow: "bg-purple-500/[0.07]",
    hoverBg: "hover:bg-purple-400/[0.06]",
    indicator: "bg-purple-400",
  },
};

const SkillCard = ({ category }) => {
  const color = colorClasses[category.color] || colorClasses.blue;

  const CategoryIcon = category.icon;

  return (
    <article
      className={`
        group relative flex h-full flex-col
        overflow-hidden rounded-3xl
        border border-white/[0.09]
        bg-[#0c1220]
        p-6 sm:p-7
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#0e1626]
        ${color.border}
      `}
    >
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -right-24 -top-24
          h-64 w-64 rounded-full blur-[80px]
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
          ${color.glow}
        `}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Category Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <div
              className={`
                flex h-14 w-14 shrink-0 items-center
                justify-center rounded-2xl
                border border-white/[0.06]
                ${color.iconBg}
                ${color.iconText}
                transition-transform duration-300
                group-hover:scale-105
              `}
            >
              {CategoryIcon ? (
                <CategoryIcon className="text-2xl" />
              ) : (
                <span className="text-xl font-bold">
                  {category.title.charAt(0)}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Skill Category
              </p>

              <h3 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                {category.title}
              </h3>
            </div>
          </div>

          <span
            className={`
              shrink-0 rounded-full border
              px-3 py-1.5 text-[10px] font-bold
              sm:text-xs
              ${color.badge}
            `}
          >
            {category.skills.length} Skills
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
          {category.description}
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-white/[0.08]" />

        {/* Skill List */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {category.skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className={`
                  flex min-w-0 items-center gap-3
                  rounded-xl border border-transparent
                  bg-white/[0.025]
                  px-3 py-3
                  transition-all duration-200
                  hover:border-white/[0.07]
                  ${color.hoverBg}
                `}
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0 items-center
                    justify-center rounded-lg
                    border border-white/[0.07]
                    bg-white/[0.04]
                  "
                >
                  {Icon ? (
                    <Icon className="text-lg text-slate-300" />
                  ) : (
                    <span className="text-xs font-bold text-slate-400">
                      {skill.name.charAt(0)}
                    </span>
                  )}
                </div>

                <span className="truncate text-sm font-medium text-slate-200">
                  {skill.name}
                </span>

                <span
                  className={`
                    ml-auto h-1.5 w-1.5 shrink-0 rounded-full
                    opacity-70
                    ${color.indicator}
                  `}
                />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center gap-2 border-t border-white/[0.08] pt-5 mt-7">
          <span className={`h-1.5 w-1.5 rounded-full ${color.indicator}`} />

          <p className="text-xs font-medium text-slate-500">
            Part of my technical toolkit
          </p>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
