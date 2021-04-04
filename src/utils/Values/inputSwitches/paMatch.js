import { editAddOnSummary } from "../editAddOnSummary"


export const paMatch = (value, values) => ({
    deter: values.paDeter === "approved" 
      ? "approve" 
      : "deny",
    disableAllMet: value.value === "yes" 
      ? true 
      : false,
    addOnSummary: values.paType === "related claim" 
      ? value.value === "yes"
        ? editAddOnSummary(values.addOnSummary, "relatedClaim", true)
        : editAddOnSummary(values.addOnSummary, "relatedClaim", false)
      : editAddOnSummary(values.addOnSummary, "relatedClaim", false)
  })
