import MuiGrid, { GridProps } from '@mui/material/Grid';

function Grid({ children, ...props }: GridProps) {
  return <MuiGrid {...props}>{children}</MuiGrid>;
}

export default Grid;
