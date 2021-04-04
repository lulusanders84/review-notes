import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from '@material-ui/core';
import { handleInputChange } from '../../utils/Inputs';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    marginTop: theme.spacing(3),
    width: "100%",
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function RadioInput({id, label, options}) {
  const dispatch = useDispatch();
  const values = useSelector(state => state.values);
  const classes = useStyles();
  const renderRadioOptions = () => {
    return options.map((option, index) => {
      const label = option.charAt(0).toUpperCase() + option.substring(1);
      return <FormControlLabel value={option} control={<Radio />} label={label} key={index} />;
    })
  }
  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup
            fullwidth="true"
            row
            aria-label={label}
            name={label}
            className={classes.group}
            value={values[id]}
            onChange={e => {handleInputChange({id, dispatch}, e)}}
          >
            {renderRadioOptions()}
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  );
}

RadioInput.propTypes = {
 
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired

};

export default RadioInput