

export interface TextFieldProps {
  id: string;
  label?: string;
  type?: string;
  variant?: 'outlined' | 'standard' | 'filled';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  size?: 'small' | 'medium';
}
