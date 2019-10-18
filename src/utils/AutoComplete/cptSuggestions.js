import {fepPolicies} from "../../data/fepPolicies.js";

export function cptSuggestions(number) {
    if(number) {
        const policy = fepPolicies.find(policy => {
            return policy["Policy #"] === number;
        })
        const hcpcs = policy.HCPCS !== "No HCPCS" ? policy.HCPCS.split(",") : [];
        const codes = [...policy.CPT.split(","), ...hcpcs];

        return codes.map(code => {
            return {label: `${code}`}
        }) 
    } else return [];

}