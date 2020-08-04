import { 
  benefits, 
  misrouteRationale, 
  policy,
  code } from "./inputFormatting";

const formatSwitch = {
  "benefits": benefits,
  "fepBenefits": benefits,
  "misrouteRationale": misrouteRationale,
  "policy": policy,
  "code": code
}

export const formatInput = (value) => {
  return formatSwitch[value.name] 
    ? formatSwitch[value.name](value)
    : value;  
}
