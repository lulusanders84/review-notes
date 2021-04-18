export const storageLocations: {[index: string]: Function} = {
  pend: (lob: string): string => lob === "FEP" ? "fepPends" : "pends",
}