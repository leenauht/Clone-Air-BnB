import { Locale, format, isSameMonth, isSameYear } from 'date-fns';
import { DateRange } from 'react-day-picker';

export const formatDateRange = (range?: DateRange, locale?: Locale): string => {
  if (!range?.from || !range.to) return '';

  const { from, to } = range;

  const sameYear = isSameYear(from, to);
  const sameMonth = isSameMonth(from, to);

  const patternFrom = sameYear ? 'MMM dd' : 'MMM dd, yyyy';
  const patternTo = sameYear && sameMonth ? 'dd, yyyy' : 'MMM dd, yyyy';

  return `${format(from, patternFrom, { locale })} - ${format(to, patternTo, { locale })}`;
};
