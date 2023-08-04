import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

interface CustomLinkProps extends NextLinkProps {
  children: React.ReactNode;
  sx?: any;
  href: string;
  id?: string;
}

const Link: React.FC<CustomLinkProps> = ({ 
  href, 
  children,
  sx,
  id,
}) => {
  return (
      <MuiLink
        id={id}
        href={href} 
        component={NextLink}
        sx={{
          ...sx,
          textDecoration: 'none',
        }}
      >
        {children}
      </MuiLink>
  );
};

export default Link;