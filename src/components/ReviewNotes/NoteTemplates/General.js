

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { Divider } from '@material-ui/core';
import TextInput from '../../Inputs/TextInput';
import RadioInput from '../../Inputs/RadioInput';
import * as Fields from '../../Inputs/FieldInputs';
import ReviewedInputs from '../../Inputs/ReviewedInputs';
import PricingInputs from '../../Inputs/PricingInputs';
import PolicyInput from '../../Inputs/PolicyInput';
import GeneralNotes from '../../GeneralNotes/GeneralNotes';
import CodeAndService from '../../Inputs/CodeAndService';
import DoseInput from '../../Inputs/DoseInput';
import ClaimInfoInputs from '../../Inputs/ClaimInfoInputs';
import PendInput from '../../Inputs/PendInput';
import BenefitsInput from '../../Inputs/BenefitsInput';
import ServiceTypeInput from '../../Inputs/ServiceTypeInput';
import DeterInputs from '../../Inputs/DeterInputs';

function General(props) {
  const { classes } = props;
  return (
    <div>
      <Fields.Name />
      <ClaimInfoInputs  />          
      <PendInput  />             
      <RadioInput id="reviewed" options={["no", "yes"]} label="Following a decision:"  />  
      <ReviewedInputs  />
      <Fields.Req />
      <Fields.Age />
      <Fields.Dos />
      <CodeAndService  />
      <ServiceTypeInput  /> 
      {props.values.drugReview  && props.values.lob === "commercial"
        ? <DoseInput  />
        : null }
      {props.values.drugReview && props.values.reviewed === "no"
        ? <RadioInput id="drugReviewType" options={["new", "renewal"]} label="Drug Review Type" />
        : null } 
      {props.values.claimType === "local" && props.values.lob === "commercial" 
        ? <RadioInput id="paList" options={["no", "yes"]} label="On PA List?" />
        : null } 
      {props.values.pend && props.values.pend.some(pend => {return pend.value === "P5194"})
        ? <PricingInputs   />
        : null}           
      <PolicyInput   />  
      <BenefitsInput values={props.values}  />     
      <Fields.Diagnosis />
      <Fields.Provider />
      <Fields.Par />
      <Fields.Summary />
      <DeterInputs  addOptions={["send to medical director"]}  />
      {props.values.deter === "approve" && props.values.allMet === false
        ? <TextInput id="exCircum" placeholder="" label="Extenuating Circumstances"  />
        : null
      }
    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <GeneralNotes />
    </div>
    </div>
  );
}

export default General;