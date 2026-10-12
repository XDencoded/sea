import { useState } from "react";
import scss from "./calendar.module.scss";
import { useCalendarData } from "../../../hooks/useCalendarData.hook";
import { EventList } from "./EventList";
import { CalendarGrid } from "./CalendarGrid";
import { ThemeList } from "./ThemeList";
import { EventModal } from "./EventModal";
import { CalendarHeader } from "./CalendarHeader";
import type { Event } from "../../../types/calendar.type";
import { motion } from "motion/react";

export const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const { data, loading, error } = useCalendarData();

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={scss.loading}
      >
        Загрузка данных...
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={scss.error}
      >
        Ошибка: {error}
      </motion.div>
    );
  }

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={scss.error}
      >
        Данные не загружены
      </motion.div>
    );
  }

  const { themes, events } = data;

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDayClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const monthName = currentDate.toLocaleDateString("ru-RU", {
    year: "numeric",
  });

  return (
    <motion.div
      className={scss.cal}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className={scss.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Календарь {monthName}г.
      </motion.h1>
      
      <motion.div
        className={scss.calendarContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <CalendarHeader
          currentDate={currentDate}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />

        <motion.div
          className={scss.calendarLayout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className={scss.sidebar}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <EventList events={events} month={month} year={year} />
            <ThemeList themes={themes} />
          </motion.div>

          <motion.div
            className={scss.calendarGridContainer}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <CalendarGrid
              year={year}
              month={month}
              events={events}
              onDayClick={handleDayClick}
            />
          </motion.div>
        </motion.div>

        {isModalOpen && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <EventModal event={selectedEvent} onClose={() => setIsModalOpen(false)} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
