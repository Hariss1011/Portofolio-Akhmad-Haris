const ToolBadge = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <div
      className="
        flex
        items-center
        gap-3

        px-5
        py-3

        rounded-xl

        bg-white/[0.06]
        border
        border-white/10

        shadow-sm

        text-slate-200
        font-medium

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-lg
        hover:border-blue-500
        hover:text-blue-300

        cursor-default
      "
    >
      {Icon && <Icon className="text-lg" />}

      <span>{tool.name}</span>
    </div>
  );
};

export default ToolBadge;
