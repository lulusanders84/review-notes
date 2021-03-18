export class ElapsedTime {
  constructor() {
    this.sec = 0;
    this.min = 0;
    this.getTime = this.getTime.bind(this);
    this.incrementTime = this.incrementTime.bind(this);  
    this.resetTime = this.resetTime.bind(this);  
  }
  _increment(counter) {
    this[counter] += 1;
  }
  _reset(counter) {
    this[counter] = 0;
  }
  getTime() {
    return {
      sec: this.getLeadingZero("sec") + this.sec,
      min: this.min
    };
  }
  getLeadingZero(counter) {
    return this[counter] < 10
      ? "0"
      : ""
  }
  incrementTime() {
    if (this.sec < 59) {
      this._increment("sec");
    } else {
      this._reset("sec");
      this._increment("min");
    }
  }
  resetTime() {
    this._reset("min");
    this._reset("sec");
  }
}
