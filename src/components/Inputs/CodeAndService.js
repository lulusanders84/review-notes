import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from './TextInput';
import LinkButton from './LinkButton';
import { Grid } from '@material-ui/core';
import * as utils from '../../utils/';
import * as inputUtils from '../../utils/Inputs';

const savePair = inputUtils.savePair;
const formatMultiServices = inputUtils.formatMultiServices;
const getValueFromPair = inputUtils.getValueFromPair;

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
export default function (props) {
  const [linked, setLinked] = useState(false);
  const classes = useStyles();
  const linkColor = linked ? "primary" : "disabled";
  const linkLineColor = linked ? "#2196F3" : "#757575"
  const linkLineCoverWidth = linked ? (linkLineWidth - 1).toString() + "%" : linkLineWidth.toString() + "%";
  const tooltipTitle = linked ? "Linked: Click to unlink code and service" : "Unlinked: Click to link service to code";
  const helperText = linked ? "Unlink to edit service" : " ";
  const linkDisabled = props.values.code === null || props.values.code === "" ? true : false;
  const linkedChanged =(value) => {
    setLinked(value);
    props.handleServiceDisabled(value);
  }
  const onCodeEntry = (value) => {
    props.handleInputs(value);
    const codes = utils.formatCodes(value.value);
    if(codes) {
        const service = codes.reduce((acc, code) => {
            const service = getValueFromPair("codeServicePairs", code);
            if(service) {
                acc.push(service);
                linkedChanged(true);
            } else linkedChanged(false);
            return acc;
        }, [])
        props.handleInputs({name: "service", value: formatMultiServices(service)});
    } else {
      setLinked(false);
      props.handleInputs({name: "service", value: ""})
    }
  }
  const onLinkClick = () => {
    const code = props.values.code;
    const service = props.values.service;
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
    <Grid container row className={classes.card}>       
        <div className={classes.inputs}>
          <TextInput id="code" placeholder="" label="Suspended Codes" onBlur={onCodeEntry} values={props.values} />
          <TextInput 
            id="service" 
            placeholder="" 
            label="Service" 
            onBlur={props.handleInputs} 
            values={props.values} 
            disabled={props.serviceDisabled} 
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