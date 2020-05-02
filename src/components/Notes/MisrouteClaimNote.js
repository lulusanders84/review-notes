import React from 'react';
import { setComposed } from '../../HOCs';
import { withNoteDataDispatch } from '../../HOCs/withNoteDataDispatch/withNoteDataDispatch'
import Note from './Note';

export function MisrouteClaimNote(props) {
  const { values, notes } = props;
  const { req, misrouteRationale } = values;  
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

const composed = setComposed(mapStateToProps, [withNoteDataDispatch], MisrouteClaimNote);
export default composed;