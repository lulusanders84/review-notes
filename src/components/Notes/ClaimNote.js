import React, { useEffect} from 'react';
import Info from './Info'
import { setClaimNoteData } from '../../actions';
import { withVisibility } from '../../HOCs';
import FaxAndDate from './FaxAndDate';
import NoteContainer from './NoteContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';

export function ClaimNote(props) {
  const values = props.values;
  const { dispatch } = props;
  const { ocwaNote, instructions, modifier22, remainder } = props.notes;
  useEffect(() => {
    dispatch(setClaimNoteData(values));
  }, [dispatch, values])
  if(props.visible) {
    return (
      <NoteContainer title="Claim Note">
        REQ-{values.req}: {ocwaNote} {instructions} {modifier22} {remainder}
        {props.info ? <Info /> : null}
        {props.faxAndDate ? <FaxAndDate /> : null}
      </NoteContainer>
    )
  } else return null  
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

const composed = compose(connect(mapStateToProps))(withVisibility(ClaimNote, "claimNote"));
export default composed;