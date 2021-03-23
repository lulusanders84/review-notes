import { saveToStorage } from '../';

export const startScrapingPolicies = () => {
  const now = Date.now();
  saveToStorage("lastScrape", now);
  saveToStorage("nextScrape", now + 86400000);
  console.log("started scraping");  
}

export const finishedScrapingPolicies = (setUpdating) => {
  setUpdating(false);
  console.log("scraped");
}

