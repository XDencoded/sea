import scss from "./calendar.module.scss";
import type { Event } from "../../../types/calendar.type";

type CalendarDayProps = {
  day: number;
  date: string;
  events: Event[];
  onClick: (event: Event) => void;
};

export const CalendarDay = ({ day, date, events, onClick }: CalendarDayProps) => {
  const hasEvent = events.length > 0;

  return (
    <div
      key={`day-${day}`}
      className={`${scss.calendarDay} ${hasEvent ? scss.calendarDayWithEvent : ""}`}
      onClick={() => hasEvent && onClick(events[0])}
    >
      <span className={hasEvent ? scss.dayNumberWithEvent : scss.dayNumber}>
        {day}
      </span>
      {hasEvent && (
        <div className={scss.eventIndicators}>
          {events.map((event) => {
            return event.themes?.map((theme) => (
            <div
              key={event.id}
              className={scss.eventIndicator}
              style={{ backgroundColor: theme.color }}
            />)
              
            )
          })}
        </div>
      )}
    </div>
  );
};