import { getStorage } from '../../utils';
import { initialValues } from '../../utils/Values';

export class ClaimsPerDayTarget {
  constructor() {
    this.shiftHours = getStorage("shiftHours", initialValues.shiftHours);
    this.claimsGoal = getStorage("claimsGoal");
  }
  get() {
    return this.shiftHours * this.claimsGoal;
  }
}