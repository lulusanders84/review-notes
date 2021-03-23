import React from 'react';
import TextInput from '../TextInput';

export default function(props) {
  const id = props.id === undefined
  ? "req"
  : props.id
  return (
    <TextInput id={id} placeholder="Enter number" label="REQ-"   />
  )}
