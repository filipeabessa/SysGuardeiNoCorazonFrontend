import { FC, useState } from 'react';
import MuiSelect, {
  SelectChangeEvent as MuiSelectChangeEvent,
} from '@mui/material/Select';
import { FormLabel as MuiFormLabel } from '@mui/material';
import MuiMenuItem from '@mui/material/MenuItem';

import { SelectProps } from './interfaces';
import MuiFormControl from '@mui/material/FormControl';
import { FormHelperText as MuiFormHelperText } from '@mui/material';
import Typography from '@/components/dataDisplay/Typography';

const Select: FC<SelectProps> = ({ 
  selectProps, 
  id,
  options, 
  defaultValue, 
  label,
  helperText,
  variant,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: MuiSelectChangeEvent<any>) => {
    setValue(event.target.value);
  };

  return (
      <MuiFormControl 
        variant="outlined"
        id={`${id}-form-control`}
        fullWidth
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
        <MuiSelect
          id={id}
          value={value}
          onChange={handleChange}
          variant={variant}
          {...selectProps}
        >
          {options.map((item) => (
            <MuiMenuItem key={item.value} value={item.value}>
              {item.label}
            </MuiMenuItem>
          ))}
        </MuiSelect>
        {
          helperText && (
            <MuiFormHelperText>{ helperText }</MuiFormHelperText>
          )
        }
      </MuiFormControl>
  );
}

export default Select;
