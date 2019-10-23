import { combineReducers } from 'redux';
import valuesReducer from './values';
import claimsReducer from './claims';

const rootReducer = combineReducers({
  values: valuesReducer,
  claims: claimsReducer
});

export default rootReducer;