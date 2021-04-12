import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputs } from '../../redux/actions';


export function SimpleSelect({id, label, options}) {
  const values = useSelector(state => state.values)
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleInputs({name, value}, dispatch))
  }
  const menuItems = options.map((option, index) => {
    return <MenuItem key={index} value={option}>{option}</MenuItem>
  })
  return (
      <Grid item xs={12}>
      <FormControl fullWidth >
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
        <Select
          value={values[id]}
          onChange={e => {handleOnChange(e)}}
          input={<Input name={id} id={id} />}
          displayEmpty
          name={id}
          fullWidth
        >
        {menuItems}
        </Select>
      </FormControl>
      </Grid>
  );
}


export default SimpleSelect
