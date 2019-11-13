import { fepPolicies as fepPoliciesOnFile } from '../../data/fepPolicies';
import { bcbsmnCodes } from '../../data/bcbsmnCodes';
import { medPolicies } from '../../data/medPolicies';

export const setPolicyByCode = (codes, lob) => {
  const isJ3490 = codes.includes("J3490");
  const policies = codes && !isJ3490
    ? lob === "FEP" 
      ? fep(codes)
      : bcbsmn(codes)
    : null
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
// export const setPolicyByNumber = (policies, oldPolicies) => {
//   if(policies.length !==0) {
//     const fullPolicies = [...medPolicies, ...fepPolicies]; 
//     let newPolicies = policies.map(number => {
//         return fullPolicies.find(policy => {
//           return policy["Policy #"] === number.value;
//         })
//       })
//     if(policies.length >= oldPolicies.length) {
//       ("policies more than old policies")
//       newPolicies = policies.reduce((acc, policy) => {
//         if(!oldPolicies.some(oldPolicy => { return policy["Policy #"] === oldPolicy["Policy #"] })) {
//           acc.push(policy)
//         }
//         return acc;
//         }, [])
//       (newPolicies)
//       return [...newPolicies, ...oldPolicies]; 
//     } else return newPolicies;
//   } else return [];
// }

export const mergePolicyFromCodesArray = (newPoliciesFromCodes, policies) => {
  const newPolicies = getPolicies(newPoliciesFromCodes);
  const allPolicies = [...newPolicies, ...policies];
  let policyNumbers = new Set(allPolicies.map(policy => { return policy.policyName.value }))
  return Array.from(policyNumbers).map(numbers => {
    return allPolicies.find(policy => {
      return policy["Policy #"] === numbers;
    })
  })
}

export const mergePolicyNameArrays = (newPolicyNames, policyNames) => {
  
  const allPolicyNames = [...newPolicyNames, ...policyNames];
  let policyNumbers = new Set(allPolicyNames.map(name => { return name.value}))
  return Array.from(policyNumbers).map(number => {
    return allPolicyNames.find(name => {
      return name.value === number;
    })
  })
}
export const getPolicies = (policyNames) => {
  const fepPolicies =  window.localStorage.getItem("fepPolicies") ? JSON.parse(window.localStorage.getItem("fepPolicies")) : fepPoliciesOnFile;
  const bcbsmnPolicies = window.localStorage.getItem("bcbsmnPolicies") ? JSON.parse(window.localStorage.getItem("bcbsmnPolicies")) : medPolicies;
  const fullPolicies = [...bcbsmnPolicies, ...fepPolicies]; 
  if(policyNames) {
    return policyNames.map(policyName => {
      if(!policyName["Policy #"]){
        const policy = fullPolicies.find(policy => {
          return policy["Policy #"] === policyName.value;
        })
        policy.value = policyName.value;
        policy.label = policyName.label;
        return policy;
      } else return policyName;    
    })
  } else return policyNames;
}


