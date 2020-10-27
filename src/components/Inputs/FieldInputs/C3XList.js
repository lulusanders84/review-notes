import React from 'react';
import RadioInput from '../RadioInput';

export default function(props) {
  return (
    <div>
    {props.c3xPend 
      ? <RadioInput id="c3x" options={["Yes", "No"]} label="On C3X list?"  />
      : null
    }
    </div>
  )}