import { setPolicyString } from '../Notes/setPolicyString';
import { formatCodes } from '../formatCodes';
import { saveFormatting } from '../Notes/saveFormatting';

export const getInfoRequestData = (values) => {
  const data = {
    policyString: setPolicyString(values, "med policy"),
    code: setCode(values),
    pend: setPend(values),
    related: setRelated(values),
    route: setRoute(values),
    info: setInfo(values),
    infoRequestReq: setInfoRequestReq(values),
    paResearch: "No PA found, no history of info requests in UM"
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

const setInfoRequestReq = (values) => {
  const { initialReq, relatedInfo, req, } = values
  return `REQ-${req}: Additional Info Requested ${relatedInfo === "related" ? `on REQ-${initialReq}` : null}`
}
const setInfo = (values) => {
  const { dos, info } = values;
  const infoContent = saveFormatting(info);
  return `For ${dos}:${infoContent}`;
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
