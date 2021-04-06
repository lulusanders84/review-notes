import React, { useState, useEffect } from 'react'
import Inputs from '../classes/Inputs';
import inputs from '../inputs/inputs';


export default function InputsContainer({noteTemplate, changingInputs}) {

  const [inputComponents, setInputComponents] = useState([])

  useEffect(() => {
    setInputComponents(new Inputs(noteTemplate, inputs).getComponents())
  }, [noteTemplate])

  return (
    <div style={{width: "100%"}}>
      {
        inputComponents.map(input => {
          const Component = input.component;
          return <Component key={input.id} />       
        })
      }
    </div>
  )
}