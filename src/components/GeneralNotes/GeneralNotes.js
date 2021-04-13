import React from 'react';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import ClinicalRationale from '../Notes/ClinicalRationale';
import { noteContainers } from '../../notes/noteContainers'
import NoteContainer from '../Notes/NoteContainer';



export const GeneralNotes = () => {
  const { medClaimReviewNote } = noteContainers
  return (
    <div>
      <NoteContainer {...medClaimReviewNote} />
      <MedPolicy />   
      <ClaimNote />
      <Routing /> 
      <ClinicalRationale />     
    </div> 
  )  
}

export default GeneralNotes;
