import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { handleInputs } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

 export function MyCheckBox({id, label, disabled}) {
  const values = useSelector(state => state.values);
  const dispatch = useDispatch()
  const handleChecked = (e) => {
    e.preventDefault();
    dispatch(handleInputs({name: id, value: e.target.checked}))
  }
  return (
    <Grid item xs={12}>
    <FormControl component="fieldset">
      <FormGroup aria-label="position" name="position" value={values[id]} onChange={e => handleChecked(e)} row>
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" onChange={e => handleChecked(e)} checked={values[id]} />}
          label={label}
          labelPlacement="end"
          disabled={disabled}
        />
      </FormGroup>
    </FormControl>
    </Grid>
  );
}

export default MyCheckBox
