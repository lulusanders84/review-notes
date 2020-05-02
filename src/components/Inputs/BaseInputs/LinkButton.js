import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link'
import { IconButton, Tooltip } from '@material-ui/core';
import BrokenLinkIcon from '@material-ui/icons/LinkOff';
import { withHandleChange, setComposed } from '../../../HOCs';

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
const LinkButton = (props) => {
  const classes = useStyles();
  return (
    <Tooltip title={props.tooltipTitle}>
      <div>
        <IconButton 
        classes={{root: classes.link}} 
        color={props.linkColor}
        edge="start" 
        disabled={props.linkDisabled}
        style={{ backgroundColor: 'transparent' }} 
        onClick={props.handleChange}
        >
          {props.values.linked 
            ? <LinkIcon className={classes.linkIcon} />
            : <BrokenLinkIcon className={classes.linkIcon} />
          }          
        </IconButton> 
      </div> 
    </Tooltip>
  )  
}
const mapStateToProps = (state) => ({
  values: state.values,
});

const composed = setComposed(mapStateToProps, [withHandleChange], LinkButton);
export default composed;
