import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
    root: {
        width: "425px",
      },
  }));

export default function (props) {
  const classes = useStyles();

  function handleChange(event, newValue) {
    props.setIndex(newValue); 
  }
  const tabs = ["General", "Info Request", "Decision", "Misroute"]
  return (
    
    <Paper className={classes.root}>
      <Tabs
        value={props.value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        scrollButtons="on"
      >
        {tabs.map((tab, index) => {
            const disabled = false;
           return <Tab label={tab} tabIndex={index} disabled={disabled} key={index} />
        })}
      </Tabs>
    </Paper>
  );
}
