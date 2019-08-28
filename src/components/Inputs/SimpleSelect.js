import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  function handleChange(event) {
    props.updateValue({name: props.id, value: event.target.value})
  }
  const menuItems = props.options.map((option, index) => {
    return <MenuItem key={index} value={option}>{option}</MenuItem>
  })
  return (
      <Grid item xs={12}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-label-placeholder">
          {props.label}
        </InputLabel>
        <Select
          value={props.values[props.id]}
          onChange={handleChange}
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name={props.id}
          className={classes.selectEmpty}
          fullWidth={true}
          margin="dense"
        >
        {menuItems}
        </Select>
      </FormControl>
      </Grid>
  );
}
