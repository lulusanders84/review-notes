import { getStorage } from "../../getStorage";
import { checkForPendsInStorage } from "./checkForPendsInStorage";
import { createPendsArray } from "./createPendsArray";

export const setPendOrder = (pends, lob) => {
    const storageLocation = lob === "FEP" ? "fepPends" : "pends";
    let savedPends = checkForPendsInStorage(lob, pends)
        ? getStorage(storageLocation, pends)
        : createPendsArray(pends)
    if(savedPends) {
        return savedPends.sort((a, b) => {
            return b.count - a.count;
        }).map(pend => {
            return pend.name;
        })
    } else return pends;
}