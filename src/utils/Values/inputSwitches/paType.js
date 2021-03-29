import {editAddOnSummary} from '../editAddOnSummary';

export const paType = (value, values) => ({
  addOnSummary: values.reviewed === "yes" && values.paMatch === "yes"
    ? value.value === "related claim" 
      ? editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", true) 
      : editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", false)
    : editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", false)
  })