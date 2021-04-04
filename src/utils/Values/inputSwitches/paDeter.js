import { decisionConversion } from '../../../data/decisionConversion'

export const paDeter = (value, values) => {

  return values["paMatch"] === "yes" 
    ? { 
      deter: decisionConversion[value.value],
      disableAllMet: true
    }
    : {}; 
}