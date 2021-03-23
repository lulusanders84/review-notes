
export const setRationale = (values, policyString, denialMessage) => {
  return values.reviewed === "yes"
    ? values["paMatch"] === "yes"
      ? `. Matches ${values.paDeter} ${values.paType} for provider and diagnosis.`
      : ""
    : values.deter === "deny" ? " " + denialMessage + "." : values.allMet ? `. Meets ${policyString} criteria.` : "."
}