export const rationale = (value, values) => {
  return {
    exCircum: values.deter === "deny"
      ? value.value === "Not a Covered Benefit" 
        ? value.value 
        : "N/A"
      : values.exCircum        
  }
}