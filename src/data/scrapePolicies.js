import $ from 'jquery';
// import { fepPolicies } from './fepPolicies';
import { saveToStorage, getStorage } from '../utils';
import { refreshPolicies } from './refreshPolicies';


const store = {};

export const handlePolicyScraping = (setUpdating) => {
  const nextScrape = getStorage("nextScrape", NaN);
  const fepPolicies = getStorage("fepPolicies");
  const bcbsmnPolicies = getStorage("bcbsmnPolicies");
  if(isNaN(nextScrape) 
    || nextScrape < Date.now() 
    || fepPolicies === undefined
    || bcbsmnPolicies === undefined) {
    setUpdating(true);
    refreshPolicies(setUpdating, "fep");
    refreshPolicies(setUpdating, "commercial");
  }
}
export const scrapePolicies = async (setUpdating) => {
  const now = Date.now();
  saveToStorage("lastScrape", now);
  saveToStorage("nextScrape", now + 86400000);
  console.log("started scraping");
  let workingStore = store;
  let pageNumber = 1;
  const url = "https://www.fepblue.org/policies?page=";
  for(let i = pageNumber; i < 18; i++) {
    workingStore = await getPage(url, pageNumber, workingStore);
    pageNumber += 1;
  }
  const storedPolicies = getStorage("fepPolicies", []);
  const updatedPolicies = updateFepPolicies(workingStore, storedPolicies);
  saveToStorage("fepPolicies", updatedPolicies);
  setUpdating(false);
  console.log("scraped")
}

const getPage = async (url, pageNumber, workingStore) => {
    const store = workingStore;
    await $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(url + pageNumber), function (data) {
      const htmlObj = document.createElement("div");
      data.contents = data.contents.substring(data.contents.search("media-listing"));
      data.contents = '<ul class="' + data.contents.substring(0, data.contents.search("</ul>") + 5);
      htmlObj.innerHTML = data.contents;
      const html = $(htmlObj).find("ul.media-listing li");
      const array = Object.keys(html).map(key => {
        return html[key];
      });
      const policies = array.reduce((acc, item, index) => {
        const policy = {};
        const li = index < array.length - 2 
          ? item
          : null;
        policy.number = li 
          ? $(li).find('span').html()
          : null;
        policy.href = li
          ? "https://www.fepblue.org/benefit-plans/medical-policies-and-utilization-management-guidelines/" + $(li).find('a').attr("href")
          : null;
        if(policy.number) {
            policy.number = policy.number.split("\n").join("").trim();     
            acc.push(policy)
        }
        return acc;
      }, [])
      policies.forEach(policy => {
        const number = policy.number;
        store[number] = policy;
      });
  });
  return store;
}

export const updateFepPolicies = (store, policies) => {
  return policies.map(policy => {
    const number = policy["Policy #"];
    policy.href = store[number] ? store[number].href : null;
    return policy;
  })  
}

export const formatPolicy = (rawPolicy) => {
  if(rawPolicy["Full Policy"] === undefined){
    const fullName = rawPolicy["Brand Drug Name"] !== undefined && rawPolicy["Brand Drug Name"] !== ""
      ? rawPolicy["Brand Drug Name"]
      : rawPolicy["Full Policy Description (or Generic Name (s) of Drug)"];
    
    const policy = {
    "Policy #": rawPolicy["Policy #"],
    "Full Policy": fullName,
    "CPT": rawPolicy["CPT Code (s)"],
    "HCPCS": rawPolicy["HCPCS Code (s)"],   
    "info": rawPolicy["info"]
    }
    return policy;
  } else return rawPolicy;
}
