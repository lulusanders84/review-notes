import { setPolicyString } from '../Notes/setPolicyString';
import { formatCodes } from '../formatCodes';

export const getInfoRequestData = (values) => {
  const data = {
    policyString: setPolicyString(values, "med policy"),
    code: setCode(values),
    pend: setPend(values),
    related: setRelated(values),
    route: setRoute(values)
  }
  return data;
}

export const setCode = (values) => {
  const codes = formatCodes(values.code, "set code");
  return codes;
}
export const setPend = (values) => {
  return values.pend 
    ? values.pend.map(pend => { return pend.value }).join(" / ") 
    : values.pend;
}
const setRelated = (values) => {
  return values.related !== "N/A" 
    ? values.related.split(",").map(related => {return `REQ-${related}`}).join(", ") 
    : values.related;
}
const setRoute = (values) => {
  return values.claimType === "home" 
    ? `B2 (SCCF: ${values.sccf})` 
    : "Letter";
}
