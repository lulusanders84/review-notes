import React from 'react';
import NoteContainer from './Notes/NoteContainer';
import { noteContainers } from '../notes/noteContainers';


export default function() {
  const { claimNote, routingNote } = noteContainers;
  return (
    <div>
      <NoteContainer {...claimNote} />    
      <NoteContainer {...routingNote} />         
    </div> 
  )  
}

