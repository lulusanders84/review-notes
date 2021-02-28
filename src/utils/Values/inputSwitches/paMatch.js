export const paMatch = (value, values) => {
  return {
    deter: values.paDeter === "approved" 
      ? "approve" 
      : "deny",
    disableAllMet: value.value === "yes" 
      ? true 
      : false
  }
}