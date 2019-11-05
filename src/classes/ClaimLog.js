import { setStorage, saveToStorage } from '../utils';

export default class ClaimLog {
  constructor() {
    this.log = this.getLogFromStorage();
    this.saveLogToStorage();
  }
  get() {
    return this.log;
  }
  getLogFromStorage() {
    return setStorage(JSON.parse(window.localStorage.getItem("claimLog")), []);
  }
  saveLogToStorage() {
    saveToStorage("claimLog", this.log);
  }
  addClaim(claim) {
    this.log.push(claim);
    this.saveLogToStorage();
  }
}