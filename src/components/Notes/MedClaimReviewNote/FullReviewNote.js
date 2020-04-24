import React from 'react';
import MedDirectorNote from './MedDirectorNote';
import { connect } from 'react-redux';
import { setMedClaimReviewData } from '../../../redux/actions/notes';
import Note from '../Note';
import { formatCriteria } from '../../../utils/Notes/formatCriteria';
import 'react-quill/dist/quill.snow.css';



export function FullReviewNote(props) {
  const { dispatch, values, notes } = props;

  React.useEffect(() => {
    dispatch(setMedClaimReviewData(values))
  }, [dispatch, values])
  return (
    <Note title="Medical Claim Review Note" capWordButtons>
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
      <br />Extenuating Circumstances: {values.exCircum}
      <br />Criteria Met: <span className="ql-editor" style={{paddingLeft: 0}} dangerouslySetInnerHTML={{__html: formatCriteria(notes.criteriaMet)}} />
      <br />Criteria Not Met: <span className="ql-editor" style={{paddingLeft: 0}} dangerouslySetInnerHTML={{__html: formatCriteria(notes.criteriaNotMet)}} />
      <br />Determination: {notes.deter}
      <MedDirectorNote />
    </Note>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(FullReviewNote)