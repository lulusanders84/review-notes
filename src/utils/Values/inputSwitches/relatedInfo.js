export const relatedInfo = (value, values) => {
  return {
    rationale: value.value === "related" ? "Information Previously Requested" : "Information Request"       
  }
}