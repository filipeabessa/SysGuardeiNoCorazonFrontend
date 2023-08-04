import { FC, ReactNode } from 'react';
import Box from '@/components/layout/Box';
import Navbar from '@/components/surfaces/Navbar';
import Typography from '@/components/dataDisplay/Typography';
import Link from '@/components/navigation/Link';

interface BaseLayoutProps {
  children: ReactNode;
  title: string;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children, title }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      position="relative"
    >
      <Navbar />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="20px"
      >
        <Box
          component="header"
        >
          <Typography
            variant="h1"
            color="primary.main"
          >
            {title}
          </Typography>
        </Box>

        <Box
          component="main"
          display="flex"
          flexDirection="column"
          alignItems="center"
          alignSelf="center"
        >
          {children}
        </Box>
      </Box>
      <Box
        component="footer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="50px"
        width="100vw"
        background="secondary.light"
        position="absolute"
        bottom="0"
      >
        <Typography
          variant="body1"
          color="common.white"
          sx={{
            gap: '5px',
          }}
        >
          Desenvolvido por <Link href="github.com/land2land">filipeabessa</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default BaseLayout;