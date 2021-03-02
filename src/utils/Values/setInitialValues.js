import stored from "./setStoredValues";
import { setBulkValues } from "./setBulkValues";

const blankValues = [
    "age",
    "clinicalRationale",
    "diagnosis",
    "dos",
    "info",
    "initialReq",
    "initialSccf",
    "iqYear",
    "iqLoc",
    "iqSubset",
    "paDiagnosis", 
    "paDos",
    "paProvider",
    "paRationale",
    "paReq",  
    "provider",
    "rationale",
    "req",
    "sccf",   
    "service",
    "summary"
];

const emptyArrayValues = [
    "code",
    "compCode",
    "pend",
    "policy",
];

const falseValues = [
    "allMet",
    "cx3Pend",
    "employee",
    "linked",
    "moveToDecision",
];

const noValues = [
    "c3x",
    "covidRelated",
    "paList",
    "pricingClaim",
    "reviewed"
];

const blanks = setBulkValues(blankValues, "");
const falses = setBulkValues(falseValues, false);
const emptyArrays = setBulkValues(emptyArrayValues, []);
const nos = setBulkValues(noValues, "no");

export const initialValues = {
    ...blanks,
    ...emptyArrays,
    ...falses,
    ...nos,
    ...stored,   
    allowable: "$",
    benefits: "General benefits verified",
    claimSystem: "INSINQ",
    claimType: "local",
    denialType: "entire claim",
    deter: "approve",
    doseUnit: "mg",    
    drugReviewType: "new",
    exCircum: "No specific medical policy applies, service appears medically necessary.",
    fepBenefits: "General benefits verified",
    msr: "Eligible",    
    noPricingRationale: "POC provider",  
    noteType: 1, 
    paDeter: "approved",     
    paMatch: "yes",    
    paType: "PA",      
    plan: "MAPD",          
    pricing: "Not required",
    proPar: "Par",  
    proType: "professional",           
    related: "N/A", 
    relatedInfo: "new",                
    serviceType: "Medical",
    special: "N/A",
}


