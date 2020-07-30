import { formatToSentence } from "../../Notes/formatToSentence";

export const misrouteRationale = (value) => {
  value.value = formatToSentence(value.value);
  return value;
}