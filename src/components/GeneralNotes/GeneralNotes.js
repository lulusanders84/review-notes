import React from 'react';
import Routing from '../Notes/Routing';
import MedPolicy from '../Notes/MedPolicy';
import { noteContainers } from '../../notes/noteContainers'
import NoteContainer from '../Notes/NoteContainer';



export const GeneralNotes = () => {
  const { medClaimReviewNote, claimNote, clinicalRationale } = noteContainers
  return (
    <div>
      <NoteContainer {...medClaimReviewNote} />
      <MedPolicy />   
      <NoteContainer {...claimNote} />
      <Routing /> 
      <NoteContainer {...clinicalRationale} />     
    </div> 
  )  
}

export default GeneralNotes;
