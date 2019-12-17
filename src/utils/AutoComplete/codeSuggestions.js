import {fepPolicies} from "../../data/fepPolicies.js";
import * as utils from "../";

export function codeSuggestions() {
    const codesArray = fepPolicies.reduce((acc, policy) => {
        const hcpcs = policy["HCPCS"] === "No HCPCS" || policy["HCPCS"] === ""
            ? []
            : policy["HCPCS"].split(",");
        const cpts = policy["CPT"] === "No CPT" || policy["CPT"] === ""
            ? []
            : policy["CPT"].split(",");
        acc = [...hcpcs, ...cpts, ...acc];
        return acc;
    }, []);
    const uniqueCodes = new Set(codesArray)
    let suggestions = [];
    uniqueCodes.forEach(code => {
       suggestions.push(utils.createSelectValue(code))
    });
    return suggestions;
}