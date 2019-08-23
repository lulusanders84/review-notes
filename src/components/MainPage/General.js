

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { Divider } from '@material-ui/core';
import ReactSelect from '../Inputs/ReactSelect';
import ReactSelectSingle from '../Inputs/ReactSelectSingle';
import TextInput from '../Inputs/TextInput';
import RadioInput from '../Inputs/RadioInput';
import ReviewedInputs from '../Inputs/ReviewedInputs';
import Checkbox from '../Inputs/Checkbox';
import DeniedInputs from '../Inputs/DeniedInputs';
import CriteriaInputs from '../Inputs/CriteriaInputs';
import PricingInputs from '../Inputs/PricingInputs';
import PolicyInput from '../Inputs/PolicyInput';
import Notes from '../Notes/Notes';
import { suggestions } from '../AutoComplete/utils';

function General(props) {
  const { classes, options } = props;
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:" onBlur={props.handleInputs} values={props.values} />
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={props.handleInputs} values={props.values} />      
      { props.values.lob !== "FEP" 
        ? <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" updateValue={props.handleInputs} values={props.values} />
        : null}
      { props.values.lob === "commercial"
        ? <ReactSelectSingle id="special" suggestions={suggestions(["N/A", "employee", "foreign", "hormel", "host", ])} label="Specialty claim" updateValue={props.handleInputs} values={props.values} />             
        : null}                         
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System" updateValue={props.handleInputs} values={props.values} />             
      <ReactSelect id="pend" suggestions={props.pendSuggestions} label="Suspension" updateValue={props.handlePendInput} values={props.values} value={props.values.pend} />             
      <RadioInput id="reviewed" options={["no", "yes"]} label="Service previously reviewed" onChange={props.handleReviewed} updateValue={props.handleInputs} values={props.values} />  
      <ReviewedInputs reviewed={props.reviewed} handleInputs={props.handleInputs} rationaleValue={props.values.rationale} values={props.values} />
      <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={props.handleInputs} values={props.values} />
      <TextInput id="age" placeholder="" label="Age" onBlur={props.handleInputs} values={props.values} /> 
      <TextInput id="dos" placeholder="" label="Date of service" onBlur={props.handleInputs} values={props.values} />              
      <TextInput id="code" placeholder="" label="Suspended Codes" onBlur={props.handleInputs} values={props.values} />

      <TextInput id="service" placeholder="" label="Service" onBlur={props.handleInputs} values={props.values} />
      <RadioInput id="serviceType" options={["drug", "procedure", "DME"]} label="Service Type" updateValue={props.handleInputs} values={props.values} />
      {props.values.drugReview ?
        <RadioInput id="drugReviewType" options={["new", "renewal"]} label="Drug Review Type" updateValue={props.handleInputs} values={props.values} />
        : null } 
      {props.values.claimType === "local" && props.values.lob === "commercial" 
        ? <RadioInput id="paList" options={["no", "yes"]} label="On PA List?" updateValue={props.handleInputs} values={props.values} />
        : null } 
      {props.values.pend && props.values.pend.some(pend => {return pend.value === "P5194"})
        ? <PricingInputs handleInputs={props.handleInputs} values={props.values} />
        : null}           
      <PolicyInput handleInputs={props.handleInputs} values={props.values} />        
      <TextInput id="benefits" placeholder="" label="Benefits" onBlur={props.handleInputs} values={props.values} />               
      <TextInput id="diagnosis" placeholder="" label="Diagnosis" onBlur={props.handleInputs} values={props.values} />
      <TextInput id="provider" placeholder="" label="Provider" onBlur={props.handleInputs} values={props.values} />
      <RadioInput id="proType" options={["professional", "facility"]} label="Provider Type" updateValue={props.handleInputs} values={props.values} />
      <RadioInput id="proPar" options={["Par", "Non-Par"]} label="Par Status" updateValue={props.handleInputs} values={props.values} />
      <TextInput id="summary" multiline={true} rows="5" label="Additional Clinical information" values={props.values} onBlur={props.handleInputs} />
      <RadioInput id="deter" options={["approve", "deny", "send to medical director"]} label="Determination" updateValue={props.handleInputs} values={props.values} />
      {props.values.deter === "deny" 
        ? <DeniedInputs denialId="rationale" handleInputs={props.handleInputs} values={props.values} />
        : props.values.deter === "send to medical director"
          ? <CriteriaInputs handleInputs={props.handleInputs} values={props.values} /> 
          : <Checkbox id="allMet" value={props.values.allMet} updateValue={props.handleInputs} label="All crtieria met" disabled={props.values.disableAllMet} />
      }
    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <Notes values={props.values} drugReview={props.values.drugReview}  />
    </div>
    </div>
  );
}

export default General;