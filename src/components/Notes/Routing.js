import React from 'react';
import { withVisibility, withNoteDataDispatch, setComposed } from '../../HOCs';
import NoteContainer from './NoteContainer';
import Note from './Note'

export function Routing(props) {
  const { values, queue, visible } = props;
  return (
    <NoteContainer visible={visible}>
      <Note title="Routing">
        Routing to queue {queue}
        <br />{values.lob === "FEP" ? "Routing to examiner": ""}
      </Note>
    </NoteContainer>
    )  
}
const mapStateToProps = (state) => ({
  values: state.values,
  queue: state.notes.queue,
  id: "routing"
});

export default setComposed(mapStateToProps, [withVisibility, withNoteDataDispatch], Routing)