import React from 'react';
import Info from '../Notes/Info';
import FaxAndDate from '../Notes/FaxAndDate';
import { connect } from 'react-redux';
import Note from '../Notes/Note';
import NoteContainer from '../Notes/NoteContainer';

export function LetterNote(props) {
  const {...values} = props.values;
  return (
    <NoteContainer visible={props.visible}>
      <Note title="Note for Letter">
        REQ-{values.req}: Additional Info Requested
        <Info visible />
        <FaxAndDate visible />
      </Note>      
    </NoteContainer>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(LetterNote)