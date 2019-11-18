import { Relationship } from "./Relationship";
import { capWord } from '../../utils/Notes';

export class Pair extends Relationship {
  constructor(keyValue) {
    super(keyValue);
    this.setRelationship(this.relationship)
  }
  relationship = (input, keyValue) => {
      const { name, value } = input;
      keyValue = capWord(keyValue);
      const storageLocation = `${name.toLowerCase()}${keyValue}Pairs`;
      return getValueFromPair(storageLocation, value);      
  } 
}
const getValueFromPair = (storageLocation, key) => {
  const pair = getStoredPair(storageLocation, key);
  return pair ? pair[key] : "";
}
const getStoredPair = (storageLocation, key) => {
  const storedPairs = JSON.parse(window.localStorage.getItem(storageLocation));
  if(storedPairs) {
      return storedPairs[key] ? {[key]: storedPairs[key]} : null;
  } else return "";
}