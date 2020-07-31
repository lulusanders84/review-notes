import { initialValues } from "../../Values";
export const allMet = (value, values) => {
  return { 
    exCircum: 
      values.deter === "approve" 
      && !value.value 
      && values.policy.length === 0
        ? initialValues.exCircum
        : "N/A"
  }
}


