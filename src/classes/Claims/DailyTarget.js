import { getStorage } from "../../utils";

export class DailyTarget {
  constructor(claimLog, claimGoal, workdays) {
    this.target = this.getDailyTarget(claimLog, claimGoal, workdays)
  }
  get = () => {
    return this.target;
  }
  getDailyTarget = (claimLog, claimGoal, workdays) => {
    const daysData = this.getDaysData(workdays);
    const { daysLeft, firstOfTheMonth, days } = daysData;
    const shiftHours = getStorage("shiftHours")
    const totalClaims = claimGoal * days * shiftHours;
    const claimsSoFar = this.calcClaimsSoFar(claimLog, firstOfTheMonth);
    const claimsPerDay = this.calcClaimsPerDay(totalClaims, claimsSoFar, daysLeft);
    return claimsPerDay;
  }
  getDaysData = (workdays) => {
    const date = new Date();
    const todayUnix = date.getTime();
    const month = date.getMonth();
    const firstOfTheMonth = new Date(`${month + 1}/1/${date.getFullYear()}`).getTime();
    let daysLeft = workdays[month].reduce((acc, day) => {
      const dayUnix = new Date(day).getTime();
      if(dayUnix > todayUnix) {
        acc.push(day)
      }
      return acc;
    }, []).length;
    if(daysLeft === 0) {
      daysLeft = 1
    };
    const days = workdays[month].length;
    return {
      daysLeft,
      month,
      days,
      firstOfTheMonth,
    }
    
  }
  calcClaimsSoFar = (claimLog, firstOfTheMonth) => {
    return claimLog.reduce((acc, claim) => {
      if(claim.dateTime > firstOfTheMonth) {
        acc.push(claim)
      }
      return acc;
    }, []).length;
  }
  calcClaimsPerDay = (totalClaims, claimsSoFar, daysLeft) => {
    const claimsRemaining = totalClaims - claimsSoFar;
    const claimsPerDay = Math.ceil(claimsRemaining / daysLeft);
    return claimsPerDay;
  }
}
 