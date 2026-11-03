const ToolBadge = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <div
      className="
        flex min-h-[48px] items-center gap-2.5
        rounded-xl border border-[#EAE9E2]
        bg-[#FAFAF7] px-3 py-2.5
        transition-all duration-200
        hover:border-[#D7B9A6]
        hover:bg-[#F3EDE7]
      "
    >
      {Icon && <Icon className="shrink-0 text-base text-[#8A796B]" />}

      <span className="text-xs font-semibold leading-5 text-[#50554C]">
        {tool.name}
      </span>
    </div>
  );
};

export default ToolBadge;
