
import { formatToName } from '../../Notes';
export const service = (value) => {
  value.value = formatToName(value.value)
  return value;
};