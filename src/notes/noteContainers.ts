import { INoteContainer } from "../interfaces/INoteContainer";
import IValues from "../interfaces/IValues";
import { setClaimNoteData, setClinicalRationaleData, setMedClaimReviewData } from "../redux/actions/notes";
import { claimNote } from "../templates/noteTemplates/claimNote";
import { clinicalRationale } from "../templates/noteTemplates/clinicalRationale";
import { followDecision } from "../templates/noteTemplates/followDecision";
import { fullReview } from "../templates/noteTemplates/fullReview";

export const noteContainers: {[index: string]: INoteContainer} = {
  
  "claimNote": {
    id: "claimNote",
    setNoteData: setClaimNoteData,
    template: claimNote,
    title: "Claim Note",
    withCapWordButtons: false 
  },

  "clinicalRationale": {
    id: "claimNote",
    setNoteData: setClinicalRationaleData,
    template: clinicalRationale,
    title: "Clinical Rationale",
    withCapWordButtons: false 
  },

  "medClaimReviewNote": {
    id: "medClaimReviewNote",
    setNoteData: setMedClaimReviewData,
    template: (values: IValues): string[] => values.reviewed === "no" ? fullReview : followDecision,
    title: "Medical Claim Review Note",
    withCapWordButtons: true 
  }
}