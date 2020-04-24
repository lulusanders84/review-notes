import {fepPolicies} from "../../data/fepPolicies.js";
import { medPolicies } from "../../data/medPolicies";
import * as utils from "../../utils";
import { setNetworkSuggestions } from "../../utils/AutoComplete/setNetworkSuggestions.js";

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

export function policySuggestions(lob) {
  const policies = lob === "commercial" ? medPolicies : [...fepPolicies,...medPolicies];
  const suggestions = policies.map(policy => {
      return buildPolicy(policy)
  });
  return suggestions;
}

export function buildPolicy(policy) {
  if(policy) {
      const number = policy["Policy #"];
      const name = policy["Full Policy"];
      return {value: number, label: `${number}: ${name}`}   
  } else return null;
  
}



export function suggestions (dataFile) {
    if(Array.isArray(dataFile)) {
        return dataFile.map(data => {
            return utils.createSelectValue(data);
        })
    } else {
        return Object.keys(dataFile).map(key =>{
            return utils.createSelectValue(key);
        });
    }
}