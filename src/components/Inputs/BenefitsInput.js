import React from 'react';
import TextInput from './TextInput';
import ReactSelectSingle from './ReactSelectSingle';
import { getStorage } from '../../utils';
import { useSelector } from 'react-redux';

const BenefitsInput = () => {
  const { lob } = useSelector(state => state.values)
  return (
    <div style={{width: "100%"}}>
    {lob === "FEP"
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

