export const setCovidSummary = (covidRelated) => {
  const related = covidRelated === "yes"
    ? " appears"
    : " doesn't appear"
  return "Care" + related + " to be related to covid-19 treatment."
}