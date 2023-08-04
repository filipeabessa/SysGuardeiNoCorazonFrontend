import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { ICssProperties } from '@/types';

interface BoxProps extends MuiBoxProps {
  background?: string;
  cursor?: string;
}

export default BoxProps;
