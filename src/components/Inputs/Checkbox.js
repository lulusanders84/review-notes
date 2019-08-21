import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

export default function(props) {
  const [value] = React.useState('female');

  function handleChange(event) {
    props.updateValue({name: props.id, value: event.target.checked})
  }
  return (
    <Grid item xs={12}>
    <FormControl component="fieldset">
      <FormGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" onChange={handleChange} checked={props.value} />}
          label={props.label}
          labelPlacement="end"
          disabled={props.disabled}
        />
      </FormGroup>
    </FormControl>
    </Grid>
  );
}
