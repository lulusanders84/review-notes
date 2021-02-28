
import stored from "./setStoredValues";

const { lob, name, daysOff, shiftDays, shiftHours } = stored;

export const initialValues = {
    daysOff,
    shiftDays,
    shiftHours,
    covidRelated: "No",
    c3xPend: false,
    c3x: "No",
    name,
    req: "",
    reviewed: "no",
    pend: [],
    code: [],
    age: "",
    dos: "",
    service: "",
    paList: "no",
    pricingClaim: "no",
    pricing: "Not required",
    noPricingRationale: "POC provider",
    msr: "Eligible",
    allowable: "$",
    serviceType: "Medical",
    drugReviewType: "new",
    diagnosis: "",
    provider: "",
    proType: "professional",
    proPar: "Par",
    policy: [],
    benefits: "General benefits verified",
    fepBenefits: "General benefits verified",
    plan: "MAPD",
    claimType: "local",
    claimSystem: "INSINQ",
    special: "N/A",
    deter: "approve",
    "pa-type": "PA",
    "pa-req": "",
    "pa-dos": "",
    "pa-diagnosis": "",
    "pa-provider": "",
    "pa-deter": "approved",
    "pa-match": "yes",
    "pa-rationale": "",
    rationale: "",
    lob,
    allMet: false,
    employee: false,
    moveToDecision: false,
    denialType: "entire claim",
    summary: "",
    related: "N/A",
    info: "",
    sccf: "",
    iqYear: "",
    iqLoc: "",
    iqSubset: "",
    noteType: 1,
    doseUnit: "mg",
    exCircum: "No specific medical policy applies, service appears medically necessary.",
    "clinical-rationale": "",
    linked: false,
    relatedInfo: "new",
    initialReq: "",
    initialSccf: ""
}


