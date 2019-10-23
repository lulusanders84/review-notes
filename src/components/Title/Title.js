import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReviewNotesTitle from './ReviewNotesTitle';
import ClaimCount from '../ClaimCount/ClaimCount';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ClaimLogTitle from './ClaimLogTitle';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    width: "425px",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    alignContent: "stretch",
    alignSelf: "flex-start",
    justifyContent: "center"
  },
  card: {
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  tab: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  }
}))
export default function Title(props) {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    props.setTabValue(newValue);
  }
  return (
      <Tabs 
        value={props.tabValue} 
        onChange={handleChange}
        variant="standard" 
        classes={{flexContainer:classes.title}}> 
        <Tab 
          classes={{root: classes.tab}}
          tabIndex={0}
          label={<ReviewNotesTitle />}
        />
        <Tab
          classes={{root: classes.tab}}
          tabIndex={1}
          label={props.tabValue === 1 
            ?<ClaimLogTitle />
            :<ClaimCount />}
        />
      </Tabs>
  )
}