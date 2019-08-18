import React from 'react';
import MisrouteClaimNote from './MisrouteClaimNote';
import Routing from '../Notes/Routing';
import Misroute from './Misroute';

export const MisrouteNotes = (props) => {
  return (
    <div>
      <Misroute values={props.values} />
      <MisrouteClaimNote values={props.values} />    
      <Routing values={props.values} />        
    </div>
    
  )  
}

export default MisrouteNotes;