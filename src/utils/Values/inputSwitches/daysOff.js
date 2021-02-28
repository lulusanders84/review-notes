import { saveToStorage } from "../../saveToStorage";

export const daysOff = (value) => {
  saveToStorage("daysOff", value.value);
  return {};
}