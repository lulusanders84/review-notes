import * as utils from '../../utils/Notes';
import { setPolicyString, setCode, setPend } from '../InfoRequestNote/getInfoRequestData';

export const getMedClaimReviewData = (values) => {
  const data = {
    lob: setLob(values),
    service: setService(values),
    drugRequest: setDrugRequest(values),
    code: setCode(values),
    pend: setPend(values),
    policyString: setPolicyString(values),
    pa: setPa(values),
    claimHistory: setClaimHistory(values),
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
  return utils.formatToName(values.service.toLowerCase());
}
const setDrugRequest = (values) => {
  return values.serviceType === "drug" 
    ? values.reviewed === "no" 
      ? utils.capWord(values.drugReviewType)
      : "N/A (following prior decision)" 
    : "N/A";
}
const setPa = (values) => {
  return utils.setHistory(values, "PA");
}
const setClaimHistory = (values) => {
  return utils.setHistory(values, "related claim");
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
  return values.allMet 
    ? `Applicable ${policyString} criteria met`
    : values.criteriaMet 
      ? values.criteriaMet 
      : policyString === "N/A" 
        ? policyString 
        : "None";
}
const setCriteriaNotMet = (values, data) => {
  const { policyString } = data;
  return values.criteriaNotMet 
    ? values.criteriaNotMet
    : policyString === "N/A" 
      ? policyString 
      : "None";
}
const setDeter = (values, data) => {
  const { policyString } = data;
  const denialMessage = utils.setDenialMessage(values);
  return utils.capWord(values.deter) + utils.setRationale(values, policyString, denialMessage)
}