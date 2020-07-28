import { formatPolicy } from '../data/scrapePolicies';
import { getStorage } from '../utils';
import { fepPolicies } from '../data/fepPolicies';
import { bcbsmnCodes } from '../data/bcbsmnCodes';
import { medicareCodes } from '../data/medicareCodes';

export class Policies {
  constructor(lob) {
    this.lob = lob;
    const policies = lob === "fep"
      ? getStorage("fepPolicies", fepPolicies)
      : lob === "commercial"
        ? this.buildPoliciesFromCodes(bcbsmnCodes)
        : this.buildPoliciesFromCodes(medicareCodes);
    this.policyObj = this.convertPoliciesToObj(policies);
    this.policyArr = policies;
  }
  buildPoliciesFromCodes(codes) {
    const policies = {};
    Object.keys(codes).forEach(code => {
      codes[code].forEach(policy => {
        const policyNo = policy["Policy #"]
        policies[policyNo] = policy;
      })
    })
    policies["InterQual"] = {
      "Policy #": "InterQual",
      "Full Policy": "",
      info: ""
    };
    const policiesArr = [];
    Object.keys(policies).forEach(policy => {
      policiesArr.push(policies[policy]);
    })
    return policiesArr;
  }
  convertPoliciesToObj = (policyArr) => {
    const policiesObj = {};
    policyArr.forEach(policy => {
      policiesObj[policy["Policy #"].trim()] = policy;
    });
    return policiesObj;
  };
  convertPoliciesToArr = () => {
    console.log(this.policyArr)
    this.policyArr = Object.keys(this.policyObj).map(key => {
      return formatPolicy(this.policyObj[key]);
    });
  };
  addInfoKey = (infoSource) => {
    infoSource.forEach(policy => {
      const policyNo = this.lob === "fep" 
        ? policy["FEPMP"]
        : policy["Policy #"];
      if (policyNo !== undefined && policyNo !== "N/A") {
        if (this.policyObj[policyNo]) {
          this.policyObj[policyNo].info = policy.info;
        }
      }
    });
  };
}
