import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Counter
 * Animates a number counting up from 0 once it scrolls into view.
 * `value` should be a number, `suffix` is appended after (e.g. "+").
 */
const Counter = ({ value, suffix = "", className = "", duration = 1.4 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const displayRef = useRef(null);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });

    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      <span ref={displayRef}>0{suffix}</span>
    </motion.span>
  );
};

export default Counter;
