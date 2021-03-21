import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
import { ElapsedTime } from './classes';
import { connect } from 'react-redux';
import { setElapsedTimeReset } from '../../redux/actions';
import { styles } from '../../styles/elapsedTimeStyles';

const useStyles = makeStyles(styles);

export function ElapsedTimeComponent(props) {
  const classes = useStyles();
  const { elapsedTimeReset, dispatch } = props;
  const { min, sec, secZero, startTime, resetTime, handleTimeButtonClick } = new ElapsedTime();
  const [time, setTime] = useState({min, sec: secZero + sec});

  useEffect(() => {
    if(elapsedTimeReset) {
      resetTime();
      dispatch(setElapsedTimeReset(false))
    }
    return startTime(setTime);
  }, [dispatch, elapsedTimeReset, startTime, resetTime])

  const typographyProps = {
    component: "span",
    variant: "h4",
    color: "inherit"
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => {handleTimeButtonClick(setTime)}}>
      <Card className={classes.root}>
        <CardContent classes={{root: classes.content}}>
          <Typography 
            align="right"
            {...typographyProps}
            classes={{root: classes.min}}
          >
            {time.min}
          </Typography>
          <Typography 
            align="center"
            {...typographyProps}
          >
            :
          </Typography>
          <Typography 
            align="left"
            {...typographyProps}
            classes={{root: classes.sec}}
          >
            {time.sec}
          </Typography>
        </CardContent>
      </Card>   
      </Button>   
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  elapsedTimeReset: state.claims.elapsedTimeReset
});

export default connect(mapStateToProps)(ElapsedTimeComponent)