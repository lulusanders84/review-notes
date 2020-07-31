import { setStorage } from "./setStorage";
import { parseItem } from "./parseItem";

export const getStorage = (storageLocation, defaultValue) => {
  const item = parseItem(window.localStorage.getItem(storageLocation));
  return setStorage(item, defaultValue);
}

