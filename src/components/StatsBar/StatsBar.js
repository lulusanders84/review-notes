import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ElapsedTime from '../ElapsedTime/ElapsedTime';
import DailyProgress from '../DailyProgress/DailyProgress';
import { IconButton } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    
    left: 0,
    top: 0,
    width: "100%",
  },
  toolbar: {
    display: "flex",
    padding: "8px",
    flexDirection: "column"
  },
  button: {
    height: "24px",
    width: "24px",
    margin: "0",
    marginTop: "-18px",
    color: "white",
  },
}));

export default function StatsBar() {
  const classes = useStyles();
  const settings = {
    hide: {
      showToolbar: false,
      margin: "0px"
    },
    show: {
      showToolbar: true,
      margin: "-18px"
    }, 
  }
  const [setting, setSetting] = useState("show")
  const [showToolbar, setShowToolbar] = useState(settings[setting].showToolbar);
  const [buttonMarginTop, setButtonMarginTop] = useState(settings[setting].margin);
  
  const handleButtonClick = () => {
    let newSetting;
    if(setting === "show") {
      setSetting("hide")
      newSetting = "hide";
    } else {
      setSetting("show");
      newSetting = "show";
    }
    setShowToolbar(settings[newSetting].showToolbar)
    setButtonMarginTop(settings[newSetting].margin)
  }
  const content = () => {
    return showToolbar
    ? <Toolbar className={classes.toolbar}>
          <div style={{ display: "flex", width: "100%", flexGrow: 1,}}>
            <ElapsedTime />
            <DailyProgress />            
          </div>
          <IconButton onClick={handleButtonClick} className={classes.button} style={{marginTop: buttonMarginTop}}>
            <ExpandLess/>  
          </IconButton>
        </Toolbar>
    : <IconButton onClick={handleButtonClick} className={classes.button} style={{marginTop: buttonMarginTop}}>
          <ExpandMore />  
      </IconButton>
  }
  return (
    <div>
      <AppBar position="fixed" classes={{root: classes.root}}>
      {content()}
      </AppBar>
    </div>
  );
}
