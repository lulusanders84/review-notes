import { serviceTypes } from '../../../data/serviceTypes';

export const handleService = (value) => {
  const codeValue = value.value.toUpperCase().split(",")[0];
  let type = checkRules(codeValue);
  type = checkCodes(codeValue, type);
  return type ? type : "Medical";
}

const checkCodes = (codeValue, initialType) => {
  return serviceTypes.reduce((acc, type) => {
    if(type["Codes"]) {
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
    }
    return acc;
  }, initialType);
}

const checkRules = (codeValue) => {
  const firstChar = codeValue.charAt(0);
  return serviceTypes.reduce((acc, type) => {
    if(type["Rule"]) {
      if(type["Rule"].includes(firstChar)) {
        acc = type["Service Type"]
      }  
    }
    
    return acc;
  }, false)
}