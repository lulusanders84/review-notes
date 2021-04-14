import React from 'react';
import { noteContainers } from '../../notes/noteContainers'
import NoteContainer from '../Notes/NoteContainer';


export const GeneralNotes = () => {
  const { 
    medClaimReviewNote, 
    claimNote, 
    clinicalRationale, 
    denialLetter,
    medPolicyNote,
    routingNote 
  } = noteContainers

  return (
    <div>
      <NoteContainer {...medClaimReviewNote} />
      <NoteContainer {...medPolicyNote} />   
      <NoteContainer {...claimNote} />
      <NoteContainer {...routingNote} />
      <NoteContainer {...clinicalRationale} />   
      <NoteContainer {...denialLetter} />  
    </div> 
  )  
}

export default GeneralNotes;
