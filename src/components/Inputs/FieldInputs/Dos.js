import React from 'react';
import TextInput from '../TextInput';

export default function(props) {
  const id = props.id === undefined
  ? "dos"
  : props.id
  return (
    <TextInput id={id} placeholder="" label="Date of service:"   />              
  )}