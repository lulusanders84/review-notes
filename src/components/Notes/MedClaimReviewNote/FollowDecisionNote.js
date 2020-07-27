import React from 'react';
import { connect } from 'react-redux';
import { setMedClaimReviewData } from '../../../redux/actions/notes';
// import NoteContainer from '../NoteContainer';
import Note from '../Note';

export function FollowDecisionNote(props) {
  const { dispatch, values, notes } = props;
  React.useEffect(() => {
    dispatch(setMedClaimReviewData(values))
  }, [dispatch, values])
  const pa = notes.pa === "PA not found" || notes.pa === "PA not found. Service not held to PA enforcement (FEP claim)." 
    ? "N" 
    : "Y";
  const decisionReqInfo = pa === "Y" ? notes.pa : notes.claimHistory;
  return (
    <Note title="Medical Claim Review Note">
      REQ-{values.req}: Clinical Note
      <br />Clinician name/Extension: {values.name}
      <br />LOB: {notes.lob}
      <br />Service: {notes.service}
      <br />Suspended codes: {notes.code}
      <br />Suspension: {notes.pend}
      <br />PA on file: {pa}
      <br />Request # utilized to apply decision: {decisionReqInfo}
      <br />Medical Policy/Criteria: {notes.policyString}
      <br />Benefits: {notes.benefits}
      <br />Case summary: {notes.summary} 
      <br />Determination: {notes.deter}  
    </Note>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(FollowDecisionNote)