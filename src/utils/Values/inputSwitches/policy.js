import { handleInfo } from "../outputLogic/handleInfo";
import { handleInterqual } from "../outputLogic/handleInterqual";

export const policy = (value, values) => {
  return {
    disableAllMet: value.value.length === 0,
    info: handleInfo(value.value),
    interqual: handleInterqual(value),
    exCircum: value.value.length > 0 
      ? "N/A" 
      : values.exCircum
  }
}