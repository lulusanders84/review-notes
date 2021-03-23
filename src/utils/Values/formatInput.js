import { 
  benefits, 
  misrouteRationale, 
  policy,
  code,
  pend } from "./inputFormatting";

const formatSwitch = {
  benefits,
  code,
  "fepBenefits": benefits,
  misrouteRationale,
  pend,
  policy,
}

export const formatInput = (value) => {
  return formatSwitch[value.name] 
    ? formatSwitch[value.name](value)
    : value;  
}
