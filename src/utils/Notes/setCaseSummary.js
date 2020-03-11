import React from 'react';
import { vowels } from "./vowels";
import { formatToName } from "./formatToName"; 
import { setPricingNote } from "./setPricingNote";
import { formatToSentence } from './formatToSentence';
import { serviceTypes } from '../../data/serviceTypes';

export const setCaseSummary = (values) => {
    const { age, service, serviceType, dos } = values;
    const provider = values.provider !== undefined ? formatToName(values.provider.toLowerCase()) : "";
    const diagnosis = values.diagnosis !== undefined ? values.diagnosis.toLowerCase() : "";
    let proVerb; 
    const type = serviceTypes.find(type => type["Service Type"] === serviceType);
    console.log(serviceType, type);
    let serviceVerb = type["Verb"] ? type["Verb"] : "underwent";
    const pricingSummary = setPricingNote(values, "summary");
    const modifier22 = values.pend && values.pend.some(pend => {return pend.value === "R5027"})
        ? values.deter === "approve" 
            ? " Operative report demonstrates increased complexity warranting additional allowance."
            : " Operative report doesn't demonstate increased complexity or unusual services that would warrant any additional allowance."
        : ""; 
    const checkServiceFirstChar = vowels.includes(service.charAt(0).toLowerCase());
    serviceVerb = serviceType === "DME" && checkServiceFirstChar ? serviceVerb + "n" : serviceVerb;
    const proTypeVerb = values.proType === "professional" ? "by" : "at";
    const summary = formatToSentence(values.summary);
    const dose = values.drugReview && values.lob === "commercial"
        ? `(${values.dose} ${values.doseUnit})`
        : "";
    return (
        <span>
        {age}-year old member {serviceVerb} {service.toLowerCase()} {dose} for {diagnosis} {proVerb} {proTypeVerb} {provider} on {dos}. {summary}{pricingSummary} {modifier22}
        </span>
    )

}