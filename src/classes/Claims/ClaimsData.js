import { ClaimLog, 
  Workdays, 
  ClaimsGoal, 
  DailyTarget, 
  ClaimsTotal, 
  ClaimsPerDayAverage} from "./";


export class ClaimsData {
  constructor() {
    Object.assign(this, {
      claimLog: new ClaimLog().get(),
      claimsGoal: new ClaimsGoal().get(),
      workdays: new Workdays().get(),
    })
    this.dailyTarget = new DailyTarget(this.claimLog, this.claimsGoal, this.workdays).get();
    this.claimsTotal = new ClaimsTotal(this.claimLog).getToday();
    this.average = new ClaimsPerDayAverage(this.claimLog).get();
    
  }
}
 