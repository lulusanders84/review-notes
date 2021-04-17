export function setDateTimeOfLastScrape(lastScrape) {
  const d = new Date(lastScrape);
  const date = d.toDateString();
  const time = d.toLocaleTimeString();
  return { date, time };
}
