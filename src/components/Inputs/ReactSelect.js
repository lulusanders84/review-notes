/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputs, setOptions } from '../../redux/actions';
import Chip from '../Chip';


export default function ReactSelect({id, label}) {
  const values = useSelector(state => state.values);
  const {lob} = values;
  const dispatch = useDispatch();
  const options = useSelector(state => state.options[`${id}Options`]);
  React.useEffect(() => {
    dispatch(setOptions({lob, id}))
  }, [dispatch, lob, id])

  function handleChangeMulti(e, values) {
    dispatch(handleInputs({name: id, value: values}, dispatch)); 
  }

  return (
    <Autocomplete
      multiple
      onChange={handleChangeMulti}
      id={id}
      options={options}
      autoHighlight
      value={values[id]}
      getOptionLabel={(option) => option.value}
      renderOption={(option) => (
        <React.Fragment>
          {option.label}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
      renderTags={(tagValue, getTagProps) => {
      return tagValue.map((option, index) => (
        <Chip {...getTagProps({ index })} data={option} id={id} />
      ));
    }}
    />
  );
}