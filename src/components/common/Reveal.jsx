import { motion } from "framer-motion";

/**
 * Reveal
 * Fades + slides an element into view once it enters the viewport.
 * Use for section titles, standalone blocks, images, etc.
 */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 28,
  x = 0,
  once = true,
  amount = 0.2,
  as = "div",
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default Reveal;
