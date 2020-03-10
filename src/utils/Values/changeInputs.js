import * as savingPendsUtils from '../ReviewNotes/savingPends'
import { formatToSentence } from '../Notes/formatToSentence';
import { initialValues } from "../Values";
import { serviceTypes } from '../../data/serviceTypes';
import { types } from 'util';

const savePends = savingPendsUtils.savePends;

export const handleInputsChange = (value, values) => {
  const returnObj = handleInputsSwitch( 
    handleServiceSelect, 
    handleStorage, 
    handleInfo,
    value, 
    values);
  return Object.keys(returnObj).map(key => {
    return {name: key, value: returnObj[key], originalName: value.name}
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
            returnObj.code = values.code;
            break;
          case "deny":
            returnObj.rationale = values.rationale;
            break;
          case "send to medical director": 
            returnObj.specificType = "Sent to Medical Director";
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
        if(values.deter === "deny") {
          returnObj.exCircum = value.value === "Not a Covered Benefit" ? value.value : "N/A";          
        }
        break; 
      case "serviceType":
        returnObj.drugReview = value.value === "drug" ? true : false;
        returnObj.specificType= value.value === "drug"
          ? "Injectable Drug"
          : value.value === "DME"
            ? "DME"
            : values.specificType;
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
export const handleBenefits = (value) => {
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
  const codeValue = value.value.toUpperCase().split(",")[0];
  const type = checkRules(codeValue);
  return checkCodes(codeValue, type);
}

const checkCodes = (codeValue, initialType) => {
  return serviceTypes.reduce((acc, type) => {
    let codes = type["Codes"].split(",");
    codes.forEach(code => {
      if(codeValue === code.trim()) {
          acc = type["Service Type"]; 
      } else if(code.includes("-")) {
        const range = code.split("-").map(str => { return str.trim()});
        if(codeValue >= range[0] && codeValue <= range[1]) {
          acc = type["Service Type"];
        }
      }
    })
    return acc;
  }, initialType);
}

const checkRules = (codeValue) => {
  const firstChar = codeValue.charAt(0);
  return serviceTypes.reduce((acc, type) => {
    if(type["Rule"].includes(firstChar)) {
      acc = type["Service Type"]
    }
    return acc;
  }, false)
}