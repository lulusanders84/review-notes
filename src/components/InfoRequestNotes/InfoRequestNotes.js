import React from 'react';
import Routing from '../Notes/Routing';
import InfoRequest from './InfoRequest';
import LetterNote from './LetterNote';
import { handleInputs } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { NoteContainer } from '../Notes/NoteContainer';
import { noteContainers } from '../../notes/noteContainers';


export const InfoRequestNotes = (props) => {
  const { claimNote } = noteContainers;
  const values = useSelector(state => state.values);
  const dispatch = useDispatch();
  const letterNoteVisible = values.claimType === "local" || values.lob === "fep" ? true : false
  
  React.useEffect(() => {
    dispatch(handleInputs({name: "deter", value: "deny"}))
    dispatch(handleInputs({name: "serviceType", value: "Information Request"}))
    dispatch(handleInputs({name: "rationale", value: "Information Request"}))
    dispatch(handleInputs({name: "denialType", value: "entire claim"}))
  }, [dispatch])
  
  return (
    <div>
      <InfoRequest /> 
      <NoteContainer {...claimNote} />
      <LetterNote visible={letterNoteVisible} />
      <Routing /> 
    </div>  
  )  
}

export default InfoRequestNotes
