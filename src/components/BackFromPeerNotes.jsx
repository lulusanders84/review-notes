import React from 'react';
import NoteContainer from './Notes/NoteContainer';
import Routing from './Notes/Routing';
import { noteContainers } from '../notes/noteContainers';


export default function() {
  const { claimNote } = noteContainers;
  return (
    <div>
      <NoteContainer {...claimNote} />    
      <Routing />        
    </div> 
  )  
}

