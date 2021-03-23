export const setStorage = (storage, storageType) => {
  if(storage === undefined || storage === null || storage === "undefined" || storage === "null") {
    return storageType
  } else return storage;
}