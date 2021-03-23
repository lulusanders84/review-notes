import { saveToStorage, getStorage } from "../../../utils";

export class ElapsedTime {
  constructor() {
    const savedTime = getStorage("elapsedTime", [{min: 0, sec: 0}]);
    Object.assign(this, {
      ...savedTime,
      secZero: this._getLeadingZero("sec"),
      _running: false
    });
    ["handleTimeButtonClick", "resetTime", "startTime", "stopTime", ].forEach(func => {
      this[func] = this[func].bind(this)
    })
  }
  
  _getTime() {
    return {
      sec: this._getLeadingZero("sec") + this.sec,
      min: this.min
    };
  }
  _getLeadingZero(counter) {
    return this[counter] < 10
      ? "0"
      : ""
  }
  _increment(counter) {
    this[counter] += 1;
  }
  _incrementTime() {
    if (this.sec < 59) {
      this._increment("sec");
    } else {
      this._reset("sec");
      this._increment("min");
    }
    this._save();
  }
  _reset(counter) {
    this[counter] = 0;
  }
  _save() {
    saveToStorage("elapsedTime", {sec: this.sec, min: this.min})
  }
  handleTimeButtonClick(setTime) {
    if(this._running) {
      this.stopTime()
    } else {
      this.startTime(setTime)
    }
  }
  resetTime() {
    this._reset("min");
    this._reset("sec");
    this._save();
  }  
  startTime(setTime) {
    this._running = true;
    this._incrementerInt = setInterval(() => {
      this._incrementTime();
      setTime(this._getTime());
    }, 1000);
    return () => {
      clearInterval(this._incrementerInt);
    };
  }  
  stopTime() {
    this._running = false;
    clearInterval(this._incrementerInt)
  }
}
