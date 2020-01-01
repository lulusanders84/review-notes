import React from 'react';
import MedDirectorNote from './MedDirectorNote';
import { connect } from 'react-redux';
import { setMedClaimReviewData } from '../../../actions/notes';
import NoteContainer from '../NoteContainer';

export function MedClaimReviewNote(props) {
  const { dispatch, values, notes } = props;
  React.useEffect(() => {
    dispatch(setMedClaimReviewData(values))
  }, [dispatch, values])

  return (
    <NoteContainer title="Medical Claim Review Note">
      REQ-{values.req}: Clinical Note
        <br />Clinician name/Extension: {values.name}
        <br />LOB: {notes.lob}
        <br />Service: {notes.service}
        <br />Drug Request: {notes.drugRequest}
        <br />Suspended codes: {notes.code}
        <br />Suspension: {notes.pend}
        <br />PA on file: {notes.pa}
        <br />Claim history: {notes.claimHistory}
        <br />Medical Policy/Criteria: {notes.policyString}
        <br />Benefits: {notes.benefits}
        <br />Case summary: {notes.summary} 
        <br />Extenuating Circumstances: NA
        <br />Criteria Met: {notes.criteriaMet}
        <br />Criteria Not Met: {notes.criteriaNotMet}
        <br />Determination: {notes.deter}
        {values.deter === "send to medical director" ?
          <MedDirectorNote />
          : null}
    </NoteContainer>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(MedClaimReviewNote)