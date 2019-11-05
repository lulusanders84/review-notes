import ClaimsData from '../classes/ClaimsData';

const data = new ClaimsData();
const { claimLog, claimsGoal, workdays, dailyTarget, claimsTotal } = data;
const initialState = {
  claimLog,
  claimsTotal,
  claimsGoal,
  workdays,
  dailyTarget,
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
    case "SET_CLAIMSTOTAL":
      const { claimsTotal } = action;
      return Object.assign({}, state, {
        claimsTotal, 
      });
    case "SET_CLAIMSGOAL":
      const { claimsGoal } = action;
      return Object.assign({}, state, {
        claimsGoal, 
      });
    case "SET_WORKDAYS":
      const { workdays } = action;
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