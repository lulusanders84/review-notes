import { INoteContainer } from "../interfaces/INoteContainer";
import IValues from "../interfaces/IValues";
import { setMedClaimReviewData } from "../redux/actions/notes";
import { followDecision } from "../templates/noteTemplates/followDecision";
import { fullReview } from "../templates/noteTemplates/fullReview";

export const noteContainers: {[index: string]: INoteContainer} = {
  "medClaimReviewNote": {
    setNoteData: setMedClaimReviewData,
    template: (values: IValues): string[] => values.reviewed === "no" ? fullReview : followDecision,
    title: "Medical Claim Review Note",
    withCapWordButtons: true 
  }
}