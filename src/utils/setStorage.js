export const setStorage = (storage, storageType) => {
  console.log(storage, storageType);
  if(storage === undefined || storage === null) {
    console.log(storage)
    return storageType
  } else return storage;
}