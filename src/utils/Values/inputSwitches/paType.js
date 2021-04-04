import {editAddOnSummary} from '../editAddOnSummary';

export const paType = (value, values) => ({
  addOnSummary: values.reviewed === "yes" && values.paMatch === "yes"
    ? value.value === "related claim" 
      ? editAddOnSummary(values.addOnSummary, "relatedClaim", true) 
      : editAddOnSummary(values.addOnSummary, "relatedClaim", false)
    : editAddOnSummary(values.addOnSummary, "relatedClaim", false)
  })