import { savePends } from "../../ReviewNotes/savingPends"

export const pend = (value, values) => {
  let c3xPend = values.c3xpend;
  if(value && value.value !== null && value.value !== "") {
    c3xPend = value.value.some(value => { return value.value === "C3X" })
    value.value.forEach(value => {
      savePends(value, values.lob)
    })
  }
    return {
      c3xPend,
  };
}