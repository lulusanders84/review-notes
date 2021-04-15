import { saveToStorage } from "../saveToStorage";

export const updatePolicyVersion = (lob, newVersion, currentVersion) => {
  console.log("new", newVersion, "current", currentVersion)
  const location = `${lob}PolicyVersion`
  if(currentVersion !== newVersion) {
    const type = lob === "commercial" ? "bcbsmn" : lob
    window.localStorage.removeItem(`${type}Policies`)
    saveToStorage(location, newVersion)
  }
}