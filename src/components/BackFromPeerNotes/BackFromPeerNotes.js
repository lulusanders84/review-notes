import React from 'react';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import { FaxTransmission } from '../Notes/FaxTransmission';

export const Notes = (props) => {
  return (
    <div>
      <ClaimNote values={props.values} />    
      {props.values.deter === "deny" 
      ? <FaxTransmission values={props.values} />
      : null }
      <Routing values={props.values} />        
    </div>
    
  )  
}

export default Notes;