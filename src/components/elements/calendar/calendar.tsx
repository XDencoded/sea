import { useState } from "react";
import scss from "./calendar.module.scss";
import { useCalendarData } from "../../../hooks/useCalendarData.hook";
import { EventList } from "./EventList";
import { CalendarGrid } from "./CalendarGrid";
import { ThemeList } from "./ThemeList";
import { EventModal } from "./EventModal";
import { CalendarHeader } from "./CalendarHeader";
import type { Event } from "../../../types/calendar.type";

export const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export function Calendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const { data, loading, error } = useCalendarData();

  if (loading) {
    return <div>Загрузка данных...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!data) {
    return <div>Данные не загружены</div>;
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
    <div className={scss.cal}>
      <h1 className={scss.title}>КАЛЕНДАРЬ {monthName}г.</h1>
      <div className={scss.calendarContainer}>
        <CalendarHeader
          currentDate={currentDate}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />

        <div className={scss.calendarLayout}>
          <div className={scss.sidebar}>
            <EventList events={events} month={month} year={year} />
            <ThemeList themes={themes} />
          </div>

          <CalendarGrid
            year={year}
            month={month}
            events={events}
            onDayClick={handleDayClick}
          />
        </div>

        {isModalOpen && selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </div>
  );
}