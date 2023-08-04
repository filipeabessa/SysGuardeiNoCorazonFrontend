import { FC } from 'react';
import Box from '@/components/layout/Box';
import Button from '@/components/inputs/Button';
import Link from '@/components/navigation/Link';
import navLinksProperties from './data';
import Image from 'next/image';

const Navbar: FC = () => {
  return (
    <Box
      id="navbar-container"
      display="flex"
      alignItems="center"
      background="secondary.main"
      width="100vw"
      height="150px"
    >
      <Box
        id="navbar-content-container"
        display="flex"
        padding="0px 100px"
        width="100%"
        justifyContent="space-between"
      >
        <Image 
          id="navbar-logo"
          alt="land2land logo"
          src="/images/logos/logo-land2land-white.png"
          width="200"
          height="100"
        />

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