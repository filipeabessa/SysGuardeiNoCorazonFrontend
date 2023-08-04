import { ICssProperties } from '@/types';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

type ButtonColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | string;

interface ButtonProps extends ICssProperties, Omit<MuiButtonProps, 'color'> {
  variant?: 'contained' | 'outlined' | 'text';
  href?: string;
  children: React.ReactNode;
  color?: ButtonColor;
  width?: string;
  marginTop?: string;
}

export default ButtonProps;
