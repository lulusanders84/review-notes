import { saveToStorage, getStorage } from '../';
import { getPage } from './getPage';
import { updateFepPolicies } from './updateFepPolicies';


const store = {};

export const scrapePolicies = async (setUpdating) => {
  const now = Date.now();
  saveToStorage("lastScrape", now);
  saveToStorage("nextScrape", now + 86400000);
  console.log("started scraping");
  let workingStore = store;
  let pageNumber = 1;
  const url = "https://www.fepblue.org/benefit-plans/medical-policies-and-utilization-management-guidelines/medical-policies?page=";
  for(let i = pageNumber; i < 17; i++) {
    workingStore = await getPage(url, pageNumber, workingStore);
    pageNumber += 1;
  }
  const storedPolicies = getStorage("fepPolicies", []);
  const updatedPolicies = updateFepPolicies(workingStore, storedPolicies);
  saveToStorage("fepPolicies", updatedPolicies);
  setUpdating(false);
  console.log("scraped")
}


