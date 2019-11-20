import { Value } from "../Value";
import { fepPolicies as fepPoliciesOnFile } from '../../data/fepPolicies';
import { bcbsmnCodes } from '../../data/bcbsmnCodes';
import { medPolicies } from '../../data/medPolicies';

export class Policy extends Value {
  constructor(lob) {
    this.lob = lob;
  }
  getPolicies = () => {
    return lob === "FEP" 
      ? fep(codes)
      : bcbsmn(codes)
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