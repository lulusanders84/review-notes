import { combineReducers } from 'redux';
import valuesReducer from './values';
import claimsReducer from './claims';
import suggestionsReducer from './suggestions';
import notesReducer from './notes';

const rootReducer = combineReducers({
  values: valuesReducer,
  claims: claimsReducer,
  suggestions: suggestionsReducer,
  notes: notesReducer,
});

export default rootReducer;