import MuiGlobalStyles from "@mui/material/GlobalStyles";

import { FC } from 'react';


const GlobalStyles: FC<any> = () => {
  return (
    <MuiGlobalStyles
      styles={{
        body: {
          margin: 0,
          padding: 0,
          overflowX: 'hidden'
        }
      }}
    />
  );
}

export default GlobalStyles;