import React, { useEffect} from 'react';
import Info from './Info'
import { setClaimNoteData } from '../../redux/actions';
import { 
  withVisibility, 
  setComposed 
} from '../../HOCs';
import FaxAndDate from './FaxAndDate';
import NoteContainer from './NoteContainer';
import Note from './Note';

export function ClaimNote(props) {
  const { dispatch, values, visible, notes } = props;
  const { ocwaNote, instructions, modifier22, remainder } = notes;
  useEffect(() => {
    dispatch(setClaimNoteData(values));
  }, [dispatch, values]);

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

const composed = setComposed(mapStateToProps, withVisibility, ClaimNote);
export default composed;

