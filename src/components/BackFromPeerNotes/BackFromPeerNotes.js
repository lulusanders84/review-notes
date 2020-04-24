import React from 'react';
import { ClaimNote } from '../Notes';
import Routing from '../Notes/Routing';
import FaxTransmission from '../Notes/FaxTransmission';

export const Notes = () => {
  return (
    <div>
      <ClaimNote />    
      <FaxTransmission />
      <Routing />        
    </div> 
  )  
}

export default Notes;
