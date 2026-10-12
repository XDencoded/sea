import scss from "./calendar.module.scss";
import type { Event } from "../../../types/calendar.type";
import { motion, AnimatePresence } from "motion/react";

type EventModalProps = {
  event: Event;
  onClose: () => void;
};

export const EventModal = ({ event, onClose }: EventModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={scss.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={scss.modal}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
        >
          <motion.div
            className={scss.modalHeader}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
          >
            <h3 className={scss.modalTitle}>Мероприятие</h3>
            <motion.button
              onClick={onClose}
              className={scss.modalClose}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              ×
            </motion.button>
          </motion.div>
          
          <motion.div
            className={scss.modalContent}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <motion.p
              className={scss.eventTitle}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              {event.title}
            </motion.p>
            
            <motion.p
              className={scss.eventDate}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.2 }}
            >
              Дата: {new Date(event.date).toLocaleDateString("ru-RU")}
            </motion.p>

            {/* Отображение всех тем события */}
            <motion.div
              className={scss.themesContainer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              {event.themes?.map((theme, index) => (
                <motion.div
                  key={theme.id}
                  className={scss.themeBadge}
                  style={{ backgroundColor: theme.color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + index * 0.05, duration: 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {theme.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.button
            onClick={onClose}
            className={scss.buttonPrimary}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.2 }}
            whileHover={{ scale: 1.05, background: "#5a151d" }}
            whileTap={{ scale: 0.95 }}
          >
            Закрыть
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
