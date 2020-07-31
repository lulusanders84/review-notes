import { saveToStorage } from '../../utils/saveToStorage';
import { Weekdays } from './';
import { getStorage } from '../../utils';

export class Workdays {
  constructor() {
    this.days = this.getWorkdaysFromStorage();
    this.saveWorkdaysToStorage();
  }
  getWorkdaysFromStorage() {
    let workdays = getStorage("workdays");
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
    return workdays;
  }
  saveWorkdaysToStorage() {
    saveToStorage("workdays", this.days)
  }
  get(year) {
    return this.days[year];
  }
  updateWorkDays(year, month, day) {
    const workdaysByMonth = this.days[year][month];
    if(workdaysByMonth === undefined) {
      this.days[month] = new Weekdays(month, year).getWeekdays();
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