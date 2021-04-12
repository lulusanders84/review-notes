import { getStorage } from "../getStorage"
import { createSelectValue } from "../"
import { saveToStorage } from "../saveToStorage";

const networkNames = [
  "Group Medicare Advantage Network (PPO)", 
  "Medicare High Value Network (AKA Metro/West PPO)",
  "Medicare Southern MN Network (PPO)",
  "Strive Medicare Advantage Metro Region Network (AKA HMO-POS)"]

const networkOptions = networkNames.map(name => { return createSelectValue(name) });

export const getNetworkOptions = () => {
  const options = getStorage("network", networkOptions);
  saveToStorage("network", options);
  return options;
}