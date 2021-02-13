export const relatedInfo = (value) => {
  return {
    rationale: value.value === "related" ? "Information Previously Requested" : "Information Request"        
  }
}