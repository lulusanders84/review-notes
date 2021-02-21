import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { handleInputChange } from '../../utils/Inputs';
import { connect } from 'react-redux';

 export function MyCheckBox(props) {
  const [value] = React.useState('female');

  return (
    <Grid item xs={12}>
    <FormControl component="fieldset">
      <FormGroup aria-label="position" name="position" value={value} onChange={e => {handleInputChange(props, e)}} row>
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" onChange={e => {handleInputChange(props, e)}} checked={props.value} />}
          label={props.label}
          labelPlacement="end"
          disabled={props.disabled}
        />
      </FormGroup>
    </FormControl>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(MyCheckBox)
