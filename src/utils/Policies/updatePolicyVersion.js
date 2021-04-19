import { getStorage } from "../getStorage"
import { saveToStorage } from "../saveToStorage";

export const updatePolicyVersion = (lob, newVersion) => {
  const location = `${lob}PolicyVersion`
  const currentVersion = getStorage(location, undefined);
  console.log(currentVersion)
  if(currentVersion !== newVersion) {
    const type = lob === "commercial" ? "bcbsmn" : lob
    window.localStorage.removeItem(`${type}Policies`)
    saveToStorage(location, newVersion)
  }
}