

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { Divider } from '@material-ui/core';
import RadioInput from '../../Inputs/RadioInput';
import * as Fields from '../../Inputs/FieldInputs';
import Conditional from '../../Inputs/ConditionalInputs/conditionalInputs';
import PolicyInput from '../../Inputs/PolicyInput';
import GeneralNotes from '../../GeneralNotes/GeneralNotes';
import CodeAndService from '../../Inputs/CodeAndService';
import ClaimInfoInputs from '../../Inputs/ClaimInfoInputs';
import PendInput from '../../Inputs/PendInput';
import BenefitsInput from '../../Inputs/BenefitsInput';
import ServiceTypeInput from '../../Inputs/ServiceTypeInput';
import DeterInputs from '../../Inputs/DeterInputs';

function General(props) {
  const { classes, values } = props;

  return (
    <div>
      <Fields.Name />
      <ClaimInfoInputs  />          
      <PendInput  />
      <RadioInput id="reviewed" options={["no", "yes"]} label="Following a decision:"  />  
      <Conditional.ReviewedInputs  />
      <Fields.Req />
      <Fields.Age />
      <Fields.Dos />
      <CodeAndService  />
      <ServiceTypeInput  /> 
      <Conditional.C3XList values={values} /> 
      <Conditional.Dose />          
      <Conditional.DrugReviewType values={values}/> 
      <Conditional.PricingInputs />          
      <PolicyInput   />  
      <BenefitsInput values={values}  />     
      <Fields.Diagnosis />
      <Fields.Provider />
      <Fields.Par />
      <Conditional.PAList values={values} /> 
      <Conditional.CovidRelated values={values} />
      <Fields.ClaimHistory values={values} />
      <Fields.Summary />
      <DeterInputs  addOptions={["send to medical director"]}  />
      <Conditional.ExCircum values={values}/>

      <Divider variant="fullWidth" />

      <div className={classes.notes}>
        <GeneralNotes />
      </div>
    </div>
  );
}

export default General;