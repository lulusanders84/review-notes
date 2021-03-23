import { getStorage, saveToStorage } from "./";

export const saveToStorageIfUndefined = (key, storedValue) => {
  const storage = getStorage(key);
  if (storage === undefined) {
    saveToStorage(key, storedValue);
  }
};
