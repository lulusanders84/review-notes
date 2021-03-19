export const cleanStorage = (storageItem) => {
  return cleanItems(storageItem)
}

const cleanItems = (items) => {
  const storageType = getStorageType(items);
  return cleanByStorageTypes[storageType](items);
}

const getStorageType = (storageItem) => {
  return Array.isArray(storageItem)
  ? "array"
  : storageItem === null
    ? "null"
    : typeof storageItem;
}

const cleaningNotRequired = (item) => {
  return item;
}

const cleanArray = (items) => {
  items.forEach((item, index) => {
    if(isItemCleaned(item)) {
      items.splice(index, 1)
    }
  })
  return items;
}

const cleanObj = (items) => {
  Object.keys(items).forEach(key => {
    const item = items[key];
    if(isItemCleaned(item)) {
      delete items[key]
    }
  })
  return items;
}

const isItemCleaned = (item) => {
  return cleanMethods[typeof item](item);
}

const cleanStringItem = (item) => {
  return item === ""
    ? true
    : false
}

const cleanNumberItem = (item) => {
  return item === null
    ? true
    : false
}

const cleanObjItem = (item) => {
  return JSON.stringify(item) === "{}"
    ? true
    : false
 }

const cleanByStorageTypes = {
  "string": cleaningNotRequired,
  "number": cleaningNotRequired,
  "null": cleaningNotRequired,
  "array": cleanArray,
  "object": cleanObj
}

const cleanMethods = {
  "string": cleanStringItem,
  "object": cleanObjItem,
  "number": cleanNumberItem
}



