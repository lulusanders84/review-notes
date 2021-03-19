import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import { ElapsedTime } from './classes';
import { connect } from 'react-redux';
import { getStorage } from '../../utils';

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
    width: "100px",
    height: "auto",
    marginRight: "8px",
    paddingTop: "8px",
    paddingBottom: "8px"

  },
  content: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: '0',
    padding: "0px",
    "&:last-child": {
      paddingBottom: "0px"
    }
  },
  min: {
    minWidth: "25px"
  },
  sec: {
    minWidth: "40px"
  }
});

export function ElapsedTimeComponent(props) {
  const classes = useStyles();
  const { elapsedTimeReset } = props;
  const savedTime = getStorage("elapsedTime", [{min: 0, sec: 0}]);
  const { min, sec } = savedTime;
  const leadingZero = sec < 10 ? "0" : "";
  const [time, setTime] = useState({min, sec: leadingZero + sec});

  useEffect(() => {
    const lib = new ElapsedTime(savedTime);
    const { incrementTime, getTime } = lib;    
    const incrementer = setInterval(() => {
      incrementTime();
      setTime(getTime());
    }, 1000);
    return () => {
      clearInterval(incrementer);
    };
  }, [savedTime, elapsedTimeReset])

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardContent classes={{root: classes.content}}>
          <Typography 
              align="right"
              component="span"
              variant="h4"
              color="inherit"
              classes={{root: classes.min}}>
            {time.min}
          </Typography>
          <Typography 
              align="center"
              component="span"
              variant="h4"
              color="inherit">
            :
          </Typography>
          <Typography 
              align="left"
              component="span"
              variant="h4"
              color="inherit"
              classes={{root: classes.sec}}>
            {time.sec}
          </Typography>
        </CardContent>
      </Card>      
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  elapsedTimeReset: state.claims.elapsedTimeReset
});

export default connect(mapStateToProps)(ElapsedTimeComponent)