import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: "460px",
        flexGrow: 1,
        marginTop: theme.spacing(4)
      },
  }));

export default function (props) {
  const classes = useStyles();

  function handleChange(event, newValue) {
    props.setIndex(newValue); 
  }
  const tabs = ["General", "Info Request", "Back From Peer", "Misroute"]
  return (
    
    <Paper className={classes.root}>
      <Tabs
        value={props.value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
      >
        {tabs.map((tab, index) => {
            const disabled = tab === "Info Request" ? true : false;
           return <Tab label={tab} tabIndex={index} disabled={disabled} />
        })}
      </Tabs>
    </Paper>
  );
}
