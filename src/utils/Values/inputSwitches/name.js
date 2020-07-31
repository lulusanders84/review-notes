import { saveToStorage } from "../../saveToStorage";

export const name = (value) => {
  saveToStorage("name", value.value);
  return {};
}