import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Inputs from '../classes/Inputs';
import inputs from '../inputs/inputs';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "10px"
  }
}))

export default function InputsContainer({template, denialId}) {
  const classes = useStyles()
  const [inputComponents, setInputComponents] = useState([])

  useEffect(() => {
    setInputComponents(new Inputs(template, inputs).getComponents())
  }, [template])

  return (
    <div style={{width: "100%"}}>
      {
        inputComponents.map(input => {
          const Component = input.component;
          return (
            <div className={classes.root} key={input.id}>
              <Component values={{denialId}} />  
            </div> 
          )       
        })
      }
    </div>
  )
}