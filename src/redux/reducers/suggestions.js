
import { setNetworkSuggestions, policySuggestions} from "../../utils/AutoComplete";

const initialState = {
  policy: policySuggestions(),
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
