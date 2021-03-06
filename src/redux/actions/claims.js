import { Workdays,
DailyTarget,
ClaimLog,
ClaimsTotal,
ClaimsGoal,
ClaimsPerDayAverage,
DailyClaims, 
ClaimsPerDayTarget} from "../../classes/Claims";

export const updateClaimLogDate = (increment) => (dispatch) => {
  const changeToDate = increment > 0
    ? 86400000
    : -86400000;
  dispatch(setClaimlogDate(changeToDate));
  dispatch(updateDailyClaims());
}
export const updateDailyClaims = () => (dispatch, getState) => {
  const { claimLog, claimlogDate } = getState().claims;
  const claims = new DailyClaims(claimLog, claimlogDate);
  const dailyClaims = claims.get();
  const dailyClaimsTotal = claims.getTotal();
  dispatch(setDailyClaims(dailyClaims));
  dispatch(setDailyClaimsTotal(dailyClaimsTotal))
}
export const updateClaimLog = (claim) => (dispatch, getState) => {
  const claimLog = new ClaimLog();
  claimLog.addClaim(claim);
  const log = claimLog.get();
  dispatch(setClaimLog(log))
  const claimsTotal = new ClaimsTotal(log).getToday();
  const average = new ClaimsPerDayAverage(log).get();
  const { claimsGoal, workdays } = getState().claims;
  const dailyTarget = new DailyTarget(log, claimsGoal, workdays).get();
  
  dispatch(setClaimsTotal(claimsTotal));
  dispatch(setDailyTarget(dailyTarget));
  dispatch(setClaimsPerDayAverage(average));
  dispatch(updateDailyClaims());
}

export const updateClaimsGoal = (claimsGoal) => (dispatch, getState) => {
  const { claimLog, workdays } = getState().claims;
  const dailyTarget = new DailyTarget(claimLog, claimsGoal, workdays).get();
  const goal = new ClaimsGoal();
  goal.setClaimsGoal(claimsGoal);
  dispatch(setClaimsGoal(goal.get()));
  dispatch(setDailyTarget(dailyTarget));
}

export const updateClaimsPerDayTarget = () => dispatch => {
  const target = new ClaimsPerDayTarget().get();
  dispatch(setClaimsPerDayTarget(target))
}

const updateWorkdays = (workdays, year) => (dispatch, getState) => {
  year = year === undefined
    ? new Date(Date.now()).getFullYear()
    : year;
  const { claimLog, claimsGoal } = getState().claims;
  const dailyTarget = new DailyTarget(claimLog, claimsGoal, workdays.get(year)).get();
  dispatch(setWorkdays(workdays.get(year)));
  dispatch(setDailyTarget(dailyTarget));
}

export const addOrRemoveWorkday = (month, day) => dispatch => {
  day = new Date(day).toISOString();
  const year = new Date(day).getFullYear();
  const workdays = new Workdays();
  workdays.updateWorkDays(year, month, day);
  dispatch(updateWorkdays(workdays, year));
}

export const resetWorkdays = () => dispatch => {
  window.localStorage.removeItem("workdays");
  const workdays = new Workdays();
  dispatch(updateWorkdays(workdays));
}

export const updateClaimsPerDayAverage = () => (dispatch, getState) => {
  const { claimLog } = getState().claims;
  const average = new ClaimsPerDayAverage(claimLog).get();
  dispatch(setClaimsPerDayAverage(average))
}

const SET_DAILYCLAIMS = 'SET_DAILYCLAIMS';
export const setDailyClaims = (dailyClaims) => ({
  type: SET_DAILYCLAIMS,
  dailyClaims,
});

const SET_DAILYCLAIMSTOTAL = 'SET_DAILYCLAIMSTOTAL';
export const setDailyClaimsTotal = (dailyClaimsTotal) => ({
  type: SET_DAILYCLAIMSTOTAL,
  dailyClaimsTotal,
});

const SET_ELAPSED_TIME_RESET = 'SET_ELAPSED_TIME_RESET';
export const setElapsedTimeReset = (elapsedTimeReset) => ({
  type: SET_ELAPSED_TIME_RESET,
  elapsedTimeReset,
});

const SET_CLAIMLOG_DATE = "SET_CLAIMLOG_DATE";
export const setClaimlogDate = (increment) => ({
  type: SET_CLAIMLOG_DATE,
  increment
})
const SET_CLAIMSPERDAYAVERAGE = 'SET_CLAIMSPERDAYAVERAGE';
export const setClaimsPerDayAverage = (average) => ({
  type: SET_CLAIMSPERDAYAVERAGE,
  average,
});
const SET_CLAIMSPERDAYTARGET = 'SET_CLAIMSPERDAYTARGET';
export const setClaimsPerDayTarget = (target) => ({
  type: SET_CLAIMSPERDAYTARGET,
  target,
});
const SET_CLAIMLOG = 'SET_CLAIMLOG';
export const setClaimLog = (claimLog) => ({
  type: SET_CLAIMLOG,
  claimLog,
});

const SET_CLAIMSTOTAL = 'SET_CLAIMSTOTAL';
export const setClaimsTotal = (claimsTotal) => ({
  type: SET_CLAIMSTOTAL,
  claimsTotal,
});

const SET_CLAIMSGOAL = 'SET_CLAIMSGOAL';
export const setClaimsGoal = (claimsGoal) => ({
  type: SET_CLAIMSGOAL,
  claimsGoal,
});

const SET_WORKDAYS = 'SET_WORKDAYS';
export const setWorkdays = (workdays) => ({
  type: SET_WORKDAYS,
  workdays,
});

const SET_DAILYTARGET = 'SET_DAILYTARGET';
export const setDailyTarget = (dailyTarget) => ({
  type: SET_DAILYTARGET,
  dailyTarget,
});