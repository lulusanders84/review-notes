import { 
  handleChangeInputs, 
  formatInput } from '../../utils/Values';

export const handleInputs = value => (dispatch, getState) => {  
  console.log(value);
  if(value.value === null) {
    value.value = ""
  };
  value = formatInput(value);
  dispatch(setValue(value));
  const values = getState().values;
  let newValues = handleChangeInputs(value, values);
  newValues.forEach(value => {
    dispatch(setValue(value)) 
  })
  
}

export const SET_VALUE = 'SET_VALUE';
export const setValue = (value) => ({
    type: SET_VALUE,
    value,
});