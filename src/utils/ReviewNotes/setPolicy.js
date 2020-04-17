import fepPoliciesOnFile from '../../data/fullPolicies';
import { formatPolicy } from '../../data/scrapePolicies';
import { bcbsmnCodes } from '../../data/bcbsmnCodes';
import { formattedMedicareCodes } from '../../data/medicareCodes';
import { medPolicies } from '../../data/medPolicies';
import { refreshFepPolicies } from '../../data/refreshFepPolicies';
import { getStorage } from '../../utils';

export const setPolicyByCode = (codes, lob) => {
  const isJ3490 = codes.includes("J3490");
  const codeObj = lob === "GP"
    ? formattedMedicareCodes()
    : bcbsmnCodes;
  const policies = codes && !isJ3490
    ? lob === "FEP" 
      ? fep(codes)
      : policyByCodes(codes, codeObj)
    : [];
  return setValueAndLabel(policies);
}

const policyByCodes = (codes, codeObj) => {
  let policies = [];
  codes.forEach(code => {
    policies = codeObj[code] ? [...policies, ...codeObj[code]] : policies;
  })
  return policies;
}
const fep = (codes) => {
  const policies =  window.localStorage.getItem("fepPolicies") ? JSON.parse(window.localStorage.getItem("fepPolicies")) : fepPoliciesOnFile.map(policy => {
    return formatPolicy(policy)
  });
  
  if (policies) {
    return policies.reduce((acc, policy) => {
      const hcpcs = !policy["HCPCS"] || policy["HCPCS"] === "No HCPCS" || policy["HCPCS"] === ""
        ? []
        : policy["HCPCS"].split(",");
      const cpts = !policy["CPT"] || policy["CPT"] === "No CPT" || policy["CPT"] === ""
        ? []
        : policy["CPT"].toString().split(",");
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
  } else return [];
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
  const fullPolicies = getAllPolicies();
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


export function getAllPolicies() {
  let fepPolicies = getStorage("fepPolicies", null);
  if (fepPolicies === null) {
    refreshFepPolicies();
    fepPolicies = getStorage("fepPolicies", null);
  }
  const storedBcbsmnPolicies = getStorage("bcbsmnPolicies", null);
  let bcbsmnPolicies = storedBcbsmnPolicies !== null ? storedBcbsmnPolicies : medPolicies;
  const fullPolicies = [...fepPolicies, ...bcbsmnPolicies];
  return fullPolicies;
}

