import { combineReducers } from 'redux';
import reducer from './reducer'
import values from './values';
import claims from './claims';
import options from '././options';
import notes from './notes';

const rootReducer = combineReducers({
  reducer,
  values,
  claims,
  options,
  notes,
});

export default rootReducer;