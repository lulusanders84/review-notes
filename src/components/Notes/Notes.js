import React from 'react';
import MedClaimReviewNote from './MedClaimReviewNote';
import ClaimNote from './ClaimNote';
import Routing from './Routing';
import MedPolicy from './MedPolicy';
import { FaxTransmission } from './FaxTransmission';
import { ClinicalRationale } from './ClinicalRationale';
import setDenialMessage from './utils/setDenialMessage';
import * as utils from './utils/index';


export const Notes = (props) => {
  const values = utils.formatValues(props.values);
  console.log(values);
  const denialMessage = setDenialMessage(values);
  return (
    <div>
      <MedClaimReviewNote values={values} drugReview={props.drugReview} denialMessage={denialMessage} />
      <ClaimNote values={values} denialMessage={denialMessage} />
      {values.policy.length !== 0
        ? <MedPolicy values={values} />   
        : null }   
      {values.rationale === "Not Medically Necessary" || values.rationale === "Experimental/Investigative" 
      ? <FaxTransmission values={values} />
      : null }
      {values["pa-deter"] === "denied" && values["clinical-rationale"]
        ? <ClinicalRationale values={values} />
        : null }
      <Routing values={values} />        
    </div>
    
  )  
}

export default Notes;