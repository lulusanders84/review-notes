import React from 'react';
import ClaimNote from '../Notes/ClaimNote';
import Routing from '../Notes/Routing';
import { connect } from 'react-redux';
import { FaxTransmission } from '../Notes/FaxTransmission';

export const Notes = (props) => {
  return (
    <div>
      <ClaimNote />    
      {props.values.deter === "deny" 
      ? <FaxTransmission values={props.values} />
      : null }
      <Routing />        
    </div> 
  )  
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(Notes)
