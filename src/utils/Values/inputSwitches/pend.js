import { savePends } from "../../ReviewNotes/savingPends"

export const pend = (value, values) => {
  if(value && value.value !== null && value.value !== "") {
    value.value.forEach(value => {
      savePends(value, values.lob)
    })
  }
  return {};
}