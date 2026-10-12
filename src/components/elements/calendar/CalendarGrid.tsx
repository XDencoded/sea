import scss from "./calendar.module.scss";
import { CalendarDay } from "./CalendarDay";
import { daysOfWeek } from "./calendar";
import type { Event } from "../../../types/calendar.type";

type CalendarGridProps = {
  year: number;
  month: number;
  events: Event[];
  onDayClick: (event: Event) => void;
};

export const CalendarGrid = ({ year, month, events, onDayClick }: CalendarGridProps) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const formatDate = (day: number): string => {
    const date = new Date(year, month, day);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const getEventsForDate = (date: string): Event[] => {
    return events.filter((event) => event.date === date);
  };

  const renderDays = () => {
    const days = [];

    // Дни из предыдущего месяца
    for (let i = 0; i < firstDay - 1; i++) {
      const day = daysInPrevMonth - (firstDay - 2) + i;
      days.push(
        <div key={`prev-${day}`} className={scss.calendarDayOther}>
          {day}
        </div>
      );
    }

    // Дни текущего месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const date = formatDate(day);
      const dayEvents = getEventsForDate(date);
      days.push(
        <CalendarDay
          key={`day-${day}`}
          day={day}
          date={date}
          events={dayEvents}
          onClick={onDayClick}
        />
      );
    }

    // Дни из следующего месяца
    const remainingDays = 42 - (firstDay + daysInMonth - 1);
    for (let day = 1; day <= remainingDays; day++) {
      days.push(
        <div key={`next-${day}`} className={scss.calendarDayOther}>
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className={scss.calendarGridContainer}>
      <div className={scss.weekDays}>
        {daysOfWeek.map((day) => (
          <div key={day} className={scss.weekDay}>
            {day}
          </div>
        ))}
      </div>
      <div className={scss.calendarGrid}>{renderDays()}</div>
    </div>
  );
};