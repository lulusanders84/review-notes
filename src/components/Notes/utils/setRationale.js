import { capWord } from "./capitalizeWord";

export const setRationale = (values, policyString, denialMessage) => {
  return values.reviewed === "yes"
    ? values["pa-match"] === "yes"
      ? `Matches ${values["pa-deter"]} ${values["pa-type"]} for provider and diagnosis.`
      : ""
    : values.deter === "deny" ? denialMessage : values.allMet ? `${policyString} criteria met.` : ""
}