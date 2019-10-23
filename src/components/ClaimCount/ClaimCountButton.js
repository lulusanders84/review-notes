import React from 'react';
import {ButtonBase, Typography, Tooltip} from '@material-ui/core';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


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
export default function ClaimCountButton(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={`per day target: ${props.monthTarget}`}>
        <div 
          className={classes.button}
        >
          <Typography
            className={classes.count}
            component="div"
            variant="h2"
            color="inherit"
          >
            {props.claimTotal}
          </Typography>
          <Typography
            className={classes.goal}
            component="div"
            variant="h2"
            color="inherit"
          >
            {props.dayTarget}
          </Typography>
        </div>        
      </Tooltip>

    </ThemeProvider>
    
  )
}