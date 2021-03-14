export class Time {
  constructor() {
    this.refreshTime();
  }
  refreshTime() {
    this.time = new Date(Date.now())
  }
  getMinute() {
    this.refreshTime()
    return this.time.getMinutes();
  }
  getHour() {
    this.refreshTime()
    return this.time.getHours();
  }
  getSecond() {
    this.refreshTime();
    return this.time.getSeconds();
  }
}