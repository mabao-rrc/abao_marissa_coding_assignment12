export interface RadioButtonProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  testIdPrefix?: string;
}
