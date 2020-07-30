import { getPolicies } from "../../ReviewNotes";

export const policy = (value) => {
  const policiesSet = new Set(getPolicies(value.value));
  value.value = Array.from(policiesSet);
  return value;

}