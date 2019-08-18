import { capWord } from "./capitalizeWord";
import { formatToName } from "./formatToName";
import { capAcronyms } from "./capitalizeAcronyms";

export const setHistory = (values, type) => {
    const reviewed = values.reviewed;
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
                ? `No. Service not held to PA enforcement (${paEnforcement}).`
                : "No PA found";        
    } else {
        return type === "PA" ? "No PA found" : "No claim history found";
    }

}