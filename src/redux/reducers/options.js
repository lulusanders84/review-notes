
import { daysOfTheWeek } from "../../data/daysOfTheWeek";
import { serviceTypes } from "../../data/serviceTypes";
import { getStorage } from "../../utils";
import { createSelectValue } from "../../utils/createSelectValue";
import { getPolicyOptions} from "../../utils/Options";
import { getFepBenefitsOptions } from "../../utils/Options/getFepBenefitsOptions";

const lob = getStorage("lob", "commercial")

console.log(getFepBenefitsOptions())

const initialState = {
  policyOptions: getPolicyOptions(lob),
  daysOffOptions: daysOfTheWeek.map(day => createSelectValue(day)),
  pendOptions: [],
  doseOptions: getStorage("doseUnit", []),
  fepBenefitsOptions: getFepBenefitsOptions(),
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
