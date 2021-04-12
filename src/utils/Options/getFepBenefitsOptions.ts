import { formatFepBenefitsOptions } from "../formatting/formatFepBenefitsOptions"
import { getStorage } from "../getStorage"

export const getFepBenefitsOptions = () => {
  const options = getStorage("fepBenefits", [])
  return formatFepBenefitsOptions(options)
}