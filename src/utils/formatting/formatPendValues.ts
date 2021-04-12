import { IPend } from '../../interfaces/IPend'
import { formatPendValue } from './formatPendValue';

/**Formats pend values to upper case */
export function formatPendValues(options: IPend[]) {
  return options.map(option => {
    option.value = formatPendValue(option.value)
    return option;
  })
}