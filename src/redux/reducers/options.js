
import { daysOfTheWeek } from "../../data/daysOfTheWeek";
import { referReasons } from "../../data/referReasons";
import { serviceTypes } from "../../data/serviceTypes";
import { getStorage } from "../../utils";
import { createSelectValue } from "../../utils/createSelectValue";
import { getNetworkOptions, getPolicyOptions} from "../../utils/Options";

const lob = getStorage("lob", "commercial")

const initialState = {
  policyOptions: getPolicyOptions(lob),
  daysOffOptions: daysOfTheWeek.map(day => createSelectValue(day)),
  pendOptions: [],
  networkOptions: getNetworkOptions(),
  doseOptions: getStorage("doseUnit", []),
  fepBenefitOptions: getStorage("fepBenefits", []),
  referReasonOptions: referReasons.map(reason => createSelectValue(reason)),
  serviceTypeOptions: serviceTypes.map(type => createSelectValue(type["Service Type"]))
}
const reducer = (state=initialState, action) => {
  switch(action.type) { 
    case 'SET_OPTIONS':
        const {options, key} = action
        return Object.assign({}, state, {
        [key]: options
      }) 
    default:
      return state;
  }
}

export default reducer;
