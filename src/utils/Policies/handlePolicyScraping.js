import { getStorage } from '../';
import { refreshPolicies } from './refreshPolicies';
export const handlePolicyScraping = (setUpdating, versions) => {
  const nextScrape = getStorage("nextScrape", NaN);
  const fepPolicies = getStorage("fepPolicies");
  const bcbsmnPolicies = getStorage("bcbsmnPolicies");
  if (isNaN(nextScrape)
    || nextScrape < Date.now()
    || fepPolicies === undefined
    || bcbsmnPolicies === undefined) {

    setUpdating(true);
    refreshPolicies({setUpdating, lob: "fep", ...versions.fep});
    refreshPolicies({setUpdating, lob: "commercial", ...versions.commercial});
  }
};
