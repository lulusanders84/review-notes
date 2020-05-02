import React from 'react';
import MUICheckbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { withHandleChange, setComposed } from '../../../HOCs';

function Checkbox(props) {
  return (
    <Grid item xs={12}>
    <FormControl component="fieldset">
      <FormGroup aria-label="position" name="position" onChange={props.handleChange} row>
        <FormControlLabel
          control={<MUICheckbox color="primary" onChange={props.handleChange} checked={props.value} />}
          label={props.label}
          labelPlacement="end"
          disabled={props.disabled}
        />
      </FormGroup>
    </FormControl>
    </Grid>
  );
}

const composed = setComposed(null, [withHandleChange], Checkbox);
export default composed;