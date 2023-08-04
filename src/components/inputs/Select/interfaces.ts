import { SelectProps as MuiSelectProps } from '@mui/material/Select';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends MuiSelectProps {
  selectProps?: MuiSelectProps;
  id: string;
  options: SelectOption[];
  label: string;
  defaultValue: string;
  helperText?: string;
}
