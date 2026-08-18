const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: `
      bg-blue-500/10
      text-blue-300
      border-blue-500/25
    `,

    cyan: `
      bg-cyan-500/10
      text-cyan-300
      border-cyan-500/25
    `,

    emerald: `
      bg-emerald-500/10
      text-emerald-300
      border-emerald-500/25
    `,

    purple: `
      bg-purple-500/10
      text-purple-300
      border-purple-500/25
    `,

    orange: `
      bg-orange-500/10
      text-orange-300
      border-orange-500/25
    `,

    slate: `
      bg-white/5
      text-slate-300
      border-white/10
    `,
  };

  return (
    <span
      className={`
        inline-flex
        items-center

        rounded-full

        px-4
        py-2

        text-sm
        font-semibold

        border
        backdrop-blur-sm

        transition-all
        duration-300

        hover:scale-105

        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
