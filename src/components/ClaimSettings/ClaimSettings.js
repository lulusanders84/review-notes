import React from 'react';
import { Typography, TextField,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import { updateClaimsGoal, addOrRemoveWorkday } from '../../redux/actions/claims';
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import RadioInput from '../Inputs/RadioInput';
import ReactSelect from '../Inputs/ReactSelect';

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
  const initialWorkdays = props.workdays[props.month];
  const [workdays, setWorkdays] = React.useState(initialWorkdays)
  React.useEffect(() => {
    setWorkdays(initialWorkdays);
  }, [initialWorkdays] )
  
  const handleGoalChange = (event) => {
    const claimsGoal = event.target.value;
    props.dispatch(updateClaimsGoal(claimsGoal))
  }
  const handleCalendarSelect = (event) => {
    props.dispatch(addOrRemoveWorkday(props.month, event))
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
        label="Claims/Hour Goal"
        type="number"
        value={props.claimsGoal}
        onChange={e => {handleGoalChange(e)}} 
      />
      <RadioInput id="shiftHours" options={["8", "10"]} label="Hours per shift:" />
      <ReactSelect id="daysOff" suggestions={props.daysOffOptions} label="Usual days off:" />
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
        selected={workdays}
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
  year: state.claims.year,
  daysOffOptions: state.suggestions.daysOffOptions
});
export default connect(mapStateToProps)(ClaimSettings);