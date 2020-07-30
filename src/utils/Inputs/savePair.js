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

export const saveInfoToPolicy = (values) => {
  let storageLocation = "fepPolicies";
  if(values.lob === "commercial") {
    storageLocation = "bcbsmnPolicies";
  }
  const storedPolicies = getStorage(storageLocation);
  values.policy.forEach(policy => {
    const policyIndex = storedPolicies.findIndex(storedPolicy => {
      return storedPolicy["Policy #"] === policy["Policy #"];
    });
    storedPolicies[policyIndex].info = values.info;
  })
  saveToStorage(storageLocation, storedPolicies);
}

