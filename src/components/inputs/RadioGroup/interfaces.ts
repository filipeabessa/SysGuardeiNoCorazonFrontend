import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';

export interface RadioOptionProps {
  value: string;
  label: string;
}

export interface RadioGroupProps extends MuiRadioGroupProps {
  id: string;
  radioGroupProps?: MuiRadioGroupProps;
  options: RadioOptionProps[];
  label?: string;
  defaultValue: string;
  helperText?: string | false;
  error?: boolean;
}
