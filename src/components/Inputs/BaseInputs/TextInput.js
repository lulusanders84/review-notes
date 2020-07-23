import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withHandleChange, setComposed } from '../../../HOCs';

function TextInput(props) {
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
        onChange={props.handleChange}
        value={props.values[props.id]}
        InputLabelProps={{shrink: props.shrink}}
        disabled={props.disabled}
        helperText={props.helperText}
      />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  values: state.values,
});

const composed = setComposed(mapStateToProps, [withHandleChange], TextInput);
export default composed;