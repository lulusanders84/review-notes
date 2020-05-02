import React from 'react';
import Note from './Note';
import NoteLines from './NoteLines';
import { setComposed } from '../../HOCs';
import withNoteDataDispatch from '../../HOCs/withNoteDataDispatch/withNoteDataDispatch';

export function Misroute(props) {
    return (
    <Note title="Misroute Note">
      <NoteLines noteType="Misroute" />
    </Note>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

const composed = setComposed(mapStateToProps, [withNoteDataDispatch], Misroute);
export default composed;