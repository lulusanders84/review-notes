

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { suggestions } from '../../../utils/AutoComplete';
import ReactSelect from '../../Inputs/ReactSelect';
import ReactSelectSingle from '../../Inputs/ReactSelectSingle';
import TextInput from '../../Inputs/TextInput';
import RadioInput from '../../Inputs/RadioInput';
import PolicyInput from '../../Inputs/PolicyInput';
import InfoRequestNotes from '../../InfoRequestNotes/InfoRequestNotes';
import { Divider, Button } from '@material-ui/core';
import { saveInfoToPolicy } from '../../../utils/Inputs/savePair';

function InfoRequest(props) {
  const { classes, options } = props;
  const onSaveClick = (value) => {
      saveInfoToPolicy(props.values)  
  }
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:" onBlur={props.handleInputs} values={props.values} />
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={props.handleInputs} values={props.values} />      
      { props.values.lob !== "FEP" 
        ? <div>
              <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" updateValue={props.handleInputs} values={props.values} />
              {props.values.claimType === "home" ? <TextInput id="sccf" placeholder="" label="SCCF:" onBlur={props.handleInputs} values={props.values} />
              : null}
        </div>
        : null}
      { props.values.lob === "commercial"
        ? <ReactSelectSingle id="special" suggestions={suggestions(["N/A", "employee", "foreign", "hormel", "host", ])} label="Specialty claim" updateValue={props.handleInputs} values={props.values} />             
        : null}                         
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System" updateValue={props.handleInputs} values={props.values} />             
      <ReactSelect id="pend" suggestions={props.pendSuggestions} label="Suspension" updateValue={props.handlePendInput} values={props.values} value={props.values.pend} />             
      <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={props.handleInputs} values={props.values} />
      <TextInput id="dos" placeholder="" label="Date of service" onBlur={props.handleInputs} values={props.values} />              
      <TextInput id="code" placeholder="" label="Suspended Codes" onBlur={props.handleInputs} values={props.values} />         
      <PolicyInput handleInputs={props.handleInputs} values={props.values} />        
      <TextInput id="info" multiline={true} rows="5" label="Info to Request" values={props.values} onBlur={props.handleInputs} shrink={true} />
      <Button onClick={onSaveClick}>Save Info to Policy</Button>
      <TextInput id="related" placeholder="Separate multiple numbers with commas" label="Related REQ #s" onBlur={props.handleInputs} values={props.values} />
    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <InfoRequestNotes values={props.values}  />
    </div>
    </div>
  );
}

export default InfoRequest;