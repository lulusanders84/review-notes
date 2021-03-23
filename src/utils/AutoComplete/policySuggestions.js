import medicarePolicies from "../../data/medicarePolicies";
import { getAllPolicies } from "../ReviewNotes/setPolicy";
import { getStorage } from "../getStorage";

export function policySuggestions(lob) {
    const policies = lob === "commercial" 
        ? getStorage("bcbsmnPolicies", [])
        : lob === "FEP" 
            ? getAllPolicies()
            : medicarePolicies;
    const suggestions = policies.map(policy => {
        return buildPolicy(policy)
    });

    return suggestions.sort((a, b) => {
        return a.label < b.label
            ? -1
            : a.label > b.label
                ? 1
                : 0
    });
}

export function buildPolicy(policy) {
    if(policy) {
        const number = policy["Policy #"];
        const name = policy["Full Policy"];
        return {value: number, label: `${number}: ${name}`}   
    } else return null;
    
}
