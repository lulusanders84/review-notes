import { combineReducers } from 'redux';
import valuesReducer from './values';
import claimsReducer from './claims';
import suggestionsReducer from './suggestions';

const rootReducer = combineReducers({
  values: valuesReducer,
  claims: claimsReducer,
  suggestions: suggestionsReducer,
});

export default rootReducer;