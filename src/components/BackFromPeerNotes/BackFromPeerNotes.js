import React from 'react';
import { ClaimNote } from '../Notes';
import Routing from '../Notes/Routing';
import { setClaimNoteData } from '../../redux/actions';
import { setQueueAction } from '../../redux/actions/notes';

export const Notes = () => {
  return (
    <div>
      <ClaimNote dataRequests={[setClaimNoteData]} />    
      <Routing dataRequests={[setQueueAction]} />        
    </div> 
  )  
}

export default Notes;
