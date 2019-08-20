import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 75,
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  // },
  dense: {
    marginTop: 14,
  },
  menu: {
    width: 200,
  },
}));

export default function TextInput(props) {
  const classes = useStyles();
  const handleChange = event => {
    event.persist();
    const value = {name: props.id, value: event.target.value };
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
      />
    </Grid>
  );
}