import React from 'react';
import { connect } from 'react-redux';
import ClaimTable from '../ClaimTable/ClaimTable';
import ClaimSettings from '../ClaimSettings/ClaimSettings';
import { makeStyles } from '@material-ui/styles';
import Back from '@material-ui/icons/KeyboardArrowLeft'
import Forward from '@material-ui/icons/KeyboardArrowRight'
import { IconButton, Typography, Button, Grid } from '@material-ui/core';
import { formatDate } from '../../utils';
import { DailyClaimAvg } from '../DailyClaimAvg/DailyClaimAvg';
import { DailyClaimTotal } from '../DailyClaimTotal/DailyClaimTotal';
import { updateClaimLogDate } from '../../redux/actions/claims';

const useStyles = makeStyles(theme =>({
  root: { 
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center"
  },
  dateBar: {
    width: "425px",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center"
  }
}))
function ClaimLog(props) {
  const classes = useStyles();
  const [settings, setSettings] = React.useState(false)
  const handleSettings = () => {
    setSettings(!settings);
  }
  const handleDateChange = (increment) => {
    props.dispatch(updateClaimLogDate(increment))
  }
  const createTime = (time) => {
    return new Date(formatDate(time)).getTime();
  }
  const disabled = createTime(props.claimlogDate) === createTime(Date.now())
    ? true
    : false;
  return (
    <div className={classes.root}>
      <Grid container row alignContent="flex-end" alignItems="center" justify="space-evenly" style={{marginTop: "10px"}}>
        <DailyClaimTotal dailyClaimsTotal={props.dailyClaimsTotal} />
        <DailyClaimAvg average={props.average} />
      </Grid>
      
      <div className={classes.dateBar}>
        <IconButton onClick={e => {handleDateChange(-1)}}>
          <Back />
        </IconButton>
        <Typography
          variant="body1"
        >
          {formatDate(props.claimlogDate)}
        </Typography>
        <IconButton onClick={e => {handleDateChange(1)}} disabled={disabled}>
          <Forward />
        </IconButton>
      </div>
      <ClaimTable />
      <Button
        onClick={handleSettings}
      >
      Claim Settings</Button>
      {settings
        ?<ClaimSettings />
        :null
      }
    </div>
    
  )
}

const mapStateToProps = (state) => ({
  claimLog: state.claims.claimLog,
  claimsTotal: state.claims.claimsTotal,
  dailyTarget: state.claims.dailyTarget,
  claimsGoal: state.claims.claimsGoal,
  average: state.claims.average,
  claimlogDate: state.claims.claimlogDate,
  dailyClaimsTotal: state.claims.dailyClaimsTotal
});

export default connect(mapStateToProps)(ClaimLog)