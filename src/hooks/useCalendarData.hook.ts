import { useState, useEffect } from "react";
import type { CalendarData, Theme, Event } from "../types/calendar.type";

const DATA_URL = "https://raw.githubusercontent.com/XDencoded/calendar-data/refs/heads/GPT/data.json";

export const useCalendarData = () => {
  const [data, setData] = useState<{
    themes: Theme[];
    events: Event[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error("Не удалось загрузить данные");
        }
        const jsonData: CalendarData = await response.json();

        // Преобразуем события, подставляя массив тем вместо themeId
        const eventsWithThemes: Event[] = jsonData.events.map((event) => {
          const themes = jsonData.themes.filter((t) =>
            event.themeId.includes(String(t.id))
          );
          if (themes.length === 0) {
            throw new Error(`Темы с id ${event.themeId.join(", ")} не найдены`);
          }
          return {
            ...event,
            themes,
          };
        });

        setData({
          themes: jsonData.themes,
          events: eventsWithThemes,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};