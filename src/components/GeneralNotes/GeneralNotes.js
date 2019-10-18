import React from 'react';
import MedClaimReviewNote from '../Notes/MedClaimReviewNote';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import { FaxTransmission } from '../Notes/FaxTransmission';
import { ClinicalRationale } from '../Notes/ClinicalRationale';
import * as utils from '../../utils/Notes';


export const GeneralNotes = (props) => {
  const values = utils.formatValues(props.values);
  const denialMessage = utils.setDenialMessage(values);
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

export default GeneralNotes;