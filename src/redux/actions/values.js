import { 
  handleChangeInputs, 
  formatInput, 
  handleArrInputs} from '../../utils/Values';

export const handleInputs = value => (dispatch, getState) => {  
  if(value.value === null) {
    value.value = ""
  };
  const values = getState().values;
  value = handleArrInputs(formatInput(value), values[value.name]); 
  dispatch(setValue(value));

  let newValues = handleChangeInputs(value, values);
  newValues.forEach(value => {
    value = handleArrInputs(formatInput(value), values[value.name]); 
    dispatch(setValue(value)) 
  }) 
}

export const SET_VALUE = 'SET_VALUE';
export const setValue = (value) => ({
    type: SET_VALUE,
    value,
});