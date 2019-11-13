export const getInfoRequestData = (values) => {
  const data = {
    policyString: setPolicyString(values),
    code: setCode(values),
    pend: setPend(values),
    related: setRelated(values),
    route: setRoute(values)
  }
  return data;
}

export const setPolicyString = (values) => {
  if(Array.isArray(values.policy)) {
   return values.policy.length > 0 
    ? values.policy.map(policy => {return policy["Policy #"]}).join(" / ") 
    : "N/A";  
  } else return values.policy;
  
}
export const setCode = (values) => {
  return values.code.toUpperCase();
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
