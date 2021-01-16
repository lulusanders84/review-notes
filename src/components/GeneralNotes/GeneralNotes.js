import React from 'react';
import MedClaimReviewNote from '../Notes/MedClaimReviewNote/MedClaimReviewNote';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import ClinicalRationale from '../Notes/ClinicalRationale';
import Criteria from '../Notes/Criteria';

export const GeneralNotes = () => {
  return (
    <div>
      <MedClaimReviewNote />
      <MedPolicy />   
      <ClaimNote />
      <Routing /> 
      <ClinicalRationale />
      <Criteria />     
    </div> 
  )  
}

export default GeneralNotes;
