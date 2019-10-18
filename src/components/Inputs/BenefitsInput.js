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
}));
export default function (props) {
  const [linked, setLinked] = useState(false);
  const classes = useStyles();
  const linkColor = linked ? "primary" : "disabled";
  const tooltipTitle = linked ? "Linked: Click to unlink code and service" : "Unlinked: Click to link service to code";
  const helperText = linked ? "Unlink to edit service" : " ";
  const linkDisabled = props.values.service === null || props.values.service === "" ? true : false;
  const linkedChanged =(value) => {
    setLinked(value);
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
    const service = props.values.service;
    const benefits = props.values.benefits;
    if(!linked && code && code !== "") {
        savePair("codeServicePairs", [{[code]:service}])
        linkedChanged(true)
        
    } else if(linked) {
        savePair("codeServicePairs", [{[code]: ""}])
        linkedChanged(false);
    }
  }
  return (
    <Grid container row className={classes.card}>       
        <div className={classes.inputs}>
          <TextInput id="benefits" placeholder="" label="Benefits" onBlur={props.handleInputs} values={props.values} />          
        </div>
        <LinkButton 
          tooltipTitle={tooltipTitle} 
          linkColor={linkColor} 
          linkDisabled={linkDisabled} 
          onLinkClick={onLinkClick} 
          linked={linked} 
        />
    </Grid>
  )
}