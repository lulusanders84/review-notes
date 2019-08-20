import React from 'react';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import InfoRequest from './InfoRequest';
import getTwoWeeksFromNow from '../../utils/getTwoWeeksFromNow';
import LetterNote from './LetterNote';

export const InfoRequestNotes = (props) => {
  const faxAndDate =() => {
    return (
      <div>
        Return Fax: (651) 662-1235
        <br />Return Due Date: {getTwoWeeksFromNow()}
      </div>
    )   
  } 
  const info = `For ${props.values.dos}: ${props.values.info}`
  return (
    <div>
      <InfoRequest values={props.values} info={info} /> 
      <ClaimNote values={props.values} claimNoteAddendum={faxAndDate()} info={`Info Requested: ${info}`} />
      <LetterNote faxAndDate={faxAndDate()} />
      <Routing values={props.values} /> 
    </div>  
  )  
}

export default InfoRequestNotes;