import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography, Checkbox, FormGroup } from '@mui/material';

export default function CallRating() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Rate call
      </Typography>
      <div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Was the issue solved?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="solved" control={<Radio />} label="Solved" />
            <FormControlLabel value="not_solved" control={<Radio />} label="Not solved" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Product ID / attended service</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="account_error" control={<Radio />} label="Service - account error" />
            <FormControlLabel value="service_shipping " control={<Radio />} label="Service - shipping problem" />
            <FormControlLabel value="arrived_damaged " control={<Radio />} label="Product - arrived damaged" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel component="legend">Select the elements that apply with this call user</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox />} label="User - annoying" />
            <FormControlLabel control={<Checkbox />} label="User - happy" />
            <FormControlLabel control={<Checkbox />} label="User - impatient" />
            <FormControlLabel control={<Checkbox />} label="User - calm" />
            <FormControlLabel control={<Checkbox />} label="User - loyal" />
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
}