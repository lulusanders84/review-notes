import React from 'react';
import TextInput from './TextInput';
import ReactSelectSingle from './ReactSelectSingle';
import { getStorage } from '../../utils';

const BenefitsInput = (props) => {
  return (
    <div style={{width: "100%"}}>
    {props.values.lob === "FEP"
      ? <ReactSelectSingle 
        id="fepBenefits" 
        placeholder="" 
        label="Benefits" 
        suggestions={getStorage("fepBenefits", [])} 
        sentence />               
      : <TextInput id="benefits" placeholder="" label="Benefits" />
    }   
    </div>  
  )
}

export default BenefitsInput;

