import { setOcwaNote } from "../ClaimNote/setOcwaNote"

export const getMisrouteData = (values) => {
  const data = {
    ocwaNote: setOcwaNote(values),
    misrouteRationale: values.misrouteRationale,
    deter: "Claim referred in error"
  }
  data.misrouteClaimNote = setMisrouteClaimNote(values, data)
  
  return data;
}

const setMisrouteClaimNote = (values, data) => {
  const { ocwaNote, misrouteRationale } = data;
  return `REQ-${values.req}: ${ocwaNote} Claim referred in error, see DLP for claim resolution. ${misrouteRationale}`
}