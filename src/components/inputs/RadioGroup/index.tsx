import { FC } from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';
import MuiFormLabel from '@mui/material/InputLabel';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import Radio from './Radio';

import { RadioGroupProps } from './interfaces';
import { FormHelperText } from '@mui/material';
import Typography from '@/components/dataDisplay/Typography';

const RadioGroup: FC<RadioGroupProps> = ({
  radioGroupProps,
  options,
  defaultValue,
  label,
  error,
  helperText,
  id,
}) => {
  return (
    <>
      <MuiFormLabel
        htmlFor={`${id}-label`}
      >
        <Typography
          id={`${id}-label-text`}
          color="secondary.main"
          sx={{
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          {label}
        </Typography>
      </MuiFormLabel>
      <MuiRadioGroup 
        defaultValue={defaultValue}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
        }}
        {...radioGroupProps}
      >
        {options.map((item) => (
          <MuiFormControlLabel
            control={<Radio />}
            key={item.value}
            value={item.value}
            label={item.label}
          />
        ))}
      </MuiRadioGroup>
      {
        error &&
        <FormHelperText>
          {helperText}
        </FormHelperText>
      }
    </>
  );
}

export default RadioGroup;
