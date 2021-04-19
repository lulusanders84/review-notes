import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiCheckbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputs } from '../../redux/actions';


export default function Checkbox({id, label, disabled}) {
  const values = useSelector(state => state.values)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(handleInputs({name: id, value: event.target.checked }, dispatch))
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={values[id]}
            onChange={handleChange}
            name={id}
            color="primary"
          />
        }
        label={label}
        disabled={disabled}
      />

    </FormGroup>
  );
}

