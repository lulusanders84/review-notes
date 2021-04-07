import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { handleInputChange } from '../../utils/Inputs';

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

export function SimpleSelect(props) {
  const classes = useStyles();
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
          onChange={e => {handleInputChange(props, e)}}
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

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(SimpleSelect)
