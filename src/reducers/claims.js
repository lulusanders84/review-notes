import ClaimsData from '../classes/ClaimsData';
import DailyClaims from '../classes/DailyClaims';

const data = new ClaimsData();
const { claimLog, claimsGoal, workdays, dailyTarget, claimsTotal, average } = data;
const claims = new DailyClaims(claimLog, Date.now());
const dailyClaims = claims.get();
const dailyClaimsTotal = claims.getTotal();
const initialState = {
  claimLog,
  claimsTotal,
  claimsGoal,
  workdays,
  dailyTarget,
  average,
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  claimlogDate: Date.now(),
  dailyClaimsTotal,
  dailyClaims,

}
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_DAILYCLAIMS":
      const { dailyClaims } = action; 
      return Object.assign({}, state, {
        dailyClaims,
      }); 
    case "SET_DAILYCLAIMSTOTAL":
      const { dailyClaimsTotal } = action; 
      return Object.assign({}, state, {
        dailyClaimsTotal,
      }); 
    case "SET_CLAIMLOG_DATE":
      const { increment } = action; 
      return Object.assign({}, state, {
        claimlogDate: state.claimlogDate + increment
      });    
    case "SET_CLAIMSPERDAYAVERAGE":
      const { average } = action; 
      return Object.assign({}, state, {
        average,
      });
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