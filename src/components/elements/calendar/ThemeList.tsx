import scss from "./calendar.module.scss";
import type { Theme } from "../../../types/calendar.type";
import { motion } from "motion/react";

type ThemeListProps = {
  themes: Theme[];
};

export const ThemeList = ({ themes }: ThemeListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
    >
      <motion.h2
        className={scss.sectionTitle}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Тема
      </motion.h2>
      
      <motion.div
        className={scss.themesContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {themes.map((theme, index) => (
          <motion.div
            key={theme.id}
            className={scss.themeBadge}
            style={{ backgroundColor: theme.color }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme.name}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
