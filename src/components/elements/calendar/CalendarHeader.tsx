import scss from "./calendar.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className={scss.calendarHeader}>
      <ChevronLeft size={35} onClick={goToPreviousMonth} className={scss.navButton} />

      <h2 className={scss.monthYear}>{monthName}</h2>

      <ChevronRight size={35} onClick={goToNextMonth} className={scss.navButton} />
    </div>
  );
};
