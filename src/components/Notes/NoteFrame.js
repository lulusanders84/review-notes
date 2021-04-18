import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { noteContainers } from '../../notes/noteContainers'
import { noteFrameActions } from '../../notes/noteFrameActions';
import { noteFrames } from '../../templates/noteFrames';
import NoteContainer from '../Notes/NoteContainer';


export const NoteFrame = ({id}) => {
  const noteFrameTemplate = noteFrames[id]
  const dispatchedActions = noteFrameActions[id]
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(dispatchedActions !== undefined) {
      dispatchedActions.forEach(action=> {
        const {func, params} = action;
        dispatch(func(params))
      })
    }
  }, [dispatch, dispatchedActions])

  return (
    <div>
      {
        noteFrameTemplate.map(containerId => {
          const containerTemplate = noteContainers[containerId];
          return <NoteContainer {...containerTemplate} key={containerId} />
        })
      }  
    </div> 
  )  
}

export default NoteFrame;