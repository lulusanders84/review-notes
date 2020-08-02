import { saveToStorage } from '../';
import { fetchFepPolicies } from './fetchFepPolicies';


export const store = {};

export const scrapePolicies = async (setUpdating, lob) => {
  const now = Date.now();
  saveToStorage("lastScrape", now);
  saveToStorage("nextScrape", now + 86400000);
  console.log("started scraping");
  if(lob === "fep") {
    await fetchFepPolicies();
    handleSetUpdating(setUpdating);
  } else {
    handleSetUpdating(setUpdating);
  }  
}



function handleSetUpdating(setUpdating) {
  setUpdating(false);
  console.log("scraped");
}

