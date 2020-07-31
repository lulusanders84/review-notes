export const claimType = (value) => {
  return { 
    noPricingRationale: value.value === "home"
      ? "Home claim"
      : undefined
  }
}
  
