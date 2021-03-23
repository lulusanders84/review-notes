import { suggestions } from "../AutoComplete";
import { saveToStorageIfUndefined, setValueFromStorage } from "../";


let stored = {};
const storedValues = {
  "lob": "commercial", 
  "name": "", 
  "shiftHours": "8", 
  "daysOff": suggestions(["Saturday", "Sunday"])
};
Object.keys(storedValues).forEach(key => {
  stored = setValueFromStorage(key, storedValues[key], stored)
  saveToStorageIfUndefined(key, storedValues[key])
})

export default stored;