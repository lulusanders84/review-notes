import React from 'react';
import {Typography, Tooltip} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import { theme, useStyles } from '../../styles/claimLogStyles'

export function DailyClaimTotal(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={`Total claims`}>
        <div 
          className={classes.button}
        >
          <Typography
            className={classes.goal}
            component="div"
            variant="h2"
            color="inherit"
          >
            {props.dailyClaimsTotal}
          </Typography>
        </div>        
      </Tooltip>

    </ThemeProvider>    
  )
}

const mapStateToProps = (state) => ({
  dailyClaimsTotal: state.claims.dailyClaimsTotal
});

export default connect(mapStateToProps)(DailyClaimTotal)