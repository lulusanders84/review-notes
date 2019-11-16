import ClaimLog from "./ClaimLog";
import Workdays from "./Workdays";
import ClaimsGoal from "./ClaimsGoal";
import DailyTarget from "./DailyTarget";
import ClaimsTotal from "./ClaimsTotal";
import ClaimsPerDayAverage from "./ClaimsPerDayAverage";

export default class ClaimsData {
  constructor() {
    Object.assign(this, {
      claimLog: new ClaimLog().get(),
      claimsGoal: new ClaimsGoal().get(),
      workdays: new Workdays().get(),
    })
    this.dailyTarget = new DailyTarget(this.claimLog, this.claimsGoal, this.workdays).get();
    this.claimsTotal = new ClaimsTotal(this.claimLog).get();
    this.average = new ClaimsPerDayAverage(this.claimLog).get();
    
  }
}
 