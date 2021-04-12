import { IPend } from "../../interfaces/IPend";
import { formatPendLabel } from "../formatting/formatPendLabel";
import { formatPendValue } from "../formatting/formatPendValue";

export const createOption = (id: string, value: string) => {
  return optionBuilders[id](value)
}

const optionBuilders: {[index: string]: Function} = {
  "pend": (value: string): IPend => ({
    value: formatPendValue(value),
    label: formatPendLabel(value),
    count: 0
  })
}