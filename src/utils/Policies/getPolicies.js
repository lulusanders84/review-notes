import { getStorage } from "../getStorage";
import { fepPolicies } from "../../data/fepPolicies";
import { medPolicies } from "../../data/medPolicies";

export const getPoliciesObj = (lob) => {
  const location = lob === "fep" 
    ? "fepPolicies"
    : "bcbsmnPolicies";
  const backupPolicies = lob === "fep"
    ? fepPolicies
    : medPolicies;
  const storedPolicies = getStorage(location, undefined);
  return storedPolicies !== undefined
    ? { policies: storedPolicies, source: "stored" }
    : { policies: backupPolicies, source: "file" };
}