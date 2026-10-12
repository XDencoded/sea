import scss from "./calendar.module.scss";
import type { Event } from "../../../types/calendar.type";

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
    <div>
      <h2 className={scss.sectionTitle}>СОБЫТИЯ</h2>
      <ul className={scss.eventsList}>
        {filteredEvents.map((event) => (
          <li key={event.id} className={scss.eventItem}>
            {event.themes?.map((theme) => (
              <div
                key={theme.id}
                className={scss.eventTheme}
                style={{ background: theme.color }}
              />
            ))}
            <span>{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};