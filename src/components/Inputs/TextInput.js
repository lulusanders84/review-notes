import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

function TextInput(props) {
  if(props.id === "info") {console.log(props)}
  const handleChange = event => {
    event.persist();
    const value = {name: props.id, value: event.target.value};
    props.onBlur(value);
  };
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
        onChange={handleChange}
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

export default connect(mapStateToProps)(TextInput)