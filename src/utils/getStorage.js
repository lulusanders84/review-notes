import { setStorage } from "./setStorage";
import { parseItem } from "./parseItem";
import { cleanStorage } from "./cleanStorage";
export const getStorage = (storageLocation, defaultValue) => {
  const item = parseItem(window.localStorage.getItem(storageLocation));
  return setStorage(cleanStorage(item), defaultValue);
}

