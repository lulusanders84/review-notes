import { 
  benefits, 
  misrouteRationale, 
  policy,
  code,
  service} from "./inputFormatting";

const formatSwitch = {
  "benefits": benefits,
  "fepBenefits": benefits,
  "misrouteRationale": misrouteRationale,
  "policy": policy,
  "code": code,
  "service": service
}

export const formatInput = (value) => {
  return formatSwitch[value.name] 
    ? formatSwitch[value.name](value)
    : value;  
}
