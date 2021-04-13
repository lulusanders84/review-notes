import * as utils from '../../utils/Notes';
import { setCode, setPend } from '../InfoRequestNote/getInfoRequestData';
import { formatToName } from '../../utils/formatting/formatToName'

export const getMedClaimReviewData = (values) => {
  const data = {
    lob: setLob(values),
    name: values.name,
    req: values.req,
    service: setService(values),
    decisionReqInfo: setDecisionReqInfo(values),
    drugRequest: setDrugRequest(values),
    exCircum: values.exCircum,
    code: setCode(values),
    pend: setPend(values),
    policyString: utils.setPolicyString(values, "med policy"),
    pa: setPa(values),
    claimHistory: values.claimHistory,
    benefits: setBenefits(values),
    summary: setSummary(values),
  }
  data.criteriaMet = setCriteriaMet(values, data);
  data.criteriaNotMet = setCriteriaNotMet(values, data);
  data.deter = setDeter(values, data);
  
  return data;
}

const setLob = (values) => {
  return utils.capWord(values.lob);
}
const setService = (values) => {
  return formatToName(values.service.toLowerCase());
}
const setDrugRequest = (values) => {
  return values.serviceType === "drug" 
    ? values.reviewed === "no" 
      ? utils.capWord(values.drugReviewType)
      : "N/A (following prior decision)" 
    : "N/A";
}
const setPa = (values) => {
  const pa = utils.setHistory(values, "PA")
  return values.reviewed === "yes"
    ? values.paType === "PA"
      ? "Y"
      : "N"
    : pa;
}

const setDecisionReqInfo = (values) => {
  return utils.setHistory(values, values.paType)
}
const setBenefits = (values) => {
  return values.lob === "FEP" 
    ? values.fepBenefits
    : values.benefits
}
const setSummary = (values) => {
  return utils.setCaseSummary(values);
}
const setCriteriaMet = (values, data) => {
  const { policyString } = data;
  return values.deter === "approve" && policyString !== "N/A" 
    ? `All ${policyString} criteria met`
    : values.deter === "send to medical director"
          ? values.criteriaMet 
          : "N/A";
            
}
const setCriteriaNotMet = (values, data) => {
  const { policyString } = data;
  return values.criteriaNotMet 
    ? values.criteriaNotMet
    : policyString === "N/A" 
      ? 'N/A'
      : "None";
}
const setDeter = (values, data) => {
  const { policyString } = data;
  const denialMessage = utils.setDenialMessage(values);
  return utils.capWord(values.deter) + utils.setRationale(values, policyString, denialMessage)
}
