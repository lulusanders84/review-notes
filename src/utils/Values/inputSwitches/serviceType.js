export const serviceType = (value, values) => {
  return { 
    drugReview: value.value === "drug" 
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