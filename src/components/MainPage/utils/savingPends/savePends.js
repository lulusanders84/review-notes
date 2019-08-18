import { createPendsArray } from "./createPendsArray";
import { pends, fepPends } from '../../../../data/pends';
export const savePends = (pend, lob) => {
    const pendsToGet = lob === "FEP" ? "fepPends" : "pends";
    const pendsOptions = lob === "FEP" ? [...fepPends, ...pends] : pends;
    const storedPends = JSON.parse(window.localStorage.getItem(pendsToGet));
    const pendsArray =  storedPends ? storedPends : createPendsArray(pendsOptions);
    pendsArray.forEach(pendObj => {
        if(pendObj.name === pend) {
            pendObj.count += 1
        }
    })
    window.localStorage.setItem(pendsToGet, JSON.stringify(pendsArray))
}