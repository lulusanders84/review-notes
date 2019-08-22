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
    diagnosis: "",
    provider: "",
    proType: "professional",
    proPar: "Par",
    policy: [],
    benefits: "General benefits verified",
    claimType: "local",
    claimSystem: "INSINQ",
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
    sccf: ""
}


