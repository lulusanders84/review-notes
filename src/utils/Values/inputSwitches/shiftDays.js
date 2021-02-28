import { saveToStorage } from "../../saveToStorage";

export const shiftDays = (value) => {
  saveToStorage("shiftDays", value.value);
  return {};
}