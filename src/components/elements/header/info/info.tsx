import { useScroll, motion } from "motion/react";
import scss from "./info.module.scss";

export function Info() {
  const { scrollYProgress } = useScroll();
  const text = "Областной молодежный центр «Маяк»";

  return (
    <motion.div
      className={scss.info}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={scss.textContainer}>
        {Array.from({ length: 10 }, (_, i) => (
          <motion.span
            style={{
              x: -scrollYProgress * 10 * (i + 1),
            }}
            className={scss.text}
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: -scrollYProgress * 10 * (i + 1) }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 0.8)" }}
          >
            {text}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
