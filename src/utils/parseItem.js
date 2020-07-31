import { isJSON } from "./isJSON";
export const parseItem = (str) => {
  if (isJSON(str)) {
    str = JSON.parse(str);
  }
  return str;
};
