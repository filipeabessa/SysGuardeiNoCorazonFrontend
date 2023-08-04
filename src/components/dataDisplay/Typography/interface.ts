import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { OverridableStringUnion } from '@mui/types';
import { Variant } from '@mui/material/styles/createTypography';

type CustomVariant = OverridableStringUnion<Variant, 'textBodySmall'>;

export interface ITypography extends Omit<MuiTypographyProps, 'variant'> {
  variant?: CustomVariant;
  color?: string;
}