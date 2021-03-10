export class Time {
  getNowDate() {
    return new Date(Date.now())
  }
  getMinuteOfNow() {
    return this.getNowDate().getMinutes();
  }
  getHourOfNow() {
    return this.getNowDate().getHours();
  }
  getSecondOfNow() {
    return this.getNowDate().getSeconds();
  }
}