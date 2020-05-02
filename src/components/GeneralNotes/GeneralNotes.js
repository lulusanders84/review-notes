import React from 'react';
import MedClaimReviewNote from '../Notes/MedClaimReviewNote/MedClaimReviewNote';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import ClinicalRationale from '../Notes/ClinicalRationale';
import { fullNamesAction, setQueueAction, setClaimNoteData } from '../../redux/actions';

export const GeneralNotes = () => {
  return (
    <div>
      <MedClaimReviewNote />
      <MedPolicy dataRequests={[fullNamesAction]}/>   
      <ClaimNote dataRequests={[setClaimNoteData]}/>
      <Routing dataRequests={[setQueueAction]}/> 
      <ClinicalRationale />     
    </div> 
  )  
}

export default GeneralNotes;
