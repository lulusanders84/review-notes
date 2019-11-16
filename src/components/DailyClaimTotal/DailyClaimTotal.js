import React from 'react';
import {Typography, Tooltip} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import { theme, useStyles } from '../../styles/claimLogStyles'

export function DailyClaimTotal(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={`Total claims today`}>
        <div 
          className={classes.button}
        >
          <Typography
            className={classes.goal}
            component="div"
            variant="h2"
            color="inherit"
          >
            {props.claimsTotal}
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
  claimsGoal: state.claims.claimsGoal,
});

export default connect(mapStateToProps)(DailyClaimTotal)