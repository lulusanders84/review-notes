import { saveToStorage } from "../../saveToStorage";

export const shiftHours = (value, values, dispatch) => {
  saveToStorage("shiftHours", value.value);
  return {};
}