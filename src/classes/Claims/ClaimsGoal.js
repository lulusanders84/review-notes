import { setStorage, saveToStorage } from '../../utils';

export class ClaimsGoal {
  constructor() {
    this.goal = this.getClaimsGoalFromStorage();
    this.saveClaimsGoalToStorage();
  }
  getClaimsGoalFromStorage() {
    let claimsGoal = parseInt(JSON.parse(window.localStorage.getItem("claimsGoal")));
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
