import { addOnSummaryContent } from "../../data/addOnSummaryContent"

export const editAddOnSummary = (addOnSummary, addOnKey, isMet) => {
  const addOnText = addOnSummaryContent[addOnKey]
  return isMet
    ? [...addOnSummary, addOnText]
    : addOnSummary.filter(item => item !== addOnText)
}