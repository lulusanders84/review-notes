export const setPricingNote = (values, type) => {
    return type === "claim note"
        ? pricingClaimNote(values)
        : pricingSummary(values);
}

const pricingClaimNote = (values) => {
    return values.pend && values.pend.some(pend => {return pend.value === "P5194"})
        ? values.pricing === "Not required"
            ? ""
            : values.pricing === "PPPWeb"
                ? `, for ${values.code} (${values.service}) allow ${values.allowable}, MSR ${values.msr.toLowerCase()},`
                : `, for ${values.code} (${values.service}) allow ${values.allowable} for all UOS,`  
        : "";
}
const pricingSummary = (values) => { 
    const medicareNetwork = values.lob === "GP"
        ? `based on ${values.network}`
        : null;
    const pricingRationale = values.noPricingRationale === "Home claim" 
        ? "Per B2"
        : values.noPricingRationale;
    return values.pend && values.pend.some(pend => {return pend.value === "P5194"})
        ? values.pricing === "Not required"
            ? `${pricingRationale}, pricing not required.`
            : `Per ${values.pricing} ${medicareNetwork}, for ${values.code} allow ${values.allowable} based on comparable code ${values.compCode} and .`
        : "";
}