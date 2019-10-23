import * as savingPendsUtils from '../utils/ReviewNotes/savingPends'

const savePends = savingPendsUtils.savePends;

export const handleInputs = (value) => (dispatch, getState) => {
  dispatch(setValue(value));
  const returnObj = handleInputsSwitch(
    handleInputs, 
    handleServiceSelect, 
    handleStorage, 
    handleInfo,
    value, 
    getState().values);
  const changedValues = Object.keys(returnObj).map(key => {
    return {name: key, value: returnObj[key], mark: "handle"}
  });
  changedValues.forEach(value => {
    handleInputs(value);
  })
}

const handleInputsSwitch = (handler, serviceSelect, storage, info, value, values) => {
  let returnObj = {};
  switch(value.name) {
      case "policy":
        info(value.value);
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
        serviceSelect(value);
        break;
      case "name":
      case "lob":
        storage(value);
        if(value.value === "FEP") {
          returnObj.claimType = "local"
        }
        break;
      case "pa-diagnosis":
          value.name = "diagnosis";
          handler(value);
          break;
      case "pa-provider":
        value.name = "provider";
        handler(value);
        break;
      case "serviceType":
        returnObj.drugReview = value.value === "drug" && values.reviewed === "no" ? true : false;
        const type = value.value === "drug"
          ? "Injectable Drug"
          : value.value === "DME"
            ? "DME"
            : null;
        returnObj.type = type;
        break;
      case "pend":
        if(value) {value.value.forEach(value => {savePends(value, values.lob)})}
        break;
      default:
        break;
    }
  return returnObj;
}

const handleInfo = (policies) => {
    const info = policies.length !== 0 ? getInfo(policies) : ""
    handleInputs({name: "info", value: info});
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