import { createPendsArray } from './createPendsArray';

export const savePendsToStorage = (pends) => {
    const pendsArr = createPendsArray(pends);
    saveToStorage(storageLocation, pendsArr);
}
