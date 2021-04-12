export const storageLocations: {[index: string]: Function} = {
  pend: (lob: string): string => lob === "FEP" ? "fepPends" : "pends",
  policy: (lob: string): string => lob === "FEP" ? "fepPolicies" : "bcbsmnPolicies"
}