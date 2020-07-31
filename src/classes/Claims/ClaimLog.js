import { saveToStorage, getStorage } from '../../utils';

export class ClaimLog {
  constructor() {
    this.log = this.getLogFromStorage();
    this.saveLogToStorage();
  }
  get() {
    return this.log;
  }
  getLogFromStorage() {
    return getStorage("claimLog", []);
  }
  saveLogToStorage() {
    saveToStorage("claimLog", this.log);
  }
  addClaim(claim) {
    this.log.push(claim);
    this.saveLogToStorage();
  }
}