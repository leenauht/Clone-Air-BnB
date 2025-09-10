export interface DropdownOption {
  label: string;
  value: string;
  prefix?: React.ReactNode;
  subfix?: React.ReactNode;
  color?: string;
  action?: () => void;
}

export interface DropdownProps {
  label?: string;
  activator?: React.ReactNode;
  options: readonly DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  clsDropdownMenu?: string;
  isChevronDown?: boolean;
}
