import React from 'react';
import TextInput from '../TextInput';

export default function(props) {
  const { reviewed, paType } = props.values;
  const claimHistory = <TextInput id="claimHistory" placeholder="" label="Claim history:" /> 
  const content = reviewed === "no" ? claimHistory : paType !== "PA" ? claimHistory : null
  return (
    <div>
      {content}
    </div>
  )}