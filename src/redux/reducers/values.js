import {initialValues} from '../../utils/Values'

const initialState = initialValues;

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_VALUE":
        const { name, value } = action.value; 
        return Object.assign({}, state, {
          [name]: value
        });
    default:
      return state;
  }
}

export default reducer;