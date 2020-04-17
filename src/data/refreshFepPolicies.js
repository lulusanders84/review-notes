import { scrapePolicies, formatPolicy} from './scrapePolicies';
import { saveToStorage, getStorage } from '../utils';
import { fepPolicies } from './fepPolicies';
import { fepGrid } from './fepgrid';

export const refreshFepPolicies = (setUpdating) => {
    const storedPolicies = getStorage("fepPolicies", null);
    const infoSource = storedPolicies === null ? fepGrid : storedPolicies;
    const policies = new Policies(fepPolicies);      
    policies.addInfoKey(infoSource);
    policies.convertPoliciesToArr();
    console.log(fepPolicies, policies.policyArr)
    saveToStorage("fepPolicies", policies.policyArr);  
    saveToStorage("storedPoliciesLastUpdated", Date.now())
    scrapePolicies(setUpdating);
}

class Policies {
  constructor(policies) {
    this.policyObj = this.convertPoliciesToObj(policies)
    this.policyArr = policies;
  }
  convertPoliciesToObj = (policyArr) => {
    const policiesObj = {};
    policyArr.forEach(policy => {
      policiesObj[policy["Policy #"].trim()] = policy
    })
    return policiesObj;
  }
  convertPoliciesToArr = () => {
    this.policyArr = Object.keys(this.policyObj).map(key => {
      return formatPolicy(this.policyObj[key]);
    })
  }
  addInfoKey = (infoSource) => {
    infoSource.forEach(policy => {
      const FEPMP = policy["FEPMP"] 
      if(FEPMP !== undefined && FEPMP !== "N/A") {
        if(this.policyObj[FEPMP]) {
          this.policyObj[FEPMP].info = policy.info;
        }
      }
    })
  }
}

//take new policies, add info from stored policy or info grid if no stored policies
