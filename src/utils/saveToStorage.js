export const saveToStorage = (storageLocation, values) => {
       window.localStorage.setItem(storageLocation, JSON.stringify(values));
 }