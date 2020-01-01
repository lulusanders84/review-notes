import React from 'react';
import { connect } from 'react-redux';
import { setClaimNoteData } from '../../actions/notes'
import NoteContainer from './NoteContainer';

export function MisrouteClaimNote(props) {
  const { dispatch, values } = props;
  React.useEffect(() => {
    dispatch(setClaimNoteData(values));
  }, [dispatch, values])
  const { req } = props.values;
  return (
    <NoteContainer title="Claim Note">
      REQ-{req}: {props.notes.ocwaNote} Claim referred in error, see DLP for claim resolution.
    </NoteContainer>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes,
});

export default connect(mapStateToProps)(MisrouteClaimNote)