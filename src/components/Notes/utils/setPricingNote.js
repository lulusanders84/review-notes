export const setPricingNote = (values, type) => {
    return type === "claim note"
        ? pricingClaimNote(values)
        : pricingSummary(values);
}

const pricingClaimNote = (values) => {
    return values.pend && values.pend.some(pend => {return pend.value === "P5194"})
        ? values.pricing === "Not required"
            ? ""
            : `, for ${values.code} allow ${values.allowable}, MSR ${values.msr.toLowerCase()},`
        : "";
}
const pricingSummary = (values) => { 
    return values.pend && values.pend.some(pend => {return pend.value === "P5194"})
        ? values.pricing === "Not required"
            ? `${values.noPricingRationale}, pricing not required.`
            : `Per ${values.pricing}, for ${values.code} allow ${values.allowable} based on comparable code ${values.compCode}.`
        : "";
}