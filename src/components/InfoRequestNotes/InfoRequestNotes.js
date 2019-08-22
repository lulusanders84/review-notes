import React from 'react';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import InfoRequest from './InfoRequest';
import getTwoWeeksFromNow from '../../utils/getTwoWeeksFromNow';
import LetterNote from './LetterNote';
import setDenialMessage from '../Notes/utils/setDenialMessage';

export const InfoRequestNotes = (props) => {
  const faxAndDate =() => {
    return (
      <div>
        Return Fax: (651) 662-1235
        <br />Return Due Date: {getTwoWeeksFromNow()}
      </div>
    )   
  }
  let values = props.values;
  values.deter = "deny";
  values.rationale = "Information Request";
  values.denialType = "entire claim";
  const denialMessage = setDenialMessage(values);
  const info = `For ${props.values.dos}: ${props.values.info}`
  return (
    <div>
      <InfoRequest values={props.values} info={info} /> 
      <ClaimNote values={values} claimNoteAddendum={faxAndDate()} info={`Info Requested: ${info}`} denialMessage={denialMessage} />
      <LetterNote faxAndDate={faxAndDate()} info={`Info Requested: ${info}`} values={values} />
      <Routing values={props.values} /> 
    </div>  
  )  
}

export default InfoRequestNotes;