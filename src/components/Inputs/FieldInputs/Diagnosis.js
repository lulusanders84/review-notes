import React from 'react';
import TextInput from '../TextInput';

export default function(props) {
  const id = props.id === undefined
    ? "diagnosis"
    : props.id
  return (
    <TextInput id={id} placeholder="" label="Diagnosis:" />
  )}