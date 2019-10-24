

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { Divider, Button } from '@material-ui/core';
import ReactSelect from '../../Inputs/ReactSelect';
import TextInput from '../../Inputs/TextInput';
import RadioInput from '../../Inputs/RadioInput';
import PolicyInput from '../../Inputs/PolicyInput';
import InfoRequestNotes from '../../InfoRequestNotes/InfoRequestNotes';
import CodeAndService from '../../Inputs/CodeAndService';
import SimpleSelect from '../../Inputs/SimpleSelect';
import { saveInfoToPolicy } from '../../../utils/Inputs/savePair';

function InfoRequest(props) {
  const { classes, options } = props;
  const onSaveClick = (value) => {
    console.log("running")
      saveInfoToPolicy(props.values)  
  }
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:" onBlur={props.handleInputs} />
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={props.handleInputs} />      
      { props.values.lob !== "FEP" 
        ? <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" updateValue={props.handleInputs} />
        : null}
      { props.values.lob === "commercial"
        ? <SimpleSelect id="special" options={["N/A", "employee", "foreign", "hormel", "host", ]} label="Specialty claim" updateValue={props.handleInputs} />             
        : null} 
      {props.values.claimType === "home"
        ?<TextInput id="sccf" placeholder="" label="SCCF:" onBlur={props.handleInputs} />
        : null
      }                      
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System" updateValue={props.handleInputs} />             
      <ReactSelect id="pend" suggestions={props.pendSuggestions} label="Suspension" updateValue={props.handleInputs} />             
      <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={props.handleInputs}  />
      <TextInput id="dos" placeholder="" label="Date of service" onBlur={props.handleInputs}  />              
      <CodeAndService handleInputs={props.handleInputs}  linked={props.linked} onLinkClick={props.onLinkClick} handleServiceDisabled={props.handleServiceDisabled} serviceDisabled={props.serviceDisabled} />
      <PolicyInput handleInputs={props.handleInputs} /> 
      <TextInput id="related" label="Related UM REQs:" onBlur={props.handleInputs} />
      <TextInput id="info" multiline={true} rows="5" label="Info To Request:"  onBlur={props.handleInputs} />
      <Button onClick={onSaveClick}>
        Save Info to Policy
      </Button>
      <Divider variant="fullWidth" />
      <div className={classes.notes}>
        <InfoRequestNotes values={props.values} />
      </div>
      </div>
  );
}

export default InfoRequest;