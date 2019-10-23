import { saveToStorage } from '../saveToStorage';
import { findWeekdays } from '../ClaimSettings/findWeekdays';

export const getWorkdays = () => {
  let workdays = JSON.parse(window.localStorage.getItem("workdays"));
  const month = new Date().getMonth();
  if(workdays === undefined || workdays === null) {
    workdays = {};
    saveToStorage("workdays", workdays)
  }
  if(workdays[month] === undefined || workdays[month] === undefined) {
    workdays[month] = findWeekdays(month, 2019)
    saveToStorage("workdays", workdays)
  }
  return workdays;
}