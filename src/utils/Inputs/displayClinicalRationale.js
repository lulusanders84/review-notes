import { rejectCodes } from "../../data/rejectCodes"

export const displayClinicalRationale = (values) => {
  const {paRationale} = values
  const denial = rejectCodes[paRationale];
  return denial
    ? denial.clinicalRationale
    : false;
}