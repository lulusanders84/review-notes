import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {handleInputChange} from '../../utils/Inputs/';
import { formatCodesToString } from '../../utils/formatCodes';

function TextInput({id, label, multiline, rows, type, placeholder, disabled, helperText, shrink}) {
  const values = useSelector(state => state.values);
  const inputProps = {label, multiline, rows, type, placeholder, disabled, helperText};
  const value = id === "code" ? formatCodesToString(values[id]) : values[id];
  const dispatch = useDispatch();
  if(id === "clinicalRationale") {
    console.log(values)
  }
  return (
    <Grid item xs={12}>
      <TextField
        {...inputProps}
        fullWidth={true}
        margin="dense"
        onChange={e => {handleInputChange({id, dispatch}, e)}}
        value={value}
        InputLabelProps={{shrink: shrink}}
      />
    </Grid>
  );
}

TextInput.propTypes = {
 
  "multiline": PropTypes.bool,
  "rows": PropTypes.string,
  "type": PropTypes.string,
  "id": PropTypes.string.isRequired,
  "label": PropTypes.string.isRequired,
  "placeholder": PropTypes.string,
  "disabled": PropTypes.bool,
  "helperText": PropTypes.string,
  "shrink": PropTypes.bool

};

TextInput.defaultProps = {

  "multiline": false,
  "rows": "1",
  "type": "text",
  "placeholder": "",
  "disabled": false,
  "helperText": "",
  "shrink": true

};

export default TextInput


