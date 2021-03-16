import { savePends } from "../../ReviewNotes/savingPends"
import { setCovidSummary } from "../setCovidSummary";

export const pend = (value, values) => {
  let c3xPend = values.c3xpend;
  if(value && value.value !== null && value.value !== "") {
    c3xPend = value.value.some(value => { return value.value === "C3X" })
    value.value.forEach(value => {
      savePends(value, values.lob)
    })
  }
  const summary = value.value.some(value => { return value.value === "CZB"})
    ? setCovidSummary(values.covidRelated)
    : values.summary
  return {
      c3xPend,
      summary,
  };
}