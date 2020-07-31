import { getStorage } from "../../getStorage";

export const setPendOrder = (pends, lob) => {
    const savedPends = lob === "FEP" ? getStorage("fepPends", []): getStorage("pends", [])
    if(savedPends) {
        return savedPends.sort((a, b) => {
            return b.count - a.count;
        }).map(pend => {
            return pend.name;
        })
    } else return pends;
}