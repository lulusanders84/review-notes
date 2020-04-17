import { getStorage } from './';
export function setDateTimeOfLastScrape() {
  const scraped = getStorage("lastScrape", null);
  const d = new Date(scraped);
  const date = d.toDateString();
  const time = d.toLocaleTimeString();
  return { date, time };
}
