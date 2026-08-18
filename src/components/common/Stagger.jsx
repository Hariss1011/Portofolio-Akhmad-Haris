import { motion } from "framer-motion";

/**
 * StaggerContainer + StaggerItem
 * Wrap a grid/list with StaggerContainer, and wrap each mapped
 * child with StaggerItem. Children animate in one after another
 * as the container enters the viewport.
 *
 * Example:
 *   <StaggerContainer className="grid gap-6 md:grid-cols-2">
 *     {items.map((item) => (
 *       <StaggerItem key={item.id}>
 *         <Card>{item.title}</Card>
 *       </StaggerItem>
 *     ))}
 *   </StaggerContainer>
 */

export const StaggerContainer = ({
  children,
  className = "",
  stagger = 0.12,
  delayChildren = 0,
  once = true,
  amount = 0.15,
  as = "div",
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export const StaggerItem = ({
  children,
  className = "",
  y = 24,
  duration = 0.55,
  as = "div",
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </Component>
  );
};
