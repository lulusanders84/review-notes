import React from 'react';
import MisrouteClaimNote from '../Notes/MisrouteClaimNote';
import Routing from '../Notes/Routing';
import Misroute from '../Notes/Misroute';

export const MisrouteNotes = () => {
  return (
    <div>
      <Misroute />
      <MisrouteClaimNote />    
      <Routing />        
    </div>
    
  )  
}

export default MisrouteNotes;