import { saveToStorage } from "../../../utils";

export class ElapsedTime {
  constructor(savedTime) {
    this.sec = savedTime.sec;
    this.min = savedTime.min;
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
  _save() {
    saveToStorage("elapsedTime", {sec: this.sec, min: this.min})
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
    this._save();
  }
  resetTime() {
    this._reset("min");
    this._reset("sec");
    this._save();
  }

}
