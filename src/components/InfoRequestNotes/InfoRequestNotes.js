import React from 'react';
import { handleInputs } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { NoteContainer } from '../Notes/NoteContainer';
import { noteContainers } from '../../notes/noteContainers';


export const InfoRequestNotes = () => {
  const { claimNote, letterNote, infoRequestNote, routingNote } = noteContainers;
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(handleInputs({name: "deter", value: "deny"}))
    dispatch(handleInputs({name: "serviceType", value: "Information Request"}))
    dispatch(handleInputs({name: "rationale", value: "Information Request"}))
    dispatch(handleInputs({name: "denialType", value: "entire claim"}))
  }, [dispatch])
  
  return (
    <div>
      <NoteContainer {...infoRequestNote} /> 
      <NoteContainer {...claimNote} />
      <NoteContainer {...letterNote} />
      <NoteContainer {...routingNote} /> 
    </div>  
  )  
}

export default InfoRequestNotes
