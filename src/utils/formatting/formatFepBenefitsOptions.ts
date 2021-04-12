import { ISelectOption } from "../../interfaces/ISelectOption";
import { formatToSentence } from "./formatToSentence";

export const formatFepBenefitsOptions = (options: ISelectOption[]) => {
  return options.map(option => {
    console.log(option)
    const { label, value } = option;
    console.log(formatToSentence(label))
    return {
      label: formatToSentence(label),
      value: formatToSentence(value)
    }
  })
}