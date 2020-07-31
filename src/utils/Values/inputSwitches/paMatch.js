export const paMatch = (value, values) => {
  return {
    deter: values["pa-deter"] === "approved" 
      ? "approve" 
      : "deny",
    disableAllMet: value.value === "yes" 
      ? true 
      : false
  }
}