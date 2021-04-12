import React from 'react';
import { useSelector } from 'react-redux';


export default function NoteLine({title, id, content}) {
  const notes = useSelector(state => state.notes);
  const Content = content !== undefined ? content : undefined
  return (
    <div>
      <span>{title}</span>
      <span>
        {content === undefined 
          ? notes[id]
          : <Content id={id} />
        }
      </span>
    </div>
  )
}