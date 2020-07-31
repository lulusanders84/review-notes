import { 
  benefits, 
  misrouteRationale, 
  policy } from "./inputFormatting";

const formatSwitch = {
  "benefits": benefits,
  "fepBenefits": benefits,
  "misrouteRationale": misrouteRationale,
  "policy": policy
}

export const formatInput = (value) => {
  return formatSwitch[value.name] 
    ? formatSwitch[value.name](value)
    : value;  
}
