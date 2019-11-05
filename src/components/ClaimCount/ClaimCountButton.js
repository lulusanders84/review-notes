import React from 'react';
import {Typography, Tooltip} from '@material-ui/core';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Montserrat"'
    ],
    h2: {
      fontSize: 48
    }
  }
})

const useStyles = makeStyles({
  button: {
    display: "flex",
    flexDirection: "column",
  },
  count: {
    position: "relative",
    // right: 27,
    // top: 15
  },
  goal: {
    position: "relative",

  }
})
export function ClaimCountButton(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={`per day target: ${props.claimsGoal}`}>
        <div 
          className={classes.button}
        >
          <Typography
            className={classes.count}
            component="div"
            variant="h2"
            color="inherit"
          >
            {props.claimsTotal}
          </Typography>
          <Typography
            className={classes.goal}
            component="div"
            variant="h2"
            color="inherit"
          >
            {props.dailyTarget}
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