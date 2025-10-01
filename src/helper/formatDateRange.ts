import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { DateRange } from 'react-day-picker';

export const formatDateRange = (range?: DateRange): string => {
  if (!range?.from || !range.to) return '';

  const { from, to } = range;

  const dayFrom = format(from, 'dd', { locale: enUS });
  const dayTo = format(to, 'dd', { locale: enUS });
  const monthFrom = format(from, 'MMM', { locale: enUS });
  const monthTo = format(to, 'MMM', { locale: enUS });
  const yearFrom = format(from, 'yyyy', { locale: enUS });
  const yearTo = format(to, 'yyyy', { locale: enUS });

  const sameYear = yearFrom === yearTo;
  const sameMonth = monthFrom === monthTo;
  return sameYear
    ? sameMonth
      ? `${monthFrom} ${dayFrom} - ${dayTo}, ${yearTo}`
      : `${monthFrom} ${dayFrom} - ${monthTo} ${dayTo}, ${yearTo}`
    : `${monthFrom} ${dayFrom}, ${yearFrom} - ${monthTo} ${dayTo}, ${yearTo}`;
};
