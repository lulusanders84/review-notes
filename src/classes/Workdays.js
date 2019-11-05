import { saveToStorage } from '../utils/saveToStorage';
import Weekdays from './Weekdays';

export default class Workdays {
  constructor() {
    this.days = this.getWorkdaysFromStorage();
    this.saveWorkdaysToStorage();
  }
  getWorkdaysFromStorage() {
    let workdays = JSON.parse(window.localStorage.getItem("workdays"));
    const month = new Date().getMonth();
    if(workdays === undefined || workdays === null) {
      workdays = {};
    }
    if(workdays[month] === undefined || workdays[month] === undefined) {
      workdays[month] = new Weekdays(month, 2019).getWeekdays();
    }
    return workdays;
  }
  saveWorkdaysToStorage() {
    saveToStorage("workdays", this.days)
  }
  get() {
    return this.days;
  }
  updateWorkDays(month, day) {
    const workdaysByMonth = this.days[month];
    if(workdaysByMonth === undefined) {
      this.days[month] = new Weekdays(month, 2019).getWeekdays();
    }
    const dayAlreadyInWorkdays = workdaysByMonth.includes(day);
    if(dayAlreadyInWorkdays) {
      const index = workdaysByMonth.indexOf(day)
      workdaysByMonth.splice(index, 1);
    } else {
      workdaysByMonth.push(day)
    }
    this.days[month] = workdaysByMonth;
    this.saveWorkdaysToStorage();
  }
}