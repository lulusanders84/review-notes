import React from 'react';
import * as utils from '../../utils/Notes';
import {rejectCodes} from '../../data/rejectCodes';
import { setDenialMessage } from '../Notes';
import { getTwoWeeksFromNow } from '../../utils';
import { formatCodesToString } from '../formatCodes';

export const getClaimNoteData = (values) => {
  const data =  {
    denialType: setDenialType(values),
    codeType: setCodeType(values),
    pend: setPend(values),
    pricing: setPricing(values),
    ocwaNote: setOcwaNote(values),
    modifier22: setModifier22(values),
    CZB: setCZB(values),
    denialMessage: setDenialMessage(values),
    claimNoteAddendum: setClaimAddendum(values)
    
  }
  data.rejectCode = setRejectCode(values, data);  
  data.instructions = setInstructions(values, data);
  data.remainder = setRemainder(values, data);
  return data;
}

const setCZB = (values) => {
  return values.pend.some(element => element.value === "CZB")
    ? values.covidRelated === "yes" 
      ? "(care related to COVID-19 treatment)"
      : "(care not related to COVID-19 treatment)"
    : ""
}

const setClaimAddendum = (values) => {
  return values.noteType === "info request"
    ? setFaxAndDate()
    : ""
}
const setFaxAndDate =() => {
  return (
    <div>
      Return Fax: 651-662-1235
      <br />Return Due Date: {getTwoWeeksFromNow()}
    </div>
  )   
}
const setDenialType = (values) => {
  return values.denialType === "entire claim" ? "entire claim" : formatCodesToString(values.code);
}
const setCodeType = (values) => {
  return `${utils.capWord(values.claimType)} ${values.proPar}`;
}
const setRejectCode = (values, data) => {
  const { codeType } = data;
  return values.rationale ? rejectCodes[values.rationale][codeType]: "";
}
const setPend = (values) => {
  return values.pend ? values.pend.map(pend => {return pend.value.trim()}).join(" / ") : "[no pend entered]";
}
const setPricing = (values) => {
  return utils.setPricingNote(values, "claim note");
}
const setOcwaNote = (values) => {
  return values.claimSystem === "OCWA" ? "Remove E1057/E1058 from claim.": "";
}
const setInstructions = (values, data) => {
  const { pend, pricing, denialType, rejectCode, denialMessage, CZB } = data;
  return values.pend && values.pend.some(pend => {return pend.value === "R5027"})
    ? `Ignore ${pend},`
    : values.deter === "approve" 
      ? `Ignore ${pend}${pricing} ${CZB}`
      : `Deny ${denialType} ${denialMessage} (${rejectCode})`;
}
const setModifier22 = (values) => {
  return values.pend && values.pend.some(pend => {return pend.value === "R5027"})
    ? values.deter === "approve"
      ? ` allow additional allowance, pay ${values.code} at 120% of allowed amount. Apply E20 SAC`
      : ` no additional allowance for 22 modifier, apply E19 SAC`
    : "";
}
const setRemainder = (values, data) => {
  const { denialType } = data;
  return values.deter === "approve" 
    ? " and allow claim to continue processing." 
    : denialType === "claim" 
      ? "." 
      : " and allow claim to continue processing.";
}