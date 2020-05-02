import React from 'react';
import Info from './Info'
import { 
  withVisibility, 
  setComposed 
} from '../../HOCs';
import FaxAndDate from './FaxAndDate';
import NoteContainer from './NoteContainer';
import Note from './Note';
import withNoteDataDispatch from '../../HOCs/withNoteDataDispatch/withNoteDataDispatch';

export function ClaimNote(props) {
  const values = props.values;
  const { visible, notes } = props;
  const { ocwaNote, instructions, modifier22, remainder } = notes;
  return (
    <NoteContainer visible={visible}>
      <Note title="Claim Note">
        REQ-{values.req}: {ocwaNote} {instructions} {modifier22} {remainder}
        <Info visible={props.info} />
        <FaxAndDate visible={props.faxAndDate} />
      </Note>        
    </NoteContainer>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes,
  id: "claimNote"
});

const composed = setComposed(mapStateToProps, [withVisibility, withNoteDataDispatch], ClaimNote);
export default composed;

