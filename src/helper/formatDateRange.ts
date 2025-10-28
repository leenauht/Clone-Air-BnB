import { Locale, format, isSameMonth, isSameYear } from 'date-fns';
import { DateRange } from 'react-day-picker';

export const formatDateRange = (range?: DateRange, locale?: Locale): string => {
  if (!range?.from || !range.to) return '';

  const { from, to } = range;

  const sameYear = isSameYear(from, to);
  const sameMonth = isSameMonth(from, to);

  if (sameYear && sameMonth) {
    return `${format(from, 'MMM dd', { locale })} - ${format(to, 'dd, yyyy', { locale })}`;
  }

  if (sameYear) {
    return `${format(from, 'MMM dd', { locale })} - ${format(to, 'MMM dd, yyyy', { locale })}`;
  }

  return `${format(from, 'MMM dd, yyyy', { locale })} - ${format(to, 'MMM dd, yyyy', { locale })}`;
};
