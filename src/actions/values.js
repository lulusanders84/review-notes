import { getPolicies } from '../utils/ReviewNotes/setPolicy';
import { handleChangeInputs, handleBenefits } from '../utils/Values';
import { setStorage, saveToStorage, getStorage } from '../utils';


export const handleInputs = value => (dispatch, getState) => {
  if(value.name === "name") {
    saveToStorage("name", value.value);
  }
  if(value.name === "benefits" || value.name === "fepBenefits") {
    value = handleBenefits(value);
  };
  if(value.name === "policy") {
    const policiesSet = new Set(getPolicies(value.value));
    value.value = Array.from(policiesSet)
  };
  if(value.value === null) {
    value.value = ""
  };
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