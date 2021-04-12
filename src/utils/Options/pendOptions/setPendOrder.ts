import { IPend } from "../../../interfaces/IPend";

/**Sets pend order by count */
export const setPendOrder = (pends: IPend[]) => {
   return pends.sort((a, b) => {
    return b.count - a.count;
})
}