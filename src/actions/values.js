import * as savingPendsUtils from '../utils/ReviewNotes/savingPends'
import { formatToSentence } from '../utils/Notes/formatToSentence';
import { getPolicies } from '../utils/ReviewNotes/setPolicy';
import { initialValues } from "../utils/Values";

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
  let newValues = handleInputsChange(value, values);
  newValues.forEach(value => {
    newValues = [...newValues, ...handleInputsChange(value, values)]
  })
  newValues.forEach(value => {
    dispatch(setValue(value))
    
  })
  
}
const handleInputsChange = (value, values) => {
  const returnObj = handleInputsSwitch( 
    handleServiceSelect, 
    handleStorage, 
    handleInfo,
    value, 
    values);
  return Object.keys(returnObj).map(key => {
    return {name: key, value: returnObj[key], mark: "handle"}
  });
}

const handleInputsSwitch = (serviceSelect, storage, info, value, values) => {
  let returnObj = {};
  switch(value.name) {
      case "allMet":
        returnObj.exCircum = values.deter === "approve" && !value.value
          ? initialValues.exCircum
          : "N/A";
        break;
      case "claimType": 
        if(value.value === "home") {
          returnObj.noPricingRationale = "Home claim"
        };
        break;
      case "code":
        returnObj.serviceType = serviceSelect(value);
        break; 
      case "deter":
        switch (value.value) {
          case "approve":
            returnObj.exCircum = values.policy.length === 0
            ? initialValues.exCircum
            : "N/A";
            returnObj.allMet = values.policy.length !== 0 ? true : false
            break;
          case "deny":
            returnObj.rationale = values.rationale;
            break;
          default: break;
        }
        break; 
      case "lob":
        storage(value);
        if(value.value === "FEP") {
          returnObj.claimType = "local"
        }
        break;
      case "pa-diagnosis":
          returnObj.diagnosis = value.value;
          break;
      case "pa-deter":
        if(values["pa-match"] === "yes") {
          const newValue = value.value === "approved" ? "approve" : "deny";
          returnObj.deter = newValue;
          returnObj.disableAllMet = true;
        } 
        break;           
      case "pa-match": 
        returnObj.deter = values["pa-deter"] === "approved" ? "approve" : "deny";
        returnObj.disableAllMet = value.value === "yes" ? true : false;
        break;        
      case "pa-provider":
          returnObj.provider = value.value;
        break; 
      case "pend":
        if(value && value.value !== null) {value.value.forEach(value => {savePends(value, values.lob)})}
        break;
      case "policy":
        returnObj.info = info(value.value);
        returnObj.interqual = handleInterqual(value);
        returnObj.deter = values.deter;
        returnObj.rationale = values.rationale;
        break; 
      case "rationale":
        returnObj.exCircum = value.value === "Not a Covered Benefit" ? value.value : "N/A";
        break; 
      case "serviceType":
        returnObj.drugReview = value.value === "drug" ? true : false;
        returnObj.type= value.value === "drug"
          ? "Injectable Drug"
          : value.value === "DME"
            ? "DME"
            : values.type;
        break;        
      case "special":
        if(value.value === "host") {
          returnObj.claimSystem = "INSINQ";
        };
        break;
      default: break;
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
  return firstChar === "J" ? "drug" : !parsed ? "DME" : "procedure";
}

export const SET_VALUE = 'SET_VALUE';
export const setValue = (value) => ({
    type: SET_VALUE,
    value,
});