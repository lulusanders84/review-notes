import React from 'react'
import { useSelector } from 'react-redux'
import { formatCriteria } from '../utils/formatting/formatCriteria'
import 'react-quill/dist/quill.snow.css';


export default function CriteriaNote({id}) {
  const notes = useSelector(state => state.notes)
  return(
    <span 
      className="ql-editor" 
      style={{paddingLeft: 0}} 
      dangerouslySetInnerHTML={{__html: formatCriteria(notes[id])}} 
    />
  )
}