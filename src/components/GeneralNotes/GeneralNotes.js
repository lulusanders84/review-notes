import React from 'react';
import MedClaimReviewNote from '../Notes/MedClaimReviewNote/MedClaimReviewNote';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import ClinicalRationale from '../Notes/ClinicalRationale';

export const GeneralNotes = () => {
  return (
    <div>
      <MedClaimReviewNote />
      <MedPolicy />   
      <ClaimNote />
      <Routing /> 
      <ClinicalRationale />     
    </div> 
  )  
}

export default GeneralNotes;
