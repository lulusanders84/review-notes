import { ISelectOption } from "../../interfaces/ISelectOption";
import { formatToSentence } from "./formatToSentence";

export const formatFepBenefitsOptions = (options: ISelectOption[]) => {
  return options.map(option => {
    const { label, value } = option;
    return {
      label: formatToSentence(label),
      value: formatToSentence(value)
    }
  })
}