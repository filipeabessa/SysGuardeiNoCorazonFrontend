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
      minHeight="100vh"
      width="100vw"
      position="relative"
    >
      <Navbar />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
        width="100vw"
        paddingTop="30px"
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
          justifyContent="center"
          alignItems="center"
          alignSelf="center"
          justifySelf="center"
          padding="50px"
          marginBottom="50px"
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
        left="0"
      >
        <Typography
          variant="body1"
          color="common.white"
          sx={{
            gap: '5px',
          }}
        >
          Desenvolvido por 
          <a 
            href="https://github.com/filipeabessa"
            target="_blank"
            style={{
              color: 'inherit',
            }}
          >
            filipeabessa
          </a>
          - 2023
        </Typography>
      </Box>
    </Box>
  )
}

export default BaseLayout;