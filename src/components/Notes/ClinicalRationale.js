import React from 'react';
import { connect } from 'react-redux';
import NoteContainer from './NoteContainer';

export const ClinicalRationale = (props) => {
    return (
        <NoteContainer title="Clinical Rationale">
            {props.values["clinical-rationale"]}
        </NoteContainer>
      )
}

const mapStateToProps = (state) => ({
    values: state.values,
  });
  
  export default connect(mapStateToProps)(ClinicalRationale)