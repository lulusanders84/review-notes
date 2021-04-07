import React, { useState, useEffect } from 'react'
import Inputs from '../classes/Inputs';
import inputs from '../inputs/inputs';


export default function InputsContainer({template, denialId}) {

  const [inputComponents, setInputComponents] = useState([])

  useEffect(() => {
    setInputComponents(new Inputs(template, inputs).getComponents())
  }, [template])

  return (
    <div style={{width: "100%"}}>
      {
        inputComponents.map(input => {
          const Component = input.component;
          return <Component key={input.id} values={{denialId}} />       
        })
      }
    </div>
  )
}