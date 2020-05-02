import React from 'react';
import NoteContainer from '../NoteContainer';
import { withVisibility, setComposed } from '../../../HOCs';
import NoteLines from '../NoteLines';
import withNoteDataDispatch from '../../../HOCs/withNoteDataDispatch/withNoteDataDispatch';


const MedDirectorNote = (props) => {
   return (
    <NoteContainer visible={props.visible}>
      <NoteLines noteType="MedDirectorNote" />
    </NoteContainer>
   )
}

const mapStateToProps = (state) => ({
  values: state.values,
  id: "medDir"
});

const composed = setComposed(mapStateToProps, [withVisibility, withNoteDataDispatch], MedDirectorNote);
export default composed;
