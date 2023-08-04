import { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { ElementType } from 'react';

interface BoxProps extends MuiBoxProps {
  background?: string;
  cursor?: string;
  component?: ElementType;
}

export default BoxProps;
