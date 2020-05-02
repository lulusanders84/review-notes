import React from 'react';
import Note from '../Note';
import NoteLines from '../NoteLines';
import { setComposed } from '../../../HOCs';
import withNoteDataDispatch from '../../../HOCs/withNoteDataDispatch/withNoteDataDispatch';

export function FollowDecisionNote(props) {
  return (
    <Note title="Medical Claim Review Note">
      <NoteLines noteType="FollowDecisionNote" />
    </Note>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
});

const composed = setComposed(mapStateToProps, [withNoteDataDispatch], FollowDecisionNote);
export default composed;