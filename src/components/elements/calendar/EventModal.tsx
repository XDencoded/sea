import scss from "./calendar.module.scss";
import type { Event } from "../../../types/calendar.type";

type EventModalProps = {
  event: Event;
  onClose: () => void;
};

export const EventModal = ({ event, onClose }: EventModalProps) => {
  return (
    <div className={scss.modalOverlay}>
      <div className={scss.modal}>
        <div className={scss.modalHeader}>
          <h3 className={scss.modalTitle}>Мероприятие</h3>
          <button onClick={onClose} className={scss.modalClose}>
            ×
          </button>
        </div>
        <div className={scss.modalContent}>
          <p className={scss.eventTitle}>{event.title}</p>
          <p className={scss.eventDate}>
            Дата: {new Date(event.date).toLocaleDateString("ru-RU")}
          </p>

          {/* Отображение всех тем события */}
          <div className={scss.themesContainer}>
            {event.themes?.map((theme) => (
              <div
                key={theme.id}
                className={scss.themeBadge}
                style={{ backgroundColor: theme.color }}
              >
                {theme.name}
              </div>
            ))}
          </div>
        </div>
        <button onClick={onClose} className={scss.buttonPrimary}>
          Закрыть
        </button>
      </div>
    </div>
  );
};