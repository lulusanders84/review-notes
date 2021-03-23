import { getStorage } from '../';
import { refreshPolicies } from './refreshPolicies';
export const handlePolicyScraping = (setUpdating) => {
  const nextScrape = getStorage("nextScrape", NaN);
  const fepPolicies = getStorage("fepPolicies");
  const bcbsmnPolicies = getStorage("bcbsmnPolicies");
  if (isNaN(nextScrape)
    || nextScrape < Date.now()
    || fepPolicies === undefined
    || bcbsmnPolicies === undefined) {
    setUpdating(true);
    refreshPolicies(setUpdating, "fep");
    refreshPolicies(setUpdating, "commercial");
  }
};
