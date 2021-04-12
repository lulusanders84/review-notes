import { createPendsArray } from "./createPendsArray.ts";
import { fepPends } from '../../../data/fepPends';
import { pends } from '../../../data/pends';

import { saveToStorage } from "../../saveToStorage";
import { getStorage } from "../../getStorage";

export const savePends = (pend, lob) => {

    const pendsToGet = lob === "FEP" ? "fepPends" : "pends";

    const pendsOptions = lob === "FEP" ? [...fepPends, ...pends] : pends;

    const storedPends = getStorage(pendsToGet);

    const pendsArray = storedPends ? storedPends : createPendsArray(pendsOptions);

    const oldPend = pendsArray.some(pendInArray => pendInArray.value === pend.value)

    if(!oldPend) {
        pendsArray.push({label: pend.value, value: pend.value, count: 0});
    }

    pendsArray.forEach(pendObj => {
        if(pendObj.value === pend.value) {
            pendObj.count += 1
        }
    })
    
    saveToStorage(pendsToGet, pendsArray);
}