const setLob = window.localStorage.getItem("lob") ? window.localStorage.getItem("lob") : "commercial";
export const initialValues = {
    name: window.localStorage.getItem("name"),
    req: "",
    reviewed: "no",
    pend: [],
    code: "",
    age: "",
    dos: "",
    service: "",
    paList: "no",
    pricingClaim: "no",
    pricing: "Not required",
    noPricingRationale: "POC provider",
    msr: "Eligible",
    allowable: "$",
    serviceType: "procedure",
    drugReviewType: "new",
    drugReview: false,
    diagnosis: "",
    provider: "",
    proType: "professional",
    proPar: "Par",
    policy: [],
    benefits: "General benefits verified",
    fepBenefits: "General benefits verified",
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
    "pa-match": "no",
    "pa-rationale": "",
    rationale: "",
    lob: setLob,
    allMet: false,
    employee: false,
    denialType: "entire claim",
    summary: "",
    related: "N/A",
    info: "",
    sccf: "",
    iqYear: "",
    iqLoc: "",
    iqSubset: "",
    doseUnit: "mg"
}


