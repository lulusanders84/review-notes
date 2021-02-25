import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {handleInputChange, setProps} from '../../utils/Inputs/';
import { textInputPropValues } from '../../data/inputPropValues';
// import { formatCodesToString } from '../../utils/formatCodes';

function TextInput(props) {
  const { id, values, shrink } = props;
  const inputProps = setProps(props, textInputPropValues)

  return (
    <Grid item xs={12}>
      <TextField
        {...inputProps}
        fullWidth={true}
        margin="dense"
        onChange={e => {handleInputChange(props, e)}}
        value={values[id]}
        InputLabelProps={{shrink: shrink}}
      />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(TextInput)


