import { initialValues } from "../../Values";

export const deter = (value, values) => {
  const deterSwitch = {
    "approve": approve,
    "deny": deny,
    "send to medical director": sendToMedicalDirector
  }
  return deterSwitch[value.value](values);
}

const approve = (values) => {
  return {
    exCircum: values.policy.length === 0
      ? initialValues.exCircum
      : "N/A",
    allMet: values.policy.length !== 0 
      ? true 
      : false,
  }
}

const deny = () => {
  return {};
}

// const deny = (values) => {
//   return { rationale: values.rationale };
// }

const sendToMedicalDirector = (values) => {
  return { 
    allMet: false,
    specificType: "Sent to Medical Director"
  }
} 
