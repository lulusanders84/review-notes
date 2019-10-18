
import { formatToName } from "./formatToName";

export const setHistory = (values, type) => {
    const reviewed = values.reviewed;
    const noPA = "PA not found";
    if(type === values["pa-type"]) {
        const paEnforcement = values.lob === "FEP" 
            ? "FEP claim"
            : values.claimType === "home" 
                ? "home claim" 
                : values.proPar === "Non-Par"
                    ? "non-par provider"
                    : "service not on PA list";
        return reviewed === "yes" 
            ? `${values["pa-deter"]} ${values["pa-type"]} found, DOS: ${values["pa-dos"]}; provider: ${formatToName(values["pa-provider"].toLowerCase())}; diagnosis: ${values["pa-diagnosis"].toLowerCase()} (see REQ-${values["pa-req"]})`
            : values.paList === 'no'
                ? `${noPA}. Service not held to PA enforcement (${paEnforcement}).`
                : noPA;        
    } else {
        return type === "PA" ? noPA : "No claim history found";
    }

}