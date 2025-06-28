export interface DropdownOption {
  value: string | number;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  testIdPrefix?: string;
}