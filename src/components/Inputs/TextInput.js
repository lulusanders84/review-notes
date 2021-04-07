import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {handleInputChange} from '../../utils/Inputs/';
import { formatCodesToString } from '../../utils/formatCodes';

function TextInput({id, label, multiline, rows, type, disabled, helperText}) {
  const values = useSelector(state => state.values);
  const [shrink, setShrink] = useState(values[id] !== "" ? true : false);
  const onFocus = () => setShrink(true);
  const onBlur = () => setShrink(values[id] !== "" ? true : false);
  const inputProps = {onFocus, onBlur, label, multiline, rows, type, disabled, helperText};
  const value = id === "code" ? formatCodesToString(values[id]) : values[id];
  const dispatch = useDispatch();

  return (
    <Grid item xs={12}>
      <TextField
        {...inputProps}
        fullWidth={true}
        onChange={e => {handleInputChange({id, dispatch}, e)}}
        value={value}
        InputLabelProps={{shrink}}
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
  "disabled": PropTypes.bool,
  "helperText": PropTypes.string,

};

TextInput.defaultProps = {

  "multiline": false,
  "rows": "1",
  "type": "text",
  "disabled": false,
  "helperText": ""
};

export default TextInput


