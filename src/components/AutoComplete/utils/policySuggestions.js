import {fepPolicies} from "../../../data/fepPolicies";
import { buildPolicies } from "../../../data/medPolicies";
import { medPolicies } from "../../../data/medPolicies";

export function policySuggestions(lob) {
    const policies = lob === "commercial" ? medPolicies : [...fepPolicies,...medPolicies];
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

const reduceAndSortPolicies = (policies) => {
    return policies.reduce((acc, policy) => {
        if(policy["Policy #"] !== "") {
            acc.push(policy)
        }
        return acc;
    }, []).sort()
}