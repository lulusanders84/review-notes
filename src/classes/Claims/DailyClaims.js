import { formatDate } from "../../utils";

export class DailyClaims {
  constructor(claimLog, today) {
    this.claims = this.setDailyClaims(claimLog, today);
  }
  setDailyClaims = (claimLog, today) => {
    today = formatDate(today);
    today = new Date(today).getTime();
    const nextDay = today + 86400000;
    console.log(today, nextDay)
    const claims = claimLog.reduce((acc, claim) => {
      if(claim.dateTime > today && claim.dateTime < nextDay) {
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