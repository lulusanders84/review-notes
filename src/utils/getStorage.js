import { setStorage } from "./setStorage";

export const getStorage = (storageLocation, defaultValue) => {
  const item = JSON.parse(window.localStorage.getItem(storageLocation));
  return setStorage(item, defaultValue);
}