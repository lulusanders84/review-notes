
import { formatToName } from "./formatToName";

export const setHistory = (values, type) => {
    const { 
        claimHistory, 
        claimType, 
        lob,
        paDeter, 
        paDos, 
        paDiagnosis, 
        paList, 
        paProvider, 
        paReq, 
        paType,  
        proPar, 
        reviewed,} = values

    const noPA = "PA not found";
    const deterAndType = paDeter === "sent to medical director"
        ? `${paType} pending medical director decision`
        : `${paDeter} ${paType}`
    if(type === paType) {
        const paEnforcement = lob === "FEP" 
            ? "FEP claim"
            : claimType === "home" 
                ? "home claim" 
                : proPar === "Non-Par"
                    ? "non-par provider"
                    : "service not on PA list";
        return reviewed === "yes" 
            ? `${deterAndType} found, DOS: ${paDos}; provider: ${formatToName(paProvider.toLowerCase())}; diagnosis: ${paDiagnosis.toLowerCase()} (see REQ-${paReq})`
            : paList === 'no'
                ? `${noPA}. Service not held to PA enforcement (${paEnforcement}).`
                : noPA;        
    } else {
        return type === "PA" ? noPA : claimHistory;
    }

}