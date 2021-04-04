import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from './TextInput';
import LinkButton from './LinkButton';
import { Grid } from '@material-ui/core';
import * as inputUtils from '../../utils/Inputs';
import { handleInputs } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const savePair = inputUtils.savePair;

const height = 60;
const width = 440;
const linkWidth = 60;
const linkLineWidth = (100 - ((linkWidth / 2) / width * 100));
const radius = "15px";
const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  inputs: {flex: 1},
  linkLine: {
    border: "2px solid",
    width: linkLineWidth.toString() + "%",
    height: height.toString() + "px",
    position: "relative",
    bottom: (height + height/2 + 5).toString() + "px",
    zIndex: -20,
  },
  linkLineCover: {
    backgroundColor: "white",
    borderColor: "red",
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    height: (height).toString() + "px",
    position: "relative",
    bottom: (height*2 + height/2 + 5).toString() + "px",
    zIndex: -10,
  },
  container: {
    height: "129.6px"
  }
}));
function CodeAndService() {
  const classes = useStyles();
  const { linked, code, service } = useSelector(state => state.values);
  const dispatch = useDispatch();
  const linkColor = linked ? "primary" : "default";
  const linkLineColor = linked ? "#2196F3" : "#757575"
  const linkLineCoverWidth = linked ? (linkLineWidth - 1).toString() + "%" : linkLineWidth.toString() + "%";
  const tooltipTitle = linked ? "Linked: Click to unlink code and service" : "Unlinked: Click to link service to code";
  const helperText = linked ? "Unlink to edit service" : " ";
  const linkDisabled = code === null || code === "" ? true : false;
  const linkedChanged =(value) => {
    dispatch(handleInputs({name: "linked", value,}));
  }
  const onLinkClick = () => {

    if(!linked && code && code !== "") {
        savePair("codeServicePairs", [{[code]:service}])
        linkedChanged(true)
        
    } else if(linked) {
        savePair("codeServicePairs", [{[code]: ""}])
        linkedChanged(false);
    }
  }
  return (
    <div className={classes.container}>
      <Grid container row="true" className={classes.card}>       
          <div className={classes.inputs}>
            <TextInput id="code" placeholder="" label="Suspended Codes" />
            <TextInput 
              id="service" 
              placeholder="" 
              label="Service" 
              disabled={linked} 
              helperText={helperText} />            
          </div>
          <LinkButton 
            tooltipTitle={tooltipTitle} 
            linkColor={linkColor} 
            linkDisabled={linkDisabled} 
            onLinkClick={onLinkClick} 
            linked={linked} 
          />       
      </Grid>
      <div className={classes.linkLine} style={{borderColor: linkLineColor}} />
      <div className={classes.linkLineCover} style={{width: linkLineCoverWidth}} />
    </div>
    
  )
}

export default CodeAndService