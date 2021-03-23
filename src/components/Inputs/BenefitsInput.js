import React from 'react';
import TextInput from './TextInput';
import ReactSelectSingle from './ReactSelectSingle';
import { getStorage } from '../../utils';

const BenefitsInput = (props) => {
  return (
    <div style={{width: "100%"}}>
    {props.values.lob === "FEP"
      ? <ReactSelectSingle id="fepBenefits" placeholder="" label="Benefits" labelFormat="lower"   suggestions={getStorage("fepBenefits", [])} sentence={true} />               
      : <TextInput id="benefits" placeholder="" label="Benefits" />
    }   
    </div>  
  )
}

export default BenefitsInput;

