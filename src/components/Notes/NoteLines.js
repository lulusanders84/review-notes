import React from 'react';
import NoteLine from './NoteLine';
import { getNoteLinesByNoteType } from '../../utils/Notes/getNoteLinesByNoteType';
import { buildNoteProps } from '../../utils/Notes/buildNoteProps';
import { connect } from 'react-redux';
import { findLine } from '../../utils/Notes/findLine';

const NoteLines = (props) => {
  const noteLines = getNoteLinesByNoteType(props.noteType).map((name, index) => {
    const value = getValue(props, name);
    const noteProps = buildNoteProps(name, value);
    return (
      <NoteLine {...noteProps} key={index}/> 
    )
  });
  return (
    <div>
      {noteLines}
    </div> 
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes,
  values: state.values
});

export default connect(mapStateToProps)(NoteLines)

const getValue = (props, name) => {
    if (findLine(props.notes, name)) {
      return props.notes[name];
    }
    else if (findLine(props.values, name)) {
      return props.values[name];
    }
    else
      return "";
}

