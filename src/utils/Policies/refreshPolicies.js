import { scrapePolicies} from './scrapePolicies';
import { saveToStorage, getStorage } from '../';
import { fepGrid } from '../../data/fepgrid';
import { Policies } from '../../classes/Policies'
import { medPolicies } from '../../data/medPolicies';

export const refreshPolicies = async (setUpdating, lob) => {
    const storageLocation = lob === "fep"
        ? "fepPolicies"
        : "bcbsmnPolicies"
    const storedPolicies = getStorage(storageLocation, undefined);
    const infoGrid = lob === "fep" ? fepGrid : medPolicies;
    const infoSource = storedPolicies === undefined ? infoGrid : storedPolicies;
    const policies = new Policies(lob);
    policies.addInfoKey(infoSource);
    policies.convertPoliciesToArr();
    policies.addLinkAndEffectiveDate().then(res => {
        saveToStorage(storageLocation, res);  
        saveToStorage("storedPoliciesLastUpdated", Date.now())
        scrapePolicies(setUpdating);  
    });
    
}



