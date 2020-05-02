import React from 'react';
import RadioInput from './BaseInputs/RadioInput';

const ProviderType = (props) => {
  return (
    <RadioInput id="proType" options={["professional", "facility"]} label="Provider Type" updateValue={props.updateValue} />

  )
}

export default ProviderType;