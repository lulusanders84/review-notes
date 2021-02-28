import React from 'react';
import { formatToName } from "./formatToName"; 
import { setPricingNote } from "./setPricingNote";
import { formatToSentence } from './formatToSentence';
import { CapWords } from '../../classes/CapWords'

export const setCaseSummary = (values) => {
    const { age, dos } = values;
    const service = formatValue(values.service);
    const provider = values.provider !== undefined ? formatToName(values.provider.toLowerCase()) : "";
    const diagnosis = formatValue(values.diagnosis);
    const pricingSummary = setPricingNote(values, "summary");
    const modifier22 = values.pend && values.pend.some(pend => {return pend.value === "R5027"})
        ? values.deter === "approve" 
            ? " Operative report demonstrates increased complexity warranting additional allowance."
            : " Operative report doesn't demonstrate increased complexity or unusual services that would warrant any additional allowance."
        : ""; 
    const summary = formatToSentence(values.summary);
    const dose = values.drugReview && values.lob === "commercial"
        ? `(${values.dose} ${values.doseUnit})`
        : "";
    const c3x = values.c3xPend && values.c3x === "no" ? "Review not required, drug(s) not listed on C3X deferral edit." : null;
    return (
        <span>
        {age}-year old member diagnosed with {diagnosis}; claim  submitted by {provider} for {service} {dose} (DOS: {dos}). {summary}{pricingSummary} {modifier22}{c3x}
        </span>
    )
}
   
 const formatValue = (value) => {
        const valueArr = value.split(" ");
        const capWordsList = new CapWords().getAll();
        return valueArr.map(word => {
            word = word.toUpperCase()
            return capWordsList.includes(word)
                ? word
                : word.toLowerCase();
        }).join(" ").trim();
    }