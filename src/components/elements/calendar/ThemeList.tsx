import scss from "./calendar.module.scss";
import type { Theme } from "../../../types/calendar.type";

type ThemeListProps = {
  themes: Theme[];
};

export const ThemeList = ({ themes }: ThemeListProps) => {
  return (
    <div>
      <h2 className={scss.sectionTitle}>ТЕМА</h2>
      <div className={scss.themesContainer}>
        {themes.map((theme) => (
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
  );
};