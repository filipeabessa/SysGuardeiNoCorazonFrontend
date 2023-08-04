import { FC } from 'react';
import Link from '@/components/Link';
import MuiButton from '@mui/material/Button';

import ButtonProps from './interface';
import { Typography } from '@mui/material';

const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  href,
  color = 'common.white',
  marginTop,
  width,
  ...buttonProps
}) => {
  const renderMuiButton = () => (
    <MuiButton
      variant={variant}
      sx={{
        textTransform: 'none',
        fontWeight: 'bold',
        marginTop: marginTop,
        minWidth: '150px',
        padding: '10px 20px',
        width: width,
      }}
      {...buttonProps}
    >
      {children}
    </MuiButton>
  );

  return href ? (
    <Link href={href}>{renderMuiButton()}</Link>
  ) : (
    renderMuiButton()
  );
}

export default Button;
