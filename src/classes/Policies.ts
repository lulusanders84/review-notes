import { getStorage, saveToStorage } from '../utils';
import { bcbsmnCodes } from '../data/bcbsmnCodes';
import { bcbsmnNames } from '../data/bcbsmnNames';
import { getBcbsmnPolicyHrefAndEffectiveDate } from "../Policies/getBcbsmnPolicyHrefAndEffectiveDate";
import { fetchFepPolicies } from "../Policies/fetchFepPolicies";
import { fepCodes } from "../data/fepCodes";
import { fepNames } from "../data/fepNames";
import { fepGrid } from "../data/fepgrid";
import { medPolicies } from "../data/medPolicies";
import { bindMethods } from '../utils/Classes';
import IValues from '../interfaces/IValues';

interface IPolicyData {
  codes: {[index: string]: string}
  names: {[index: string]: string}
  info: any[]
}

interface IPolicy {
  name: string
  number: string
  codes: string[]
  label:string
  value: string,
  href: string
  info: string
}

interface IPolicies {
  [index: string]: IPolicy
}

export class Policies {
  [index: string]: any
  _FEPData: IPolicyData
  _commercialData: IPolicyData
  _scraped: boolean
  _lastScrape: number
  _nextScrape: number 
  _commercialPolicies: IPolicies
  _FEPPolicies: IPolicies
  _allPolicies: any

  constructor() {
    bindMethods(this)    
    this._FEPData = {codes: fepCodes, names: fepNames, info: fepGrid};
    this._commercialData = {codes: bcbsmnCodes, names: bcbsmnNames, info: medPolicies};
    this._scraped = false;
    this._lastScrape = getStorage("lastScrape", 0)
    this._nextScrape = getStorage("nextScrape", 0)   
    this._commercialPolicies = this.getPolicies(this._commercialData, "commercial")
    this._FEPPolicies = this.getPolicies(this._FEPData, "FEP")
    this._allPolicies = this.combinePolicies()
    
    if(this._scraped) {
      this.setScrapes()
    }
  }

  /**Saves input entered to policy */
  saveInfoToPolicy = (values: IValues): void => {
    const { lob } = values;
    const key = `_${lob}Policies`
    const policies: {[index:string]: IPolicy} = this[key];
 
    values.policy.forEach(policy => {
      const storedPolicy = policies[policy.number]
      storedPolicy.info = values.info
    })
    this[key] = policies
    saveToStorage(`${lob}Policies`, policies);
  }

  savePolicies = (lob: string, policiesToSave: IPolicy[]) => {
    this[`_${lob}Policies`] = policiesToSave;
    saveToStorage(`${lob}Policies`, policiesToSave)
  }

  /**takes array of codes, returns associated policies or undefined if none found */
  getPoliciesByCodes = (codes: string[], lob: string) => {
    const policies: IPolicy[] = []
    const allPolicies: IPolicies = this[`_${lob}Policies`];
    codes.forEach(code => {
      Object.keys(allPolicies).forEach(policy => {
        if(allPolicies[policy].codes.includes(code)) {
          policies.push(allPolicies[policy])
        }         
      })
    })
    return policies.length > 0 ? policies : undefined;
  }

  setScrapes = () => {
    this._lastScrape = Date.now()
    this._nextScrape = Date.now () + 86400000
    this.scraped = false 
    saveToStorage("lastScrape", this._lastScrape)
    saveToStorage("nextScrape", this._nextScrape)
    console.log("scrapes set")
  }

  combinePolicies = async () => {
    const FEPPolicies = await this._FEPPolicies
    const commPolicies = await this._commercialPolicies
    return Object.assign({}, FEPPolicies, commPolicies) 
  }
  getPolicies = (data: IPolicyData, lob: string): IPolicies => {
    return this._nextScrape < Date.now() 
      ? this.buildPolicies(data, lob)
      : getStorage(`${lob}Policies`) || this.buildPolicies(data, lob)
  }

  buildPolicies = async(data: IPolicyData, lob: string): Promise<IPolicies> => {
    console.log("building " + lob + "...")
    this._scraped = true;
    let policies: IPolicies = {}
    Object.keys(data.names).forEach(number => {
      policies[number] = {
        name: data.names[number],
        number,
        codes: data.codes[number] ? data.codes[number].split(",").map(code => code.trim()) : [],
        label:`${number}: ${data.names[number]}`,
        value: number,
        href: "",
        info: ""
      }
    })
    policies = await this._getHrefAndEffectiveDate(policies, lob)
    policies = this._addInfoKey(data.info, policies, lob)
    saveToStorage(`${lob}Policies`, policies)
    console.log("..." + lob + "built"  )
    return policies
  }

  setPolicies = (lob: string, policies: IPolicies) => {
    this[`_${lob}Policies`] = policies 
  }
  returnPolicyObj = async(lob: string) => {
    let policies = lob === "FEP" ? this._allPolicies : this[`_${lob}Policies`]
    if(policies.then !== undefined) {
      policies = lob === "FEP" ? await this._allPolicies : await this[`_${lob}Policies`]
    }
    return policies
  }
  getPolicyOptions = async (lob: string) => {
    const policies: IPolicies = await this.returnPolicyObj(lob)
    return Object.keys(policies).map(key => policies[key]).sort((a, b) => {
      return a.label < b.label
        ? -1
        : a.label > b.label
          ? 1
          : 0
      });
  }

  _addInfoKey = (infoSource: any[], policies: IPolicies, lob: string) => {
    infoSource.forEach(policy => {
      const policyNo = lob === "FEP" 
        ? policy["FEPMP"]
        : policy["Policy #"];
      if (policyNo !== undefined && policyNo !== "N/A") {
        if (policies[policyNo]) {
          policies[policyNo].info = policy.info;
        }
      }
    });
    return policies
  };
  _getHrefAndEffectiveDate = async (policies: IPolicies, lob: string) => {
    return await this._hrefAndEffectiveDateSwitch[lob](policies)
  }
  _addBcbsHrefAndEffectiveDate = async (policies: IPolicies) => {
    Object.keys(policies).forEach(async number => {
      const data = await getBcbsmnPolicyHrefAndEffectiveDate(policies[number]);
      policies[number] = data
    })
    return policies;
  }
  
  _addFepHref = async (policies: IPolicies) => {
    return await fetchFepPolicies(policies);
  }
  _hrefAndEffectiveDateSwitch: {[index: string]: Function} = {
    "commercial": this._addBcbsHrefAndEffectiveDate,
    "FEP": this._addFepHref
  }
}
