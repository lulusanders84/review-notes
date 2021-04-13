import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Note from './Note';
import { notes } from '../../notes/notes';
import { withVisibility } from '../../HOCs';


export function NoteContainer({setNoteData, template, title, withCapWordButtons}) {
  const values = useSelector(state => state.values);
  console.log(useSelector(state => state.notes));
  const dispatch = useDispatch()
  template = Array.isArray(template) ? template : template(values)
  
  React.useEffect(() => {
    dispatch(setNoteData(values))
  }, [dispatch, setNoteData, values])

  return (
    <Note title={title} capWordButtons={withCapWordButtons}>
      {template.map(line => {
        const {component, content, id, title} = notes[line];
        const Line = component;
        return <Line key={id} id={id} title={title} content={content} />})
      }
    </Note>   
  )
}

export default withVisibility(NoteContainer);