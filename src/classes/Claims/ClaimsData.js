import { 
  ClaimLog, 
  Workdays, 
  ClaimsGoal, 
  DailyTarget, 
  ClaimsTotal, 
  ClaimsPerDayAverage,
  ClaimsPerDayTarget
} from "./";

export class ClaimsData {
  constructor() {
    Object.assign(this, {
      claimLog: new ClaimLog().get(),
      claimsGoal: new ClaimsGoal().get(),
      workdays: new Workdays().get(new Date().getFullYear()),
    })
    this.dailyTarget = new DailyTarget(this.claimLog, this.claimsGoal, this.workdays).get();
    this.claimsTotal = new ClaimsTotal(this.claimLog).getToday();
    this.average = new ClaimsPerDayAverage(this.claimLog).get();
    this.claimsPerDayTarget = new ClaimsPerDayTarget().get();
    
  }
}
 