import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {handleInputChange} from '../../utils/Inputs/';

function TextInput(props) {
  const value = props.index !== undefined
    ? props.values[props.id][props.index]
    : props.values[props.id]
  return (
    <Grid item xs={12}>
      <TextField
        multiline={props.multiline}
        rows={props.rows}
        type={props.type}
        id={props.id}
        label={props.label}
        placeholder={props.placeholder}
        fullWidth={true}
        margin="dense"
        onChange={e => {handleInputChange(props, e)}}
        value={value}
        InputLabelProps={{shrink: props.shrink}}
        disabled={props.disabled}
        helperText={props.helperText}
        classes={props.classes}
      />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(TextInput)


