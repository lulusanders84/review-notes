import { getStorage } from '../../utils/getStorage';
export class WorkHours {
  constructor() {
    this.hours = this.getWorkHoursFromStorage();
  }
  get() {
    return this.hours;
  }
  getWorkHoursFromStorage() {
    return getStorage("workHours", 8);
  }
}