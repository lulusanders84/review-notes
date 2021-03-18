import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ElapsedTime from '../ElapsedTime/ElapsedTime';
import DailyProgress from '../DailyProgress/DailyProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    left: 0,
    top: 0,
    width: "100vw",
    flexGrow: 1,
  },
  toolbar: {
    padding: "8px"
  },
}));

export default function StatsBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" classes={{root: classes.root}}>
        <Toolbar className={classes.toolbar}>
          <ElapsedTime />
          <DailyProgress />
        </Toolbar>
      </AppBar>
    </div>
  );
}
