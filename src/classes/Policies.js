import { formatPolicy } from "../utils/Policies/formatPolicy";
import { getStorage } from '../utils';
import { fepPolicies } from '../data/fepPolicies';
import { bcbsmnCodes } from '../data/bcbsmnCodes';
import { medicareCodes } from '../data/medicareCodes';
import { getBcbsmnPolicyHrefAndEffectiveDate } from "../utils/Policies/getBcbsmnPolicyHrefAndEffectiveDate";
import { fetchFepPolicies } from "../utils/Policies/fetchFepPolicies";

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
  addHrefAndEffectiveDate = async () => {
    return this.hrefAndEffectiveDateSwitch[this.lob]().then((policies) => {
      this.policyArr = policies;
      return policies;
    });
  }
  addBcbsHrefAndEffectiveDate = async () => {
    const policies = this.policyArr.map(async policy => {
      const data = await getBcbsmnPolicyHrefAndEffectiveDate(policy);
      const { href, effective } = data;
      policy.href = href;
      policy.effective = effective;
      return policy;
    })
    return Promise.all(policies).then(policies => {
      return policies;

    })
  }
  addFepHref = async () => {
    return await fetchFepPolicies(this.policyArr);
  }
  hrefAndEffectiveDateSwitch = {
    "commercial": this.addBcbsHrefAndEffectiveDate,
    "fep": this.addFepHref
  }
}
