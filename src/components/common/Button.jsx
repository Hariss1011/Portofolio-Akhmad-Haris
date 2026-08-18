import { motion } from "framer-motion";

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) => {
  const baseStyles = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2

    px-6
    py-3

    rounded-xl

    text-sm
    font-semibold

    transition-all
    duration-300

    focus:outline-none
    focus:ring-2
    focus:ring-blue-500/40
  `;

  const variants = {
    primary: `
      bg-gradient-to-r
      from-blue-500
      to-cyan-400

      text-slate-950

      shadow-[0_0_25px_rgba(59,130,246,0.35)]

      hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
    `,

    secondary: `
      glass

      text-slate-100

      hover:border-blue-400/50
      hover:text-white
    `,

    dark: `
      bg-white/5

      text-white

      border
      border-white/10

      hover:bg-white/10
      hover:border-blue-400/40
    `,

    outline: `
      bg-transparent

      text-slate-300

      border
      border-slate-700

      hover:border-blue-500/60
      hover:text-blue-300
    `,
  };

  const classes = `
    ${baseStyles}
    ${variants[variant] || variants.primary}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
