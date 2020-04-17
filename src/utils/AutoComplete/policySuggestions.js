// import {fepPolicies} from "../../data/fepPolicies";
import { medPolicies } from "../../data/medPolicies";
import medicarePolicies from "../../data/medicarePolicies";
import { getStorage } from "../getStorage";
import { getAllPolicies } from "../ReviewNotes/setPolicy";

const fepPolicies = getStorage("fepPolicies", null) ? JSON.parse(window.localStorage.getItem("fepPolicies")) : [];

export function policySuggestions(lob) {
    const policies = lob === "commercial" 
        ? medPolicies 
        : lob === "FEP" 
            ? getAllPolicies()
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
