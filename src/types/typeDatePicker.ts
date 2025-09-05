import { DateRange } from 'react-day-picker';

export type CustomDatePickerProps =
  | {
      id: string;
      mode: 'single';
      value?: Date;
      onChange?: (value: Date | undefined) => void;
      label?: string;
      placeholder?: string;
      onReset?: () => void;
      error?: string;
    }
  | {
      id: string;
      mode: 'range';
      value?: DateRange;
      onChange?: (value: DateRange | undefined) => void;
      label?: string;
      placeholder?: string;
      onReset?: () => void;
      error?: string;
    };
