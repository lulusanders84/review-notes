import React from 'react';
import ClaimCountButton from '../ClaimCount/ClaimCountButton';
import { connect } from 'react-redux';
import ClaimTable from '../ClaimTable/ClaimTable';
import ClaimSettings from '../ClaimSettings/ClaimSettings';
import { makeStyles } from '@material-ui/styles';
import Back from '@material-ui/icons/KeyboardArrowLeft'
import Forward from '@material-ui/icons/KeyboardArrowRight'
import { IconButton, Typography, Button } from '@material-ui/core';
import { formatDate } from '../../utils';

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
      <ClaimCountButton 
      claimTotal={props.claimTotal} 
      monthTarget={props.claimsGoal}
      dayTarget={props.dailyTarget}/>
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
  claimTotal: state.claims.claimTotal,
  dailyTarget: state.claims.dailyTarget,
  claimsGoal: state.claims.claimsGoal
});

export default connect(mapStateToProps)(ClaimLog)