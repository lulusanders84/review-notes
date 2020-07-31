import { saveToStorage, getStorage } from '../';

export const addClaimToStorage = (newClaim) => {
  let claimLog = getStorage("claimLog", []);
  claimLog !== undefined && claimLog !== null
    ? claimLog.push(newClaim)
    : claimLog = [newClaim];
  saveToStorage("claimLog", claimLog);
}