import { ClaimsTotal,
Workdays
} from './';

export class ClaimsPerDayAverage {
  constructor(claimLog) {
    const claimsTotal = new ClaimsTotal(claimLog).getMonth();
    const workdays = new Workdays().get(new Date().getFullYear());
    this.average = this.setClaimsPerDayAverage(claimsTotal, workdays);
  }
  setClaimsPerDayAverage = (claimsTotal, workdays) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const cutoff = new Date(`${month + 1}/${day}/${year}`).getTime();
    const daysSoFar = workdays[month].reduce((acc, day) => {
      const unix = new Date(day).getTime();
      if (unix < cutoff) {
        acc.push(day);
      }
      return acc;
    }, []).length + 1;
    return Math.round(claimsTotal / daysSoFar * 10) / 10;
  }
  get = () => {
    return this.average;
  } 
}