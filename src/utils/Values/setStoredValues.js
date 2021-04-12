import { saveToStorageIfUndefined, setValueFromStorage } from "../";
import { createSelectValue } from "../createSelectValue";


let stored = {};
const storedValues = {
  "lob": "commercial", 
  "name": "", 
  "shiftHours": "8", 
  "daysOff": ["Saturday", "Sunday"].map(day => createSelectValue(day, true))
};
Object.keys(storedValues).forEach(key => {
  stored = setValueFromStorage(key, storedValues[key], stored)
  saveToStorageIfUndefined(key, storedValues[key])
})

export default stored;