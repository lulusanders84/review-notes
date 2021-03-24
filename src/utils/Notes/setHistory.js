
import { formatToName } from "./formatToName";

export const setHistory = (values, type) => {
    const reviewed = values.reviewed;
    const noPA = "PA not found";
    const { claimHistory } = values;
    if(type === values.paType) {
        const paEnforcement = values.lob === "FEP" 
            ? "FEP claim"
            : values.claimType === "home" 
                ? "home claim" 
                : values.proPar === "Non-Par"
                    ? "non-par provider"
                    : "service not on PA list";
        return reviewed === "yes" 
            ? `${values.paDeter} ${values.paType} found, DOS: ${values.paDos}; provider: ${formatToName(values.paProvider.toLowerCase())}; diagnosis: ${values.paDiagnosis.toLowerCase()} (see REQ-${values.paReq})`
            : values.paList === 'no'
                ? `${noPA}. Service not held to PA enforcement (${paEnforcement}).`
                : noPA;        
    } else {
        return type === "PA" ? noPA : claimHistory;
    }

}