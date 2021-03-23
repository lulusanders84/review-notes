import { getStorage } from "./";

export const setValueFromStorage = (location, defaultValue, store) => {
  store[location] = getStorage(location, defaultValue);
  return store;
};
