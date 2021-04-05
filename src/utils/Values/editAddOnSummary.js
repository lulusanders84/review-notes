import { addOnSummaryContent } from "../../data/addOnSummaryContent"
import { cleanArray } from '../'

export const editAddOnSummary = (addOnSummary, addOnKey, isMet) => {
  const addOnText = addOnSummaryContent[addOnKey]
  const newAddOnSummary = isMet
    ? [...addOnSummary, addOnText]
    : addOnSummary.filter(item => item !== addOnText)
  return cleanArray(newAddOnSummary)
}