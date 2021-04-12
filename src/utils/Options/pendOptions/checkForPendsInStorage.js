import { getStorage } from "../../getStorage";

export const checkForPendsInStorage = (lob, pends) => {
  const storageLocation = lob === "FEP" ? "fepPends" : "pends";
  let savedPends = getStorage(storageLocation, pends)
  return typeof savedPends[0] === "string"
    ? false
    : true;
}
