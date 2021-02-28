import React from 'react';
import RadioInput from '../RadioInput';

export default function(props) {
  return (
    <div>
    {props.values.pend.some(element => element.value === "CZB") 
      ? <RadioInput id="covidRelated" options={["Yes", "No"]} label="Treatment is COVID-19 related?"  />
      : null
    }
    </div>
  )}