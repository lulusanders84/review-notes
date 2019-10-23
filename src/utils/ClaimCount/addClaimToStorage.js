import { saveToStorage } from '../';

export const addClaimToStorage = (newClaim) => {
  let claimLog = JSON.parse(window.localStorage.getItem("claimLog"));
  claimLog !== undefined && claimLog !== null
    ? claimLog.push(newClaim)
    : claimLog = [newClaim];
  saveToStorage("claimLog", claimLog);
}