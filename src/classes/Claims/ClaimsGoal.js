import { setStorage, saveToStorage, getStorage } from '../../utils';

export class ClaimsGoal {
  constructor() {
    this.goal = this.getClaimsGoalFromStorage();
    this.saveClaimsGoalToStorage();
  }
  getClaimsGoalFromStorage() {
    let claimsGoal = parseInt(getStorage("claimsGoal"));
    claimsGoal = isNaN(claimsGoal)
      ? null
      : claimsGoal;
    return setStorage(claimsGoal, "16");
  }
  saveClaimsGoalToStorage() {
    saveToStorage("claimsGoal", this.goal);
  }
  setClaimsGoal(goal) {
    this.goal = goal;
    this.saveClaimsGoalToStorage();
  }
  get() {
    return this.goal;
  }
}
