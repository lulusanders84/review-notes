import { setStorage } from "./setStorage";

export const getStorage = (storageLocation, defaultValue) => {
  let item;
  item = window.localStorage.getItem(storageLocation);
  console.log(item, typeof item);
  if(typeof item === "string") {
    item = JSON.parse(item);
  }
  

  return setStorage(item, defaultValue);
}