import { INoteContainer } from "../interfaces/INoteContainer";
import IValues from "../interfaces/IValues";
import { setClaimNoteData, setMedClaimReviewData, setMisrouteData } from "../redux/actions/notes";
import { noteTemplates } from "../templates/noteTemplates";

const { 
  claimNote, 
  clinicalRationale, 
  denialLetter, 
  followDecision, 
  fullReview,
  infoRequestNote,
  letterNote,
  medPolicy,
  misroute
} = noteTemplates;


export const noteContainers: {[index: string]: INoteContainer} = {
  
  "claimNote": {
    id: "claimNote",
    setNoteData: setClaimNoteData,
    template: claimNote,
    title: "Claim Note",
    withCapWordButtons: false 
  },

  "clinicalRationale": {
    id: "clinicalRationale",
    template: clinicalRationale,
    title: "Clinical Rationale",
    withCapWordButtons: false 
  },

  "denialLetter": {
    id: "denialLetter",
    template: denialLetter,
    title: "Section in Benefits",
    withCapWordButtons: false 
  },

  "infoRequestNote": {
    id: "infoRequestNote",
    template: infoRequestNote,
    title: "Info Request Note",
    withCapWordButtons: true  
  },

  "letterNote": {
    id: "letterNote",
    template: letterNote,
    title: "Note for Letter",
    withCapWordButtons: false 
  },

  "medClaimReviewNote": {
    id: "medClaimReviewNote",
    setNoteData: setMedClaimReviewData,
    template: (values: IValues): string[] => values.reviewed === "no" ? fullReview : followDecision,
    title: "Medical Claim Review Note",
    withCapWordButtons: true 
  },

  "medPolicyNote": {
    id: "medPolicyNote",
    template: medPolicy,
    title: "Medical Policy",
    withCapWordButtons: false 
  },

  "misrouteClaimNote": {
    id: "misrouteClaimNote",
    setNoteData: setMisrouteData,
    template: ["misrouteClaimNote"],
    title: "Claim Note",
    withCapWordButtons: false 
  },  

  "misrouteNote": {
    id: "misrouteNote",
    setNoteData: setMisrouteData,
    template: misroute,
    title: "Misroute Note",
    withCapWordButtons: true 
  },

  "routingNote": {
    id: "routingNote",
    setNoteData: setMedClaimReviewData,
    template: ["routing"],
    title: "Routing",
    withCapWordButtons: false 
  },
}