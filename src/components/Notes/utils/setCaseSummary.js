import React from 'react';
import { vowels } from "./vowels";
import { formatToName } from "./formatToName"; 
import { setPricingNote } from "./setPricingNote";
import { saveFormatting } from "./saveFormatting";

export const setCaseSummary = (values) => {
    const { age, service, serviceType, dos } = values;
    const provider = formatToName(values.provider.toLowerCase());
    const diagnosis = values.diagnosis.toLowerCase();
    let serviceVerb;
    let proVerb; 
    switch(serviceType) {
        case 'drug':
            serviceVerb = "received";
            proVerb = "provided";
            break;
        case 'DME':
            serviceVerb = 'received a';
            proVerb = "provided";
            break;
        default:
            serviceVerb = "underwent";
            proVerb = "performed";
    }
    const pricingSummary = setPricingNote(values, "summary");
    const modifier22 = values.pend && values.pend.some(pend => {return pend.value === "R5027"})
        ? values.deter === "approve" 
            ? " Operative report demonstrates increased complexity warranting additional allowance."
            : " Operative report doesn't demonstate increased complexity or unusual services that would warrant any additional allowance."
        : ""; 
    const checkServiceFirstChar = vowels.includes(service.charAt(0).toLowerCase());
    serviceVerb = serviceType === "DME" && checkServiceFirstChar ? serviceVerb + "n" : serviceVerb;
    const proTypeVerb = values.proType === "professional" ? "by" : "at";
    const summary = saveFormatting(values.summary);
    return (
        <span>
        {age}-year old member {serviceVerb} {service.toLowerCase()} for {diagnosis} {proVerb} {proTypeVerb} {provider} on {dos}. 
        {summary}{pricingSummary} {modifier22}
        </span>
    )

}