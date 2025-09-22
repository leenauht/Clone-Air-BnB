import { DateRange } from 'react-day-picker';

export type DateFormToPickerProps = {
  header?: boolean;
  value?: DateRange;
  label?: string;
  className?: string;
  textForm: {
    label: string;
    placeholder: string;
  };
  textTo: {
    label: string;
    placeholder: string;
  };
  onChange?: (value: DateRange | undefined) => void;
  onReset?: () => void;
};
