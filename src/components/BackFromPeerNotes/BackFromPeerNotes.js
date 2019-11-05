import React from 'react';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import { FaxTransmission } from '../Notes/FaxTransmission';
import { setDenialMessage } from '../../utils/Notes/setDenialMessage';
import { connect } from 'react-redux';

export const Notes = (props) => {
  const denialMessage = setDenialMessage(props.values);
  return (
    <div>
      <ClaimNote values={props.values} denialMessage={denialMessage} />    
      {props.values.deter === "deny" 
      ? <FaxTransmission values={props.values} />
      : null }
      <Routing values={props.values} />        
    </div>
    
  )  
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(Notes)
