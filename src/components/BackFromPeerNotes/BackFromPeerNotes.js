import React from 'react';
import { ClaimNote } from '../Notes';
import Routing from '../Notes/Routing';

export const Notes = () => {
  return (
    <div>
      <ClaimNote />    
      <Routing />        
    </div> 
  )  
}

export default Notes;
