import { Time } from "../Time";

export class DailyClaims {
  constructor(claimLog, today) {
    this.claims = this.setDailyClaims(claimLog, today);
  }
  setDailyClaims = (claimLog, today) => {
    const time = new Time(today);
    const todaysDate = time.getDateInUnix();
    const nextDay = todaysDate + 86400000;
    const claims = claimLog.reduce((acc, claim) => {
      if(claim.dateTime > todaysDate && claim.dateTime < nextDay) {
        acc.push(claim)
      }
      return acc;
    }, [])
    return claims;
  }
  get = () => {
    return this.claims;
  }
  getTotal = () => {
    return this.claims.length;
  }
}