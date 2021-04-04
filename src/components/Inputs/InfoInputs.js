import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { saveInfoToPolicy } from '../../utils/Inputs/savePair';
import TextInput from './TextInput';
import { setButtonLabel } from '../../utils/';

export const InfoInputs = () => {
  const values = useSelector(state => state.values);
  const [saveText, setText] = useState("Save Info To Policy")
  const [disabled, setDisabled] = useState(false)

  const handleOnClick = () => {
    saveInfoToPolicy(values)
    setButtonLabel({
      setText, 
      setDisabled,
      preClickLabel: "Save Info To Policy",
      postClickLabel: "Saved" 
    })
  }

  return (
    <div>
      <TextInput id="info" multiline rows="5" label="Info To Request" />
      <Button onClick={handleOnClick} disabled={disabled}>
        {saveText}
      </Button>

    </div>
  )
}

export default InfoInputs;