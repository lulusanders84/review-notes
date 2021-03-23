
import { formatCodes } from '../../formatCodes';
export const code = (value) => {
  value.value = formatCodes(value.value, "input formattings")
  return value;
};