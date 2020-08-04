export const reviewed = (value, values) => {
  const reviewed = value.value;
  if(reviewed === "no") {
    const affectedValues = {
      "pa-req": "",
      "pa-dos": "",
      "pa-diagnosis": "",
      "pa-provider": "",
      "pa-match": "no",
    }
    if(values.serviceType === "drug") {
      affectedValues["drugReview"] = true
    }
    return affectedValues;
    
  } else {
    return {"drugReview": false}
  }
}
