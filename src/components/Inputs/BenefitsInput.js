import React from 'react';
import TextInput from './TextInput';
import ReactSelectSingle from './ReactSelectSingle';

const BenefitsInput = (props) => {
  return (
    <div style={{width: "100%"}}>
    {props.values.lob === "FEP"
      ? <ReactSelectSingle id="fepBenefits" placeholder="" label="Benefits" labelFormat="lower" updateValue={props.handleInputs}  suggestions={JSON.parse(window.localStorage.getItem("fepBenefits"))} sentence={true} />               
      : <TextInput id="benefits" placeholder="" label="Benefits" updateValue={props.handleInputs}  />
    }   
    </div>  
  )
}

export default BenefitsInput;

