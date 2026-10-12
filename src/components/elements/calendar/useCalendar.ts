'use client';
import { useState, useEffect } from 'react';

export function useMonthRangeFormatted(): string {
  const [monthRange, setMonthRange] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    // Начало месяца
    const start = new Date(year, month, 1);
    const startDay = start.getDate().toString().padStart(2, '0');
    const startMonth = (start.getMonth()).toString().padStart(2, '0');

    // Конец месяца
    const end = new Date(year, month, 0);
    const endDay = end.getDate().toString().padStart(2, '0');
    const endMonth = (end.getMonth()).toString().padStart(2, '0');

    // Формируем строку в формате "DD.MM-DD.MM"
    const formattedRange = `${startDay}.${startMonth}-${endDay}.${endMonth}`;
    setMonthRange(formattedRange);
  }, []);

  return monthRange;
}
