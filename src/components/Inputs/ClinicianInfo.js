import React from 'react';
import TextInput from './TextInput';

function ClinicianInfo() {
  return (
    <TextInput id="name" placeholder="" label="Clinician:" updateValue={props.handleInputs} />

  )
}

