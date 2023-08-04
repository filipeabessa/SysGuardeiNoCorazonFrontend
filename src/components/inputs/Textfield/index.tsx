import { MouseEvent, useState } from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

import Box from '@components/layout/Box';
import Typography from '@components/dataDisplay/Typography/index';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { TextFieldProps } from './interfaces';
import { FormLabel as MuiFormLabel } from '@mui/material';

function TextField({
  id,
  label,
  value,
  size = 'medium',
  variant = 'outlined',
  type = 'text',
  onChange,
  fullWidth = true,
  required = false,
  role,
  ...textFieldProps
}: MuiTextFieldProps & TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleShowPassword = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return type;
  };

  return (
    <Box
      minHeight="100px"
      display="flex"
      flexDirection="column"
      gap="6px"
      width="100%"
    >
      <MuiFormLabel
        htmlFor={`${id}-label`}
      >
        <Typography
          id={`${id}-label-text`}
          color="secondary.main"
          sx={{
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '10px',
          }}
        >
          {label}
        </Typography>
      </MuiFormLabel>
      <MuiTextField
        id={id}
        type={handleShowPassword()}
        required={required}
        variant={variant}
        fullWidth={fullWidth}
        size={size}
        value={value}
        onChange={onChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            background: "#e6ebed",
            '&:hover fieldset': {
              borderColor: "secondary.main",
            },
          },
          
        }}
        InputProps={{
          endAdornment:
            type === 'password' ? (
              <InputAdornment position="end" id="icon-button-password">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
        {...textFieldProps}
        data-testid={role}
      />
    </Box>
  );
}

export default TextField;
