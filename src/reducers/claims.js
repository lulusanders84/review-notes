import { getClaimTotal, getDailyTarget } from '../utils/ClaimCount'
import { getWorkdays } from '../utils/ClaimSettings';
import { setStorage, saveToStorage } from '../utils';

const claimLog = 
  setStorage(JSON.parse(window.localStorage.getItem("claimLog")), []);
saveToStorage("claimLog", claimLog);
const claimsGoal = () => {
  let claimsGoal = parseInt(JSON.parse(window.localStorage.getItem("claimsGoal")));
  claimsGoal = isNaN(claimsGoal)
    ? null
    : claimsGoal;
  saveToStorage("claimsGoal", claimsGoal);
  return setStorage(claimsGoal, "16");
}
  
const workdays = getWorkdays();
const initialState = {
  claimLog,
  claimTotal: getClaimTotal(claimLog),
  claimsGoal: claimsGoal(),
  workdays,
  dailyTarget: getDailyTarget(claimLog, claimsGoal(), workdays),
  month: new Date().getMonth(),
  year: new Date().getFullYear()
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_CLAIMLOG":
      const { claimLog } = action; 
      return Object.assign({}, state, {
        claimLog,
      });
    case "SET_CLAIMTOTAL":
      const { claimTotal } = action;
      return Object.assign({}, state, {
        claimTotal, 
      });
    case "SET_CLAIMSGOAL":
      const { claimsGoal } = action;
      return Object.assign({}, state, {
        claimsGoal, 
      });
    case "SET_WORKDAYS":
      const { workdays } = action;
      console.log(workdays);
      return Object.assign({}, state, {
        workdays, 
      });  
      case "SET_DAILYTARGET":
          const { dailyTarget } = action; 
          return Object.assign({}, state, {
            dailyTarget,
          });    
    default:
      return state;
  }
}

export default reducer;