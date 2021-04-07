import MUIButton from '@material-ui/core/Button';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setButtonLabel } from '../../utils/';

export function Button({clickHandling, preClickLabel, postClickLabel}) {
  const values = useSelector(state => state.values);
  const [text, setText] = useState(preClickLabel)
  const [disabled, setDisabled] = useState(false)

  const handleOnClick = () => {
    clickHandling(values)
    setButtonLabel({
      setText, 
      setDisabled,
      preClickLabel,
      postClickLabel, 
    })
  }

  return (
      <MUIButton onClick={handleOnClick} disabled={disabled}>
        {text}
      </MUIButton>
  )
}

export default Button;