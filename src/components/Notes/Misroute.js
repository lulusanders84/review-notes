import React from 'react';
import { connect } from 'react-redux';
import NoteContainer from './NoteContainer';

export function Misroute(props) {
  const { values } = props;
  const { code, pend } = props.notes;
  return (
    <NoteContainer title="Misroute Note">
      REQ-{values.req}: Misroute
      <br />Suspended codes: {code}
      <br />Suspension: {pend}
      <br />Rationale: {values.misrouteRationale}
      <br />Determination: Claim referred in error
    </NoteContainer>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(Misroute)