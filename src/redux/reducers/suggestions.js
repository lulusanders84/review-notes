
import { daysOfTheWeek } from "../../data/daysOfTheWeek";
import { setNetworkSuggestions, policySuggestions, suggestions} from "../../utils/AutoComplete";

const initialState = {
  policy: policySuggestions(),
  daysOffOptions: suggestions(daysOfTheWeek),
  options: [],
  networkSuggestions: setNetworkSuggestions()
}
const reducer = (state=initialState, action) => {
  switch(action.type) { 
    case 'SET_OPTIONS':
        return Object.assign({}, state, {
        options: action.options
      }) 
    default:
      return state;
  }
}

export default reducer;
