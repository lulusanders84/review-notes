import React from 'react';
import TextInput from './BaseInputs/TextInput';
import ReactSelectSingle from './BaseInputs/ReactSelectSingle';

const BenefitsInput = (props) => {
  return (
    <div style={{width: "100%"}}>
    {props.values.lob === "FEP"
      ? <ReactSelectSingle id="fepBenefits" placeholder="" label="Benefits" labelFormat="lower"   suggestions={JSON.parse(window.localStorage.getItem("fepBenefits"))} sentence={true} />               
      : <TextInput id="benefits" placeholder="" label="Benefits"   />
    }   
    </div>  
  )
}

export default BenefitsInput;

