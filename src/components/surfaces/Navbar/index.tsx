import { FC } from 'react';
import Box from '@/components/layout/Box';
import Button from '@/components/inputs/Button';
import Link from '@/components/navigation/Link';
import navLinksProperties from './data';
import Image from 'next/image';

const Navbar: FC = () => {
  return (
    <Box
      component="nav"
      id="navbar-container"
      display="flex"
      alignItems="center"
      background="primary.main"
      width="100vw"
      height="150px"
    >
      <Box
        id="navbar-content-container"
        display="flex"
        padding="0px 80px"
        width="100%"
        justifyContent="space-between"
      >
        <Link
          href="/"
        >
          <Image 
            id="navbar-logo"
            alt="logo"
            src="/logo-no-bg.png"
            width="300"
            height="150"
          />
        </Link>

        <Box
          id="navbar-links-container"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="20px"
        >
          {
            navLinksProperties.map((navLink) => (
              <Link
                key={navLink.label}
                id={`navbar-link-${navLink.label}`}
                href={navLink.href}
                sx={{
                  color: 'common.white',
                }}
              >
                {navLink.label}
              </Link>
            ))
          }      
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar;