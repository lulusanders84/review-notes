import React from 'react';
import {Typography, Tooltip} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import { theme } from '../styles/theme';
import { useStyles } from '../styles/claimLogStyles'

export function ClaimCountButton(props) {
  const classes = useStyles();
  const {claimsGoal, claimsTotal, dailyTarget} = props;
  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={`per hour target: ${claimsGoal}`}>
        <div 
          className={classes.button}
        >
          <Typography
            className={classes.count}
            component="div"
            variant="h2"
            color="inherit"
          >
            {claimsTotal}
          </Typography>
          <Typography
            className={classes.goal}
            component="div"
            variant="h2"
            color="inherit"
          >
            {dailyTarget}
          </Typography>
        </div>        
      </Tooltip>

    </ThemeProvider>    
  )
}

const mapStateToProps = (state) => ({
  claimLog: state.claims.claimLog,
  claimsTotal: state.claims.claimsTotal,
  dailyTarget: state.claims.dailyTarget,
  claimsGoal: state.claims.claimsGoal
});

export default connect(mapStateToProps)(ClaimCountButton)