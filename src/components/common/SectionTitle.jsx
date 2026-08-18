const SectionTitle = ({ subtitle, title, description, center = true }) => {
  return (
    <div
      className={`
        mb-16
        lg:mb-20
        ${center ? "text-center" : "text-left"}
      `}
    >
      <span
        className="
          glass

          inline-flex
          items-center
          gap-2

          px-4
          py-1.5

          rounded-full

          text-blue-300

          font-semibold
          text-xs
          tracking-[0.2em]
          uppercase
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
        {subtitle}
      </span>

      <h2
        className={`
          mt-6

          text-4xl
          lg:text-5xl

          font-extrabold

          text-white

          leading-tight
          tracking-tight
        `}
      >
        {title}
      </h2>

      <p
        className={`
          mt-6

          max-w-2xl
          ${center ? "mx-auto" : ""}

          text-lg

          leading-8

          text-slate-400
        `}
      >
        {description}
      </p>

      <div
        className={`
          w-16
          h-[3px]

          bg-gradient-to-r
          from-blue-500
          to-cyan-400

          rounded-full

          ${center ? "mx-auto" : ""}

          mt-8
        `}
      />
    </div>
  );
};

export default SectionTitle;
