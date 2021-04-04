import React from 'react';
import TextInput from '../TextInput';
import {useSelector} from 'react-redux';

export default function(props) {
  const { reviewed, paType } = useSelector(state => state.values);
  const claimHistory = <TextInput id="claimHistory" placeholder="" label="Claim history:" /> 
  const content = reviewed === "no" ? claimHistory : paType !== "PA" ? claimHistory : null
  return (
    <div>
      {content}
    </div>
  )}