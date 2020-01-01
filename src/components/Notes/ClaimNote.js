import React from 'react';
import Info from './Info'
import { setClaimNoteData } from '../../actions';
import { connect } from 'react-redux';
import FaxAndDate from './FaxAndDate';
import NoteContainer from './NoteContainer';


export function ClaimNote(props) {
  const values = props.values;
  const { dispatch } = props;
  const { ocwaNote, instructions, modifier22, remainder } = props.notes;
  React.useEffect(() => {
    dispatch(setClaimNoteData(values));
  }, [dispatch, values])
  return (
    <NoteContainer title="Claim Note">
      REQ-{values.req}: {ocwaNote} {instructions} {modifier22} {remainder}
      {props.info ? <Info /> : null}
      {props.faxAndDate ? <FaxAndDate /> : null}
    </NoteContainer>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(ClaimNote)