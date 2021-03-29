export const editAddOnSummary = (addOnSummary, addOnText, isMet) => {
  return isMet
    ? [...addOnSummary, addOnText]
    : addOnSummary.filter(item => item !== addOnText)
}