import CriteriaNote from "../components/CriteriaNote";
import MedDirectorNote from "../components/Notes/MedDirectorNote"
import NoteLine from "../components/NoteLine";
import NoteContainer from "../components/Notes/NoteContainer";
import { setMedClaimReviewData } from "../redux/actions/notes";
import { fullReview } from "../templates/noteTemplates/fullReview";
import { followDecision } from "../templates/noteTemplates/followDecision";
import IValues from "../interfaces/IValues";
import { INotes } from "../interfaces/INotes";
import Info from "../components/Notes/Info";
import FaxAndDate from "../components/Notes/FaxAndDate";

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
    title: "Clinical Rationale"
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

  "faxAndDate": {
    component: FaxAndDate
  },

  "info": {
    component: Info
  },

  "letterNote": {
    component: NoteContainer,

  },

  "lob": {
    component: NoteLine,
    id: "lob",
    title: "LOB: "
  },

  "medClaimReviewNote": {
    component: NoteContainer,
    setNoteData: setMedClaimReviewData,
    template: (values: IValues): string[] => values.reviewed === "no" ? fullReview : followDecision,
    title: "Medical Claim Review Note",
    withCapWordButtons: true 
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