import { formatToSentence } from "../../formatting/formatToSentence";

export const misrouteRationale = (value) => {
  value.value = formatToSentence(value.value);
  return value;
}