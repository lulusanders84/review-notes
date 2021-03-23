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
    return {"drugReview": false}
  }
}
