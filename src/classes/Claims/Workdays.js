import { saveToStorage } from '../../utils/saveToStorage';
import { Weekdays } from './';

export class Workdays {
  constructor() {
    this.days = this.getWorkdaysFromStorage();
    this.saveWorkdaysToStorage();
  }
  getWorkdaysFromStorage() {
    let workdays = JSON.parse(window.localStorage.getItem("workdays"));
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    if(workdays === undefined || workdays === null) {
      workdays = {};
    }
    if(workdays[year] === undefined || workdays[year] === null) {
      workdays[year] = {};
    }
    if(workdays[year][month] === undefined || workdays[year][month] === null) {
      workdays[year][month] = new Weekdays(month, year).getWeekdays();
    }
    return workdays[year];
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