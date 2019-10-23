import React, { useEffect } from 'react';
import { Typography, TextField,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import { updateClaimsGoal, updateWorkdays } from '../../actions/claims';
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { getDailyTarget } from '../../utils/ClaimCount';

const MultipleDatesCalendar = withMultipleDates(Calendar);

const useStyles = makeStyles({
  paper: {
    width: "425px",
    marginTop: "10px"
  },
  input: {
    paddingTop: "15px"
  }
})

const ClaimSettings = (props) => {
  const classes = useStyles();
  useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  }, [])
  const handleGoalChange = (event) => {
    const claimsGoal = event.target.value;
    props.dispatch(updateClaimsGoal(claimsGoal))
  }
  const handleCalendarSelect = (event) => {
    props.dispatch(updateWorkdays(props.month, event))
  }
return (
  <div className={classes.paper}>
    <Typography
      variant="h6"
      align="center" 
      gutterBottom
    >
      Claim Log Settings
    </Typography>
    <TextField
      fullWidth
      label="Claims/Day Goal"
      type="number"
      value={props.claimsGoal}
      onChange={e => {handleGoalChange(e)}} 
    />
    <Typography
      className={classes.input}
      variant="body1"
      align="left"
    >
      Workdays:
    </Typography>
    <InfiniteCalendar
      Component={MultipleDatesCalendar}
      interpolateSelection={defaultMultipleDateInterpolation}
      selected={props.workdays[props.month]}
      onSelect={handleCalendarSelect}
      min={new Date(props.year, props.month)}
      max={new Date(props.year, props.month)}
    />
  </div>
)
}

const mapStateToProps = (state) => ({
  claimsGoal: state.claims.claimsGoal,
  claimLog: state.claims.claimLog,
  workdays: state.claims.workdays,
  month: state.claims.month,
  year: state.claims.year
});
export default connect(mapStateToProps)(ClaimSettings);