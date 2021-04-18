import { getStorage } from "../getStorage";
import { saveToStorage } from "../saveToStorage";

export const savePair = (storageLocation, pairArray) => {
    const storedPairs = getStorage(storageLocation);
    const pairs = storedPairs ? storedPairs : {};
    pairArray.forEach(pair => {
        Object.keys(pair).forEach(key => {
          pairs[key] = pair[key].toLowerCase();  
        })  
    })
    saveToStorage(storageLocation, pairs);
}


