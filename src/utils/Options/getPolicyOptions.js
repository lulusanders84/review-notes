import medicarePolicies from "../../data/medicarePolicies";
import { getAllPolicies } from "../ReviewNotes/setPolicy";
import { getStorage } from "../getStorage";
import {buildPolicy} from "./buildPolicy";


export function getPolicyOptions(lob) {
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


