import React from 'react';
import NoteContainer from './NoteContainer';
import { connect } from 'react-redux';

const FaxTransmission = (props) => {
    if(props.values.deter === "deny") {
    return (
        <NoteContainer title="Fax Transmission Note">
            N/A
        </NoteContainer>
      )
    }
    else return null;
}

const mapStateToProps = (state) => ({
    values: state.values,
  });
  
export default connect(mapStateToProps)(FaxTransmission)

