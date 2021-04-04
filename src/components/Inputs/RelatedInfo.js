
import React, { useEffect, useState } from 'react';
import inputs from '../../inputs/inputs';
import Inputs from '../../classes/Inputs';

export function RelatedInfo() {
  const [components, setComponents] = useState([])
  useEffect(() => {
    setComponents(new Inputs(["initialReq", "initialSccf"], inputs).inputComponents)
  }, [])
  return (
    <div>
      {
        components.map(input => {
          const Component = input.component;
          return <Component key={input.id} />
        })
      }
    </div>
    
  )
}