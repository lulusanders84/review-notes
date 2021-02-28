import { saveToStorage } from "../../saveToStorage";

export const shiftHours = (value) => {
  saveToStorage("shiftHours", value.value);
  return {};
}