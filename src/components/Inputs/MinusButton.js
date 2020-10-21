import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/RemoveCircleOutline'
import { IconButton, Tooltip } from '@material-ui/core';
import BrokenLinkIcon from '@material-ui/icons/LinkOff';

const linkWidth = 60;
const useStyles = makeStyles(() => ({
  link: {
    width: linkWidth.toString() + "px",
    height: linkWidth.toString() + "px",
    paddingTop: 0,
    backgroundColor: "transparent",
    webkitTransform: "rotate(90deg)",
    mozTransform: "rotate(90deg)",
    oTransform: "rotate(90deg)",
    msTransform: "rotate(90deg)",
    transform: "rotate(90deg)",
    position: "relative",
    left: (linkWidth/4).toString() + "px"
  },
  linkIcon: {
      width: "auto",
      height: "30px"
  }
}))
const MinusButton = (props) => {
  const classes = useStyles();
  return (
    <Tooltip title="Delete">
      <div>
        <IconButton 
        onClick={props.onClick}
        >
          <Icon />       
        </IconButton> 
      </div> 
    </Tooltip>
  )  
}

export default MinusButton;
