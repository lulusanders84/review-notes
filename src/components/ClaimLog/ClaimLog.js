import React from 'react';
import { connect } from 'react-redux';
import ClaimTable from '../ClaimTable/ClaimTable';
import ClaimSettings from '../ClaimSettings/ClaimSettings';
import { makeStyles } from '@material-ui/styles';
import Back from '@material-ui/icons/KeyboardArrowLeft'
import Forward from '@material-ui/icons/KeyboardArrowRight'
import { IconButton, Typography, Button, Grid } from '@material-ui/core';
import DailyClaimAvg from '../DailyClaimAvg/DailyClaimAvg';
import DailyClaimTotal from '../DailyClaimTotal/DailyClaimTotal';
import { updateClaimLogDate } from '../../redux/actions/claims';
import { ClaimLog } from './classes';

const useStyles = makeStyles(theme =>({
  root: { 
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center"
  },
  statsContainer: {
    alignContent: "flex-end",
    alignItems: "center", 
    justifyContent: "space-evenly",
    marginTop: "10px"
  },
  dateBar: {
    width: "425px",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center"
  }
}))

function ClaimLogComponent(props) {
  const lib = new ClaimLog(props);
  const classes = useStyles();
  const [settings, setSettings] = React.useState(false)
  const disabled = lib.setForwardDisabled();
  const date = lib.getClaimlogDate();

  return (
    <div className={classes.root}>
      <Grid container row="true" className={classes.statsContainer}>
        <DailyClaimTotal />
        <DailyClaimAvg />
      </Grid>
      
      <div className={classes.dateBar}>
        <IconButton onClick={e => props.dispatch(updateClaimLogDate(-1))}>
          <Back />
        </IconButton>
        <Typography
          variant="body1"
        >
          {date}
        </Typography>
        <IconButton onClick={e => props.dispatch(updateClaimLogDate(1))} disabled={disabled}>
          <Forward />
        </IconButton>
      </div>
      <ClaimTable />
      <Button
        onClick={ e => setSettings(!settings)}
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
  claimlogDate: state.claims.claimlogDate,
  dailyClaimsTotal: state.claims.dailyClaimsTotal
});

export default connect(mapStateToProps)(ClaimLogComponent)