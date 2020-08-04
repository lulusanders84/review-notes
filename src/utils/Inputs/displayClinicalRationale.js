import { rejectCodes } from "../../data/rejectCodes"

export const displayClinicalRationale = (denialRationale) => {
  const denial =  rejectCodes[denialRationale];
  return denial
    ? denial.clinicalRationale
    : false;
}