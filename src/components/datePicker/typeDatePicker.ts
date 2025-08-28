export type DateRange = { from?: Date; to?: Date };

export type CustomDatePickerProps =
  | {
      mode?: 'single';
      value?: Date;
      onChange?: (value: Date | undefined) => void;
      label?: string;
      placeholder?: string;
      onReset?: () => void;
      error?: string;
    }
  | {
      mode: 'range';
      value?: DateRange;
      onChange?: (value: DateRange | undefined) => void;
      label?: string;
      placeholder?: string;
      onReset?: () => void;
      error?: string;
    };
