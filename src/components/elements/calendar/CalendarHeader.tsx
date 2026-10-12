import scss from "./calendar.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

type CalendarHeaderProps = {
  currentDate: Date;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
};

export const CalendarHeader = ({
  currentDate,
  goToPreviousMonth,
  goToNextMonth,
}: CalendarHeaderProps) => {
  const monthName = currentDate.toLocaleDateString("ru-RU", {
    month: "long",
  });

  return (
    <motion.div
      className={scss.calendarHeader}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.button
        onClick={goToPreviousMonth}
        className={scss.navButton}
        whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronLeft size={35} />
      </motion.button>

      <motion.h2
        className={scss.monthYear}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        {monthName}
      </motion.h2>

      <motion.button
        onClick={goToNextMonth}
        className={scss.navButton}
        whileHover={{ scale: 1.1, background: "rgba(255, 255, 255, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronRight size={35} />
      </motion.button>
    </motion.div>
  );
};
