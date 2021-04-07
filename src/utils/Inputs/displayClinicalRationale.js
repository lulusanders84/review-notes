import { rejectCodes } from "../../data/rejectCodes"

export const displayClinicalRationale = (values) => {
  const {paRationale, paType} = values
  const denial = rejectCodes[paRationale];
  return paType === "related claim"
    ? denial
      ? denial.clinicalRationale
      : false
    : false
}