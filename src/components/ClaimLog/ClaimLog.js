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
import { DailyTarget } from '../DailyTarget/DailyTarget';

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
  return (
    <div className={classes.root}>
      <Grid container row alignContent="flex-end" alignItems="center" justify="space-evenly" style={{marginTop: "10px"}}>
        <DailyClaimTotal claimsTotal={props.claimsTotal} />
        <DailyTarget dailyTarget={props.dailyTarget} />
        <DailyClaimAvg average={props.average} />
      </Grid>
      
      <div className={classes.dateBar}>
        <IconButton>
          <Back />
        </IconButton>
        <Typography
          variant="body1"
        >
          {formatDate(Date.now())}
        </Typography>
        <IconButton>
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
});

export default connect(mapStateToProps)(ClaimLog)