import { setCovidSummary } from "../setCovidSummary";

export const covidRelated = (value, values) => {
  const summary = setCovidSummary(value.value)
  return { 
    summary,
  }
};