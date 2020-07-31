import { savePends } from "../../ReviewNotes/savingPends"

export const pend = (value, values) => {
  console.log(value)
  if(value && value.value !== null && value.value !== "") {
    value.value.forEach(value => {
      savePends(value, values.lob)
    })
  }
  return {};
}