export interface DropdownOption {
  label: string;
  value: string;
  prefix?: React.ReactNode;
  subfix?: React.ReactNode;
}

export interface DropdownProps {
  label?: string;
  trigger?: React.ReactNode;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  clsDropdownMenu?: string;
  isChevronDown?: boolean;
}
