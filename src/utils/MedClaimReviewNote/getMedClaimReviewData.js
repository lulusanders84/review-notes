import React from 'react';
import * as utils from '../../utils/Notes';
import { setCode, setPend } from '../InfoRequestNote/getInfoRequestData';
import { formatCriteria } from '../Notes/formatCriteria';

export const getMedClaimReviewData = (values) => {
  const data = {
    lob: setLob(values),
    service: setService(values),
    drugRequest: setDrugRequest(values),
    code: setCode(values),
    pend: setPend(values),
    policyString: utils.setPolicyString(values, "med policy"),
    pa: setPa(values),
    claimHistory: setClaimHistory(values),
    benefits: setBenefits(values),
    summary: setSummary(values),
  }
  data.criteriaMet = setCriteriaMet(values, data);
  data.criteriaNotMet = setCriteriaNotMet(values, data);
  data.deter = setDeter(values, data);
  data.decisionReq = setDecisionReq(data);
  
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
  const criteria = values.deter === "approve" && policyString !== "N/A" 
    ? `Applicable ${policyString} criteria met`
    : values.deter === "send to medical director"
          ? values.criteriaMet 
          : "N/A";
  return (
    <span className="ql-editor" style={{paddingLeft: 0}} dangerouslySetInnerHTML={{__html: formatCriteria (criteria)}} />
  )          
}
const setCriteriaNotMet = (values, data) => {
  const { policyString } = data;
  const criteria = values.criteriaNotMet 
    ? values.criteriaNotMet
    : policyString === "N/A" 
      ? 'N/A'
      : "None";
  return setCriteriaSpan(criteria);
}
const setDeter = (values, data) => {
  const { policyString } = data;
  const denialMessage = utils.setDenialMessage(values);
  return utils.capWord(values.deter) + utils.setRationale(values, policyString, denialMessage)
}

const setDecisionReq = ( data) => {
  const pa = data.pa === "PA not found" || data.pa === "PA not found. Service not held to PA enforcement (FEP claim)." 
    ? "N" 
    : "Y";
  return pa === "Y" ? data.pa : data.claimHistory;
}

const setCriteriaSpan = (criteria) => {
  return (
    <span className="ql-editor" style={{paddingLeft: 0}} dangerouslySetInnerHTML={{__html: formatCriteria (criteria)}} />
  )
}
