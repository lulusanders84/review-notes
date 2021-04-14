import React from 'react';
import NoteContainer from '../Notes/NoteContainer';
import { noteContainers } from '../../notes/noteContainers';

const { misrouteNote, misrouteClaimNote, routingNote } = noteContainers;

export const MisrouteNotes = () => {
  return (
    <div>
      <NoteContainer {...misrouteNote} />
      <NoteContainer {...misrouteClaimNote} />    
      <NoteContainer {...routingNote} />        
    </div>
    
  )  
}

export default MisrouteNotes;