const colorClasses = {
  blue: {
    iconBg: "bg-[#EEE5DF]",
    iconText: "text-[#A45F45]",
    number: "text-[#B66E4E]",
    badge: "bg-[#F3EDE7] text-[#965A43] border-[#E8D8CC]",
    skillIcon: "bg-[#F3EDE7] text-[#A45F45]",
    hover: "hover:border-[#D7B9A6] hover:bg-[#FCFAF7]",
    accent: "bg-[#B66E4E]",
  },

  emerald: {
    iconBg: "bg-[#E8EDE5]",
    iconText: "text-[#657B5E]",
    number: "text-[#788B70]",
    badge: "bg-[#EEF2EB] text-[#5E7357] border-[#DCE5D7]",
    skillIcon: "bg-[#E8EDE5] text-[#657B5E]",
    hover: "hover:border-[#B9C8B2] hover:bg-[#FAFBF8]",
    accent: "bg-[#788B70]",
  },

  orange: {
    iconBg: "bg-[#F1EAE1]",
    iconText: "text-[#A8784F]",
    number: "text-[#B68A60]",
    badge: "bg-[#F6F0E8] text-[#916D49] border-[#E9DDCD]",
    skillIcon: "bg-[#F1EAE1] text-[#A8784F]",
    hover: "hover:border-[#D8C2A8] hover:bg-[#FCFAF7]",
    accent: "bg-[#B68A60]",
  },

  purple: {
    iconBg: "bg-[#ECEAE5]",
    iconText: "text-[#6D7165]",
    number: "text-[#777B70]",
    badge: "bg-[#F0F0EB] text-[#62665D] border-[#E1E2D9]",
    skillIcon: "bg-[#ECEAE5] text-[#6D7165]",
    hover: "hover:border-[#C9CBBE] hover:bg-[#FAFAF7]",
    accent: "bg-[#788B70]",
  },
};

const SkillCard = ({ category, index }) => {
  const color = colorClasses[category.color] || colorClasses.blue;
  const CategoryIcon = category.icon;

  return (
    <article
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-2xl
        border border-[#E4E3DC]
        bg-white p-5 sm:p-6
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-[0_10px_30px_rgba(45,48,39,0.06)]
      "
    >
      {/* CATEGORY HEADER */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3.5">
          <div
            className={`
              flex h-12 w-12 shrink-0 items-center
              justify-center rounded-xl
              ${color.iconBg} ${color.iconText}
            `}
          >
            {CategoryIcon ? (
              <CategoryIcon className="text-xl" />
            ) : (
              <span className="text-lg font-bold">
                {category.title.charAt(0)}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#92948B]">
              Skill Category
            </p>

            <h3 className="mt-1 text-lg font-bold leading-tight tracking-tight text-[#292D26] sm:text-xl">
              {category.title}
            </h3>
          </div>
        </div>

        <span
          className={`
            shrink-0 rounded-full border
            px-2.5 py-1 text-[10px] font-bold
            ${color.badge}
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-4 min-h-[48px] text-[13px] leading-[1.75] text-[#62665D] sm:text-sm">
        {category.description}
      </p>

      {/* DIVIDER */}
      <div className="my-4 h-px bg-[#ECEBE5]" />

      {/* SKILL LIST */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {category.skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className={`
                flex min-w-0 items-center gap-2.5
                rounded-xl border border-[#EEEEE9]
                bg-[#FAFAF7] px-3 py-2.5
                transition-all duration-200
                ${color.hover}
              `}
            >
              <div
                className={`
                  flex h-8 w-8 shrink-0 items-center
                  justify-center rounded-lg
                  ${color.skillIcon}
                `}
              >
                {Icon ? (
                  <Icon className="text-[15px]" />
                ) : (
                  <span className="text-xs font-bold">
                    {skill.name.charAt(0)}
                  </span>
                )}
              </div>

              <span className="min-w-0 text-xs font-semibold leading-5 text-[#454A40] sm:text-[13px]">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default SkillCard;
