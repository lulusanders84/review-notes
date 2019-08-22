

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { suggestions } from '../AutoComplete/utils';
import ReactSelect from '../Inputs/ReactSelect';
import ReactSelectSingle from '../Inputs/ReactSelectSingle';
import TextInput from '../Inputs/TextInput';
import RadioInput from '../Inputs/RadioInput';
import MisrouteNotes from '../MisrouteNotes/MisrouteNotes';
import { Divider } from '@material-ui/core';


function Misroute(props) {
  const { classes, options } = props;
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
      <ReactSelect id="pend" suggestions={suggestions(options.pendOptions)} label="Suspension" updateValue={props.handlePendInput} values={props.values} value={props.values.pend} />             
      <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={props.handleInputs} values={props.values} />
      <TextInput id="code" placeholder="" label="Suspended Codes" onBlur={props.handleInputs} values={props.values} />         
      <TextInput id="misrouteRationale" placeholder="" label="Misroute Rationale" onBlur={props.handleInputs} values={props.values} />
    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <MisrouteNotes values={props.values}  />
    </div>
    </div>
  );
}

export default Misroute;