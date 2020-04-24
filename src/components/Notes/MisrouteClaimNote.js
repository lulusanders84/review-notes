import React from 'react';
import { connect } from 'react-redux';
import { setClaimNoteData } from '../../redux/actions/notes'
import Note from './Note';

export function MisrouteClaimNote(props) {
  const { dispatch, values, notes } = props;
  const { req, misrouteRationale } = values;
  React.useEffect(() => {
    dispatch(setClaimNoteData(values));
  }, [dispatch, values])
  
  return (
    <Note title="Claim Note">
      REQ-{req}: {notes.ocwaNote} Claim referred in error, see DLP for claim resolution. {misrouteRationale}
    </Note>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes,
});

export default connect(mapStateToProps)(MisrouteClaimNote)