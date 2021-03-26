export const serviceType = (value, values) => {
  console.log(value)
  return { 
    drugReview: value.value === "Injectable Drug" 
      ? true 
      : false,
    specificType: value.value === "drug"
      ? "Injectable Drug"
      : value.value === "DME"
        ? "DME"
        : values.specificType,
    noPricingRationale: value.value === "DME"
      ? "DME"
      : value.value === "Diagnostic Lab" 
      ? "Lab"
      : values.noPricingRationale
  }
}