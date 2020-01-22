

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { Divider } from '@material-ui/core';
import ReactSelectSingle from '../../Inputs/ReactSelectSingle';
import TextInput from '../../Inputs/TextInput';
import RadioInput from '../../Inputs/RadioInput';
import ReviewedInputs from '../../Inputs/ReviewedInputs';
import Checkbox from '../../Inputs/Checkbox';
import DeniedInputs from '../../Inputs/DeniedInputs';
import CriteriaInputs from '../../Inputs/CriteriaInputs';
import PricingInputs from '../../Inputs/PricingInputs';
import PolicyInput from '../../Inputs/PolicyInput';
import GeneralNotes from '../../GeneralNotes/GeneralNotes';
import CodeAndService from '../../Inputs/CodeAndService';
import DoseInput from '../../Inputs/DoseInput';
import SimpleSelect from '../../Inputs/SimpleSelect';
import PendInput from '../../Inputs/PendInput';
import ProviderType from '../../Inputs/ProviderType';
import { sortSuggestionsAlphabetically } from '../../../utils/AutoComplete/sortSuggestionsAlphabetically';
import BenefitsInput from '../../Inputs/BenefitsInput';

function General(props) {
  const { classes, options } = props;
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:" onBlur={props.handleInputs} />
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={props.handleInputs} />      
      { props.values.lob === "GP"
        ? <RadioInput id="plan" options={options.planOptions} label="Plan" updateValue={props.handleInputs} />
        : null}
      { props.values.lob === "GP" && props.values.plan === "MAPD"
        ? <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" updateValue={props.handleInputs} />
        : null}   
      { props.values.lob === "commercial"
        ? <div>
            <SimpleSelect id="special" options={["N/A", "employee", "foreign", "hormel", "host", ]} label="Specialty claim" updateValue={props.handleInputs} />
            <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" updateValue={props.handleInputs} />
          </div>             
        : null}                         
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System" updateValue={props.handleInputs} />             
    
      <PendInput updateValue={props.handleInputs} />             
      <RadioInput id="reviewed" options={["no", "yes"]} label="Service previously reviewed" onChange={props.handleReviewed} updateValue={props.handleInputs} />  
      <ReviewedInputs reviewed={props.reviewed} handleInputs={props.handleInputs} rationaleValue={props.values.rationale}  />
      <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={props.handleInputs}  />
      <TextInput id="age" placeholder="" label="Age" onBlur={props.handleInputs}  /> 
      <TextInput id="dos" placeholder="" label="Date of service" onBlur={props.handleInputs}  />              
      <CodeAndService handleInputs={props.handleInputs}  linked={props.linked} onLinkClick={props.onLinkClick} handleServiceDisabled={props.handleServiceDisabled} serviceDisabled={props.serviceDisabled} />
      <RadioInput id="serviceType" options={["drug", "procedure", "DME"]} label="Service Type" updateValue={props.handleInputs} />
      <ReactSelectSingle id="type" placeholder="" label="Specific Type" updateValue={props.handleInputs} suggestions={sortSuggestionsAlphabetically(JSON.parse(window.localStorage.getItem("type")))} value={{value:props.values.type, label: props.values.type}} />
      {props.values.drugReview  && props.values.lob === "commercial"
        ? <DoseInput handleInputs={props.handleInputs} />
        : null }
      {props.values.drugReview && props.values.reviewed === "no"
        ? <RadioInput id="drugReviewType" options={["new", "renewal"]} label="Drug Review Type" updateValue={props.handleInputs}/>
        : null } 
      {props.values.claimType === "local" && props.values.lob === "commercial" 
        ? <RadioInput id="paList" options={["no", "yes"]} label="On PA List?" updateValue={props.handleInputs}/>
        : null } 
      {props.values.pend && props.values.pend.some(pend => {return pend.value === "P5194"})
        ? <PricingInputs handleInputs={props.handleInputs}  />
        : null}           
      <PolicyInput handleInputs={props.handleInputs}  />  
      <BenefitsInput values={props.values} handleInputs={props.handleInputs} />     
      <TextInput id="diagnosis" placeholder="" label="Diagnosis" onBlur={props.handleInputs}  />
      <ReactSelectSingle id="provider" placeholder="" label="Provider" updateValue={props.handleInputs}  suggestions={JSON.parse(window.localStorage.getItem("provider"))} />             
      <ProviderType updateValue={props.handleInputs} />
      <RadioInput id="proPar" options={["Par", "Non-Par"]} label="Par Status" updateValue={props.handleInputs} />
      <TextInput id="summary" multiline={true} rows="5" label="Additional Clinical information"  onBlur={props.handleInputs} />
      <RadioInput id="deter" options={["approve", "deny", "send to medical director"]} label="Determination" updateValue={props.handleInputs} />
      {props.values.deter === "deny" 
        ? <DeniedInputs denialId="rationale" handleInputs={props.handleInputs}  />
        : props.values.deter === "send to medical director"
          ? <CriteriaInputs handleInputs={props.handleInputs}  /> 
          : <Checkbox id="allMet" value={props.values.allMet} updateValue={props.handleInputs} label="All crtieria met" disabled={props.values.disableAllMet} />
      }
    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <GeneralNotes />
    </div>
    </div>
  );
}

export default General;