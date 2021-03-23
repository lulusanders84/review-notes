import { suggestions } from '../../utils/AutoComplete/';
import { pends, fepPends } from '../../data/pends';
import * as savingPendsUtils from '../../utils/ReviewNotes/savingPends'

const setPendOrder = savingPendsUtils.setPendOrder;

export const setNewOptions = (lob) => (dispatch) => {
  const suggestions = pendSuggestions(lob);
  dispatch(setOptions(suggestions))
}

const pendOptions = (lob)=> {
  return lob === "FEP" ? [...fepPends, ...pends] : pends;
}
const pendSuggestions = (lob) => {
  const pendOrder = setPendOrder(pendOptions(lob), lob)
  const options = suggestions(pendOrder)
  return options;
}

const SET_OPTIONS = 'SET_OPTIONS';
export const setOptions = (options) => ({
  type: SET_OPTIONS,
  options,
});
