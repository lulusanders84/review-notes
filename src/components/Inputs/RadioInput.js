import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { handleInputChange } from '../../utils/Inputs';

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
            onChange={e => {handleInputChange(props, e)}}
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

export default connect(mapStateToProps)(RadioInput)