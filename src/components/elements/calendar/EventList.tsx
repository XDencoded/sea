import scss from "./calendar.module.scss";
import type { Event } from "../../../types/calendar.type";
import { motion } from "motion/react";

type EventListProps = {
  events: Event[];
  month: number;
  year: number;
};

export const EventList = ({ events, month, year }: EventListProps) => {
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.h2
        className={scss.sectionTitle}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        События
      </motion.h2>
      
      <motion.ul
        className={scss.eventsList}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {filteredEvents.map((event, index) => (
          <motion.li
            key={event.id}
            className={scss.eventItem}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            {event.themes?.map((theme) => (
              <motion.div
                key={theme.id}
                className={scss.eventTheme}
                style={{ background: theme.color }}
                whileHover={{ scale: 1.2, transformOrigin: "center" }}
              />
            ))}
            <span>{event.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
