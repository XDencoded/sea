export type Theme = {
  id: string; // или string, если в JSON id — строки
  name: string;
  color: string;
};

export type Event = {
  id: string;
  date: string;
  title: string;
  themeId: string[]; // или string[], если в JSON themeId — строки
  themes?: Theme[]; // Опционально, если хотите хранить связанные темы прямо в событии
};

export type CalendarData = {
  themes: Theme[];
  events: Event[];
};