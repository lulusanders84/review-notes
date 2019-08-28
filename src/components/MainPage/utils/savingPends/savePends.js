import { createPendsArray } from "./createPendsArray";
import { pends, fepPends } from '../../../../data/pends';
export const savePends = (pend, lob) => {
    const pendsToGet = lob === "FEP" ? "fepPends" : "pends";
    const pendsOptions = lob === "FEP" ? [...fepPends, ...pends] : pends;
    const storedPends = JSON.parse(window.localStorage.getItem(pendsToGet));
    const pendsArray =  storedPends ? storedPends : createPendsArray(pendsOptions);
    const oldPend = pendsArray.some(pendInArray => {
        return pendInArray.name === pend.value;
    })
    if(!oldPend) {
        pendsArray.push({name: pend.value, count: 0});
    }
    pendsArray.forEach(pendObj => {
        if(pendObj.name === pend.value) {
            pendObj.count += 1
        }
    })
    window.localStorage.setItem(pendsToGet, JSON.stringify(pendsArray))
}