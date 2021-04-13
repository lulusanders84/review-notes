import CriteriaNote from "../components/CriteriaNote";
import MedDirectorNote from "../components/Notes/MedClaimReviewNote/MedDirectorNote"
import NoteLine from "../components/NoteLine";
import { INote } from "../interfaces/INote";

export const notes: {[index: string]: INote} = {
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

  "decisionReqInfo": {
    component: NoteLine,
    id: "decisionReqInfo",
    title: "Request # utilized to apply decision: "
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

  "lob": {
    component: NoteLine,
    id: "lob",
    title: "LOB: "
  },

  "medDirectorNote": {
    component: MedDirectorNote,
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

  "req": {
    component: NoteLine,
    id: "req",
    title: "REQ-"
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