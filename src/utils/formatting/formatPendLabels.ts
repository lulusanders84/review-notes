import { IPend } from '../../interfaces/IPend'
import { formatPendLabel } from './formatPendLabel';

/**Formats pend labels to upper case */
export function formatPendLabels(options: IPend[]) {
  return options.map(option => {
    option.label = formatPendLabel(option.label.toUpperCase());
    return option;
  });
}