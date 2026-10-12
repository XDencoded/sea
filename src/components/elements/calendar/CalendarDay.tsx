import scss from "./calendar.module.scss";
import type { Event } from "../../../types/calendar.type";
import { motion } from "motion/react";

type CalendarDayProps = {
  day: number;
  date: string;
  events: Event[];
  onClick: (event: Event) => void;
};

export const CalendarDay = ({ day, date, events, onClick }: CalendarDayProps) => {
  const hasEvent = events.length > 0;

  return (
    <motion.div
      key={`day-${day}`}
      className={`${scss.calendarDay} ${hasEvent ? scss.calendarDayWithEvent : ""}`}
      onClick={() => hasEvent && onClick(events[0])}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      whileHover={hasEvent ? { scale: 1.05, y: -3 } : {}}
      whileTap={hasEvent ? { scale: 0.95 } : {}}
    >
      <span className={hasEvent ? scss.dayNumberWithEvent : scss.dayNumber}>
        {day}
      </span>
      {hasEvent && (
        <motion.div
          className={scss.eventIndicators}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {events.map((event) => {
            return event.themes?.map((theme) => (
              <motion.div
                key={event.id}
                className={scss.eventIndicator}
                style={{ backgroundColor: theme.color }}
                whileHover={{ scale: 1.3, transformOrigin: "center" }}
              />
            ));
          })}
        </motion.div>
      )}
    </motion.div>
  );
};
