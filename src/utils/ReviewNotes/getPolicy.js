import { getStorage } from "../getStorage";

const fepPolicies = getStorage("fepPolicies", [])

export const getFepPolicy = (policyName) => {
    const l = policyName.length;
    if(l > 6) {
      let number = l === 7 
        ? policyName.substring(0, 7) 
        : policyName.substring(0, 8); 
      number = number.charAt(number.length -1) === ":"
        ? number.substring(0, number.length - 1)
        : number;
      return fepPolicies.find(policy => {
        return policy["Policy #"] === number;
      }) 
    }
}