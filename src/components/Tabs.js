import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useDispatch } from 'react-redux';
import { handleInputs } from '../redux/actions';

const useStyles = makeStyles(theme => ({
    root: {
        width: "425px",
      },
  }));

const noteTemplateConversion = {
  0: "general",
  1: "infoRequest",
  2: "decision",
  3: "misroute"
}

export default function (props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { value } = props;
  const name = "noteTemplate";

  useEffect(() => {
    dispatch(handleInputs({name, value: noteTemplateConversion[value] }))
  }, [dispatch, value])
  
  function handleChange(event, newValue) {
    props.setIndex(newValue); 
    dispatch(handleInputs({name, value:noteTemplateConversion[newValue]}))
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
