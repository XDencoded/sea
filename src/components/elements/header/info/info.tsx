import { useScroll, motion } from "framer-motion";
import scss from "./info.module.scss";

export function Info() {
  const { scrollYProgress } = useScroll();
  const text = "Обласной молодежный центр «Маяк»";

  return (
    <div className={scss.info}>
      <div className={scss.textContainer}>
        {Array.from({ length: 10 }, (_, i) => (
          <motion.span
            style={{
              x: -scrollYProgress * 10 * (i + 1),
            }}
            className={scss.text}
            key={i}
          >
            {text}
          </motion.span>
        ))}
      </div>
    </div>
  );
}