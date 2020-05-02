import React from 'react';
import Info from '../Notes/Info';
import FaxAndDate from '../Notes/FaxAndDate';
import { connect } from 'react-redux';
import Note from '../Notes/Note';

export function LetterNote(props) {
  const {req} = props.values;
  return (
    <Note title="Note for Letter">
      REQ-{req}: Additional Info Requested
      <Info visible />
      <FaxAndDate visible />
    </Note>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(LetterNote)