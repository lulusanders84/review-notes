import { startScrapingPolicies, finishedScrapingPolicies} from './scrapePolicies';
import { saveToStorage, getStorage } from '../';
import { fepGrid } from '../../data/fepgrid';
import { Policies } from '../../classes/Policies'
import { medPolicies } from '../../data/medPolicies';

export const refreshPolicies = async ({setUpdating, lob, newVersion, currentVersion}) => {
    console.log(newVersion)
    const storageLocation = lob === "fep"
        ? "fepPolicies"
        : "bcbsmnPolicies"
    const storedPolicies = getStorage(storageLocation, undefined);
    const infoGrid = lob === "fep" ? fepGrid : medPolicies;
    const infoSource = storedPolicies === "undefined" || storedPolicies === undefined ? infoGrid : storedPolicies;
    const policies = new Policies(lob, newVersion, currentVersion);
    policies.addInfoKey(infoSource);
    policies.convertPoliciesToArr();
    startScrapingPolicies();
    return policies.addHrefAndEffectiveDate().then(res => {
        saveToStorage(storageLocation, res);  
        saveToStorage("storedPoliciesLastUpdated", Date.now())
        finishedScrapingPolicies(setUpdating);  
        return policies.policyArr;
    });
    
}



