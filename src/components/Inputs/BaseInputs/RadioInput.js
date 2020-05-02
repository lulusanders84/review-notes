import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from '@material-ui/core';
import { withHandleChange, setComposed } from '../../../HOCs';

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

function RadioInput(props) {
  const classes = useStyles();
  function handleChange(event) {
    if(props.id === "reviewed" || props.id === "pa-deter") {
      props.handleReviewed(event);
    }
    props.handleChange(event);
  }

  const renderRadioOptions = () => {
    const options = props.options;
    return options.map((option, index) => {
      const label = option.charAt(0).toUpperCase() + option.substring(1);
      return <FormControlLabel value={option} control={<Radio />} label={label} key={index} />;
    })
  }
  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{props.label}</FormLabel>
          <RadioGroup
            fullwidth="true"
            row
            aria-label={props.label}
            name={props.label}
            className={classes.group}
            value={props.values[props.id]}
            onChange={handleChange}
          >
            {renderRadioOptions()}
          </RadioGroup>
        </FormControl>
      </div>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  values: state.values,
});

const composed = setComposed(mapStateToProps, [withHandleChange], RadioInput);
export default composed;