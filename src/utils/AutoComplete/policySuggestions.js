// import {fepPolicies} from "../../data/fepPolicies";
import { medPolicies } from "../../data/medPolicies";
import medicarePolicies from "../../data/medicarePolicies";

const fepPolicies = window.localStorage.getItem("fepPolicies") ? JSON.parse(window.localStorage.getItem("fepPolicies")) : [];

export function policySuggestions(lob) {
    const policies = lob === "commercial" 
        ? medPolicies 
        : lob === "fep" 
            ? [...fepPolicies,...medPolicies]
            : medicarePolicies;
    const suggestions = policies.map(policy => {
        return buildPolicy(policy)
    });
    return suggestions;
}

export function buildPolicy(policy) {
    if(policy) {
        const number = policy["Policy #"];
        const name = policy["Full Policy"];
        return {value: number, label: `${number}: ${name}`}   
    } else return null;
    
}
