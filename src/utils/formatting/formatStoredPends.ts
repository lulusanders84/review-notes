import { isIPendsArray } from "../Options/pendOptions/isIPendsArray"
import { formatPendLabels } from "./formatPendLabels"
import { formatPendValues } from "./formatPendValues";

export const formatStoredPends = (storedPends: any[]) => {
  let pends = isIPendsArray(storedPends) 
    ? storedPends
    : storedPends.map(pend => ({value: pend.name.toUpperCase(), label: pend.name.toUpperCase(), count: pend.count}))
  pends = formatPendLabels(pends);
  return formatPendValues(pends);
}