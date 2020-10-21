
import { formatArrInput } from '../../formatArrInput';
export const arrInput = (value) => {
  value.value = formatArrInput(value.value)
  return value;
};