import * as packageJSON from '../../../package.json'
import { getStorage } from '../../utils'


const initialState = {
  version: packageJSON["version"],
  commercialCurrentVersion: getStorage("commercialPolicyVersion", ""),
  commercialNewVersion: "2/22/21",
  fepCurrentVersion: getStorage("fepPolicyVersion", ""),
  fepNewVersion: "January 2021",

  lastScrape: getStorage("lastScrape", null),

  storedFepPolicies: getStorage("fepPolicies")


}

const reducer = (state=initialState, action) => {
  switch(action.type) { 
    case 'SET_CURRENT_VERSION':
        const {key, version} = action
        return Object.assign({}, state, {
        [key]: version
      }) 
    default:
      return state;
  }
}

export default reducer;