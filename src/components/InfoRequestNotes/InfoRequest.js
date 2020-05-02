import React from 'react';
import Note from '../Notes/Note';
import Info from '../Notes/Info';
import { withNoteDataDispatch } from '../../HOCs/withNoteDataDispatch/withNoteDataDispatch';
import { setComposed } from '../../HOCs';
import NoteLines from '../Notes/NoteLines';

export function InfoRequest(props) {
  return (
    <Note title="Info Request Note">
      <NoteLines noteType="InfoRequest" /> 
      <Info visible />
    </Note>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
});

const composed = setComposed(mapStateToProps, [withNoteDataDispatch], InfoRequest);
export default composed;