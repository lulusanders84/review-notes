
import 'react-quill/dist/quill.snow.css';

import React from 'react';
import Note from '../Note';
import NoteLines from '../NoteLines';
import MedDirectorNote from './MedDirectorNote';
import { setComposed } from '../../../HOCs';
import withNoteDataDispatch from '../../../HOCs/withNoteDataDispatch/withNoteDataDispatch';
import { referReasonsAction } from '../../../redux/actions/notes';

export function FullReviewNote(props) {
  return (
    <Note title="Medical Claim Review Note">
      <NoteLines noteType="FullReviewNote" />
      <br />
      <MedDirectorNote dataRequests={[referReasonsAction]} />
    </Note>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
});

const composed = setComposed(mapStateToProps, [withNoteDataDispatch], FullReviewNote);
export default composed;