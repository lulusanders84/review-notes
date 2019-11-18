import * as savingPendsUtils from '../utils/ReviewNotes/savingPends'
import { formatToSentence } from '../utils/Notes/formatToSentence';
import { getPolicies } from '../utils/ReviewNotes/setPolicy';
import { Code } from '../classes/Values/Values'

const savePends = savingPendsUtils.savePends;
export const handleInputs = value => (dispatch, getState) => {
  if(value.name === "benefits" || value.name === "fepBenefits") {
    value = handleBenefits(value);
  };
  if(value.name === "policy") {
    const policiesSet = new Set(getPolicies(value.value));
    value.value = Array.from(policiesSet)
  };
  if(value.value === null) {
    value.value = ""
  };
  dispatch(setValue(value));
  const values = getState().values;
  const newValues = handleInputsChange(value, values);
  newValues.forEach(value => {
    dispatch(setValue(value))
  })
}
const handleInputsChange = (value, values) => {
  const returnObj = handleInputsSwitch(
    handleInputsChange,  
    handleStorage, 
    handleInfo,
    value, 
    values);
  return Object.keys(returnObj).map(key => {
    return {name: key, value: returnObj[key], mark: "handle"}
  });
}

const handleInputsSwitch = (handler, storage, info, value, values) => {
  let returnObj = {};
  switch(value.name) {
      case "policy":
        returnObj.info = info(value.value);
        returnObj.interqual = handleInterqual(value);
        break;
      case "pa-deter":
        if(values["pa-match"] === "yes") {
          const newValue = value.value === "approved" ? "approve" : "deny";
          handler({name: "deter", value: newValue});
          returnObj.disableAllMet = true;
        } 
        break;           
      case "pa-match": 
        const newValue = values["pa-deter"] === "approved" ? "approve" : "deny";
        handler({name: "deter", value: newValue});
        const disableAllMet = value.value === "yes" ? true : false;
        returnObj.disableAllMet = disableAllMet;
        break;
      case "deter":
        if(value.value !== "approve") {handler({name: "allMet", value: false})};
        break;
      case "code":
        const code = new Code(value);
        code.relationships.forEach(r => {
          returnObj[r.key] = r.relationship(code, r.key);
        })
        // serviceSelect(value);
        break;
      case "name":
      case "lob":
        storage(value);
        if(value.value === "FEP") {
          returnObj.claimType = "local"
        }
        break;
      case "pa-diagnosis":
          returnObj.diagnosis = value.value;
          break;
      case "pa-provider":
          returnObj.provider = value.value;
        break;
      case "serviceType":
        returnObj.drugReview = value.value === "drug" ? true : false;
        const type = value.value === "drug"
          ? "Injectable Drug"
          : value.value === "DME"
            ? "DME"
            : null;
        returnObj.type = type;
        break;
      case "pend":
        if(value && value.value !== null) {value.value.forEach(value => {savePends(value, values.lob)})}
        break;
      default:
        break;
    }
  return returnObj;
}
const handleInterqual = (policy) => {
  return policy.value.some(policy => {
    return policy["Policy #"] === "InterQual";
  })
}
const handleBenefits = (value) => {
  const { name } = value;
  return {name, value: formatToSentence(value.value)}
}
const handleInfo = (policies) => {
    return policies.length !== 0 ? getInfo(policies) : ""
}
const getInfo = (policies) => {
  return policies.reduce((acc, policy) => {
    if(policy.info !== "") {
      acc.push(policy.info);
    }
    return acc;
    },[]).join("\n\n"); 
}
const handleStorage = (value) => {
  window.localStorage.setItem(value.name.trim(), value.value.trim())
}
const handleServiceSelect = (value) => {
  const firstChar = value.value.charAt(0).toUpperCase();
  const parsed = parseInt(firstChar);
  const serviceType = firstChar === "J" ? "drug" : !parsed ? "DME" : "procedure";
  handleInputs({name: "serviceType", value: serviceType});
}

export const SET_VALUE = 'SET_VALUE';
export const setValue = (value) => ({
    type: SET_VALUE,
    value,
});