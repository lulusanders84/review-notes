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
          ? editAddOnSummary(values.addOnSummary, "relatedClaim", true) 
          : editAddOnSummary(values.addOnSummary, "relatedClaim", false)
        : editAddOnSummary(values.addOnSummary, "relatedClaim", false) 
    }
  }
}
