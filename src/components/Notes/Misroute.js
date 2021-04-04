import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';

export function Misroute(props) {
  const { values, notes } = props;
  const { code, misrouteRationale } = values;
    return (
    <Note title="Misroute Note" capWordButtons>
      REQ-{values.req}: Misroute
      <br />Suspended codes: {code.join(", ")}
      <br />Suspension: {notes.pend}
      <br />Rationale: {misrouteRationale}
      <br />Determination: Claim referred in error
    </Note>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(Misroute)