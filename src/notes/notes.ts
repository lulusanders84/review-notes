import CriteriaNote from "../components/CriteriaNote";
import MedDirectorNote from "../components/Notes/MedDirectorNote"
import NoteLine from "../components/Notes/NoteLine";
import { INotes } from "../interfaces/INotes";
import MedPolicy from "../components/Notes/MedPolicy";

export const notes: INotes = {
  "benefits": {
    component: NoteLine,
    id: "benefits",
    title: "Benefits: "
  },

  "code": {
    component: NoteLine,
    id: "code",
    title: "Suspended codes: "
  },

  "claimHistory": {
    component: NoteLine,
    id: "claimHistory",
    title: "Claim history: "
  },

  "claimNote": {
    component: NoteLine,
    id: "claimNote",
    title: ""
  },

  "clinicalRationale": {
    component: NoteLine,
    id: "clinicalRationale",
    title: ""
  },

  "criteriaMet": {
    component: NoteLine,
    content: CriteriaNote,
    id: "criteriaMet",
    title: "Criteria Met: ", 
  },

  "criteriaNotMet": {
    component: NoteLine,
    content: CriteriaNote,
    id: "criteriaNotMet",
    title: "Criteria Not Met: "
  },

  "date": {
    component: NoteLine,
    id: "date",
    title: "Return Due Date: "
  },

  "decisionReqInfo": {
    component: NoteLine,
    id: "decisionReqInfo",
    title: "Request # utilized to apply decision: "
  },

  "denialLetter": {
    component: NoteLine,
    id: "denialLetter",
    title: ""
  },

  "deter": {
    component: NoteLine,
    id: "deter",
    title: "Determination: "
  },

  "drugRequest": {
    component: NoteLine,
    id: "drugRequest",
    title: "Drug Request: "
  },

  "exCircum": {
    component: NoteLine,
    id: "exCircum",
    title: "Extenuating Circumstances: "
  },

  "fax": {
    component: NoteLine,
    id: "fax",
    title: "Return Fax: "
  },

  "info": {
    component: NoteLine,
    id: "info",
    title: "Info Requested: "
  },
  
  "infoRequestReq": {
    component: NoteLine,
    id: "infoRequestReq",
    title: ""
  },

  "initialSccf": {
    component: NoteLine,
    id: "initialSccf",
    title: "Original info request sent on SCCF: "
  },

  "lob": {
    component: NoteLine,
    id: "lob",
    title: "LOB: "
  },

  "medDirectorNote": {
    id: "medDir",
    component: MedDirectorNote,
  },

  "medPolicy": {
    component: MedPolicy,
    id: "medPolicy",
    title: "Medical Policy"
  },

  "misrouteClaimNote": {
    component: NoteLine,
    id: "misrouteClaimNote",
    title: ""
  },

  "misrouteRationale": {
    component: NoteLine,
    id: "misrouteRationale",
    title: "Rationale: "
  },

  "name": {
    component: NoteLine,
    id: "name",
    title: "Clinician name/Extension: "
  },

  "pa": {
    component: NoteLine,
    id: "pa",
    title: "PA on file: "
  },

  "paResearch": {
    component: NoteLine,
    id: "paResearch",
    title: "PA research: "
  },

  "pend": {
    component: NoteLine,
    id: "pend",
    title: "Suspension: "
  }, 

  "policyString": {
    component: NoteLine,
    id: "policyString",
    title: "Medical Policy/Criteria:"
  }, 
  
  "related": {
    component: NoteLine,
    id: "related",
    title: "Related UM requests: "
  },

  "req": {
    component: NoteLine,
    id: "req",
    title: "REQ-"
  },

  "route": {
    component: NoteLine,
    id: "route",
    title: "Route: "
  },

  "routing": {
    component: NoteLine,
    id: "routing",
    title: ""
  },

  "sccf": {
    component: NoteLine,
    id: "sccf",
    title: "SCCF:"
  },

   "service": {
    component: NoteLine,
    id: "service",
    title: "Service: "
  },

  "summary": {
    component: NoteLine,
    id: "summary",
    title: "Case summary: "
  },
}