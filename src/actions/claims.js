import Workdays from "../classes/Workdays";
import DailyTarget from "../classes/DailyTarget";
import ClaimLog from "../classes/ClaimLog";
import ClaimsTotal from "../classes/ClaimsTotal";
import ClaimsGoal from "../classes/ClaimsGoal";

export const updateClaimLog = (claim) => (dispatch, getState) => {
  const claimLog = new ClaimLog();
  claimLog.addClaim(claim);
  const log = claimLog.get();
  dispatch(setClaimLog(log))
  const claimsTotal = new ClaimsTotal(log).get();
  const { claimsGoal, workdays } = getState().claims;
  const dailyTarget = new DailyTarget(log, claimsGoal, workdays).get();
  dispatch(setClaimsTotal(claimsTotal));
  dispatch(setDailyTarget(dailyTarget));
}

export const updateClaimsGoal = (claimsGoal) => (dispatch, getState) => {
  const { claimLog, workdays } = getState().claims;
  const dailyTarget = new DailyTarget(claimLog, claimsGoal, workdays).get();
  const goal = new ClaimsGoal();
  goal.setClaimsGoal(claimsGoal);
  dispatch(setClaimsGoal(goal.get()));
  dispatch(setDailyTarget(dailyTarget));
}

export const updateWorkdays = (month, day) => (dispatch, getState) => {
  day = new Date(day).toISOString();
  const workdays = new Workdays();
  workdays.updateWorkDays(month, day);
  const { claimLog, claimsGoal } = getState().claims;
  const dailyTarget = new DailyTarget(claimLog, claimsGoal, workdays).get();
  dispatch(setWorkdays(workdays.get()));
  dispatch(setDailyTarget(dailyTarget));
}

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