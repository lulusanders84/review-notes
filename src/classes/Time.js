export class Time {
  constructor(unix) {
    this.refreshTime();
    this.date = new Date(unix);
    const dateValues = {
      m: this.date.getMonth(),
      d: this.date.getDate(),
      y: this.date.getFullYear(),
      h: this.date.getHours(),
      min: this.date.getMinutes()
    }
    Object.assign(this, dateValues)
  }

  getDateInUnix() {
    return this.getUnixTime(this.getDate());
  }
  getDate() {
    // const { getFullYear: y, getMonth: m, getDate: d, getHours: h, getMinutes: min } = this.date;
    const { m, d, y } = this;
    return `${m + 1}/${d}/${y}`;
  }
  getDateAndTime() {
    const { m, d, h, min } = this;
    return `${m + 1}/${d} ${h}:${min}`;
  }
  getUnixTime(date) {
    return new Date(date).getTime();
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
  refreshTime() {
    this.time = new Date(Date.now())
  }
}