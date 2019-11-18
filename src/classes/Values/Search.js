import { Relationship } from "./Relationship";

export class Search extends Relationship {
  constructor(keyValue) {
    super(keyValue);
    this.setRelationship(this.relationship)
  }
  relationship = (input, keyValue, range) => {
    const { name, value } = input;
    keyValue = capWord(keyValue);
    const storageLocation = `${name.toLowerCase()}${keyValue}Pairs`;
    return getValueFromPair(storageLocation, value);      
  }
}

export const setPolicyByCode = (codes, lob) => {
  const isJ3490 = codes.includes("J3490");
  const policies = codes && !isJ3490
    ? lob === "FEP" 
      ? fep(codes)
      : bcbsmn(codes)
    : [];
  return setValueAndLabel(policies);
}

const bcbsmn = (codes) => {
  let policies = [];
  codes.forEach(code => {
    policies = bcbsmnCodes[code] ? [...policies, ...bcbsmnCodes[code]] : policies;
  })
  return policies;
}
const fep = (codes) => {
  const policies =  window.localStorage.getItem("fepPolicies") ? JSON.parse(window.localStorage.getItem("fepPolicies")) : fepPoliciesOnFile;
  return policies.reduce((acc, policy) => {
    const hcpcs = policy["HCPCS"] === "No HCPCS" || policy["HCPCS"] === ""
      ? []
      : policy["HCPCS"].split(",");
    const cpts = policy["CPT"] === "No CPT" || policy["CPT"] === ""
      ? []
      : policy["CPT"].split(",");
    const codesList = [...hcpcs, ...cpts].map(code => { return code.toUpperCase().trim()});
    codes.forEach(code => {
      if(code !== ""){
        if(codesList.includes(code)) {
          acc.push(policy)
        }
      }
    })
    return acc;
  }, []) 
}

const setValueAndLabel = (policies) => {
  policies.forEach(policy => {
    policy.value = policy["Policy #"];
    policy.label = `${policy["Policy #"]}: ${policy["Full Policy"]}`
  })
  return policies;
}