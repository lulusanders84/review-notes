import React from 'react';
import MisrouteClaimNote from '../Notes/MisrouteClaimNote';
import Routing from '../Notes/Routing';
import Misroute from '../Notes/Misroute';
import { setMedClaimReviewData, setClaimNoteData, setQueueAction } from '../../redux/actions';

export const MisrouteNotes = () => {
  return (
    <div>
      <Misroute dataRequests={[setMedClaimReviewData]} />
      <MisrouteClaimNote dataRequests={[setClaimNoteData]}/>    
      <Routing dataRequests={[setQueueAction]} />        
    </div>
    
  )  
}

export default MisrouteNotes;