import {editAddOnSummary} from '../editAddOnSummary'

export const reviewed = (value, values) => {
  const reviewed = value.value;
  if(reviewed === "no") {
    const affectedValues = {
      "paReq": "",
      "paDos": "",
      paDiagnosis: "",
      "paProvider": "",
      "paMatch": "no",
    }
    if(values.serviceType === "drug") {
      affectedValues["drugReview"] = true
    }
    return affectedValues;
    
  } else {
    return {
      "drugReview": false,
      addOnSummary: values.paType === "related claim" && values.paMatch === "yes"
        ? value.value === "yes"
          ? editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", true) 
          : editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", false)
        : editAddOnSummary(values.addOnSummary, "No additional information has been provided that would warrant a new review.", false) 
    }
  }
}
