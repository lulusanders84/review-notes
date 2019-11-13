import { fepPolicies } from "../../data/fepPolicies";
import { medPolicies } from "../../data/medPolicies";

export const getPoliciesByCodes = (codes) => {
  const policies = [...fepPolicies, ...medPolicies];
  return codes.reduce((acc, code) => {
    policies.forEach(policy => {
      if(policy.CPT.includes(code) || policy.HCPCS.includes(code)) {
        acc.push(policy)
      }
    })
    return acc;
  }, [])
}
