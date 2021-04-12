import { combineReducers } from 'redux';
import valuesReducer from './values';
import claimsReducer from './claims';
import optionsReducer from '././options';
import notesReducer from './notes';

const rootReducer = combineReducers({
  values: valuesReducer,
  claims: claimsReducer,
  options: optionsReducer,
  notes: notesReducer,
});

export default rootReducer;