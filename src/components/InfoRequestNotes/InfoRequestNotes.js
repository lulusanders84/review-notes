import React from 'react';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import InfoRequest from './InfoRequest';

export const InfoRequestNotes = (props) => {
  return (
    <div>
      <InfoRequest values={props.values} /> 
      <ClaimNote values={props.values} />
      <Routing values={props.values} /> 
    </div>  
  )  
}

export default InfoRequestNotes;