import { CSSProperties } from "react";

declare module '@mui/material/styles' {
  interface Theme {
    common: {
      white: CSSProperties['color'];
    };
    grey: {
      main: CSSProperties['color'];
      50: CSSProperties['color'];
      200: CSSProperties['color'];
      300: CSSProperties['color'];
      600: CSSProperties['color'];
    };
    info: {
      light: CSSProperties['color'];
      main: CSSProperties['color'];
    };
  }

  interface Palette {
    green?: Palette['primary'];
  }
  interface PaletteOptions {
    green?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    teal?: string;
  }
  interface SimplePaletteColorOptions {
    teal?: string;
  }
}

const palette = {
  common: {
    white: '#FFFFFF',
  },
  grey: {
    main: '#2a2a2a',
    50: '#F2F2F2',
    100: '#F3F4F8',
    200: '#EBEBEB',
    300: '#D2D4DA',
    400: '#B3B5BD',
    600: '#585858',
    700: '#404252',
  },
  info: {
    light: '#009CB3',
    main: '#1565c0',
  },
  primary: {
    main: '#F3A125',
  },
  secondary: {
    main: '#12294D',
  },
  tertiary: {
    main: '#ffda6f',
  },
  black: {
    main: '#111111',
  },
};

export default palette;
