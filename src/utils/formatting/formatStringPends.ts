
import { createPendsArray } from "../Options/pendOptions/createPendsArray";
import { formatPendLabels } from "./formatPendLabels";

/** Inputs string[] and returns IPend[] */
export const formatStringPends = (options: string[]) => {
  const IPends = createPendsArray(options)
  return formatPendLabels(IPends)
}
