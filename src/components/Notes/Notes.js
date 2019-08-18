import React from 'react';
import MedClaimReviewNote from './MedClaimReviewNote';
import ClaimNote from './ClaimNote';
import Routing from './Routing';
import MedPolicy from './MedPolicy';
import { FaxTransmission } from './FaxTransmission';
import { ClinicalRationale } from './ClinicalRationale';
import setDenialMessage from './utils/setDenialMessage';


export const Notes = (props) => {
  const denialMessage = setDenialMessage(props.values);
  return (
    <div>
      <MedClaimReviewNote values={props.values} drugReview={props.drugReview} denialMessage={denialMessage} />
      <ClaimNote values={props.values} denialMessage={denialMessage} />
      <MedPolicy values={props.values} />      
      {props.values.deter === "deny" 
      ? <FaxTransmission values={props.values} />
      : null }
      {props.values["pa-deter"] === "denied"
        ? <ClinicalRationale values={props.values} />
        : null}
      <Routing values={props.values} />        
    </div>
    
  )  
}

export default Notes;