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
        ? editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", true)
        : editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", false)
      : editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", false)
  })
