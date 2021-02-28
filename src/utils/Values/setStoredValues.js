import { suggestions } from "../AutoComplete";
import { getStorage } from "../getStorage";

const setValueFromStorage = (location, defaultValue, store) => {
  store[location] = getStorage(location, defaultValue)
  return store;
}

let stored = {};
const storedValues = {
  "lob": "commercial", 
  "name": "", 
  "shiftDays": "5", 
  "shiftHours": "8", 
  "daysOff": suggestions(["Saturday", "Sunday"])
};
Object.keys(storedValues).forEach(key => {
  stored = setValueFromStorage(key, storedValues[key], stored)
})

export default stored;