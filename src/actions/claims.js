import { addClaimToStorage, getClaimTotal, getDailyTarget } from "../utils/ClaimCount";
import { saveToStorage, setStorage } from "../utils";
import { findWeekdays } from "../utils/ClaimSettings";

export const updateClaimLog = (claim) => (dispatch) => {
  addClaimToStorage(claim);
  const claimLog = setStorage(JSON.parse(window.localStorage.getItem("claimLog")), []);
  if(claim)
  dispatch(setClaimLog(claimLog))
  const claimTotal = getClaimTotal(claimLog);
  dispatch(setClaimTotal(claimTotal));
}

export const updateClaimsGoal = (claimsGoal) => (dispatch, getState) => {
  const { claimLog, workdays } = getState().claims;
  const dailyTarget = getDailyTarget(claimLog, claimsGoal, workdays)
  saveToStorage("claimsGoal", claimsGoal);
  dispatch(setClaimsGoal(claimsGoal));
  dispatch(setDailyTarget(dailyTarget));
}

export const updateWorkdays = (month, day) => (dispatch, getState) => {
  day = new Date(day).toISOString();
  let workdays = setStorage(JSON.parse(window.localStorage.getItem("workdays")), {});
  const workdaysByMonth = workdays[month];
  if(workdaysByMonth === undefined) {
    workdays[month] = findWeekdays(month, 2019);
  }
  const dayAlreadyInWorkdays = workdaysByMonth.includes(day);
  if(dayAlreadyInWorkdays) {
    const index = workdaysByMonth.indexOf(day)
    workdaysByMonth.splice(index, 1);
  } else {
    workdaysByMonth.push(day)
  }
  workdays[month] = workdaysByMonth;
  saveToStorage("workdays", workdays);
  const { claimLog, claimsGoal } = getState().claims;
  const dailyTarget = getDailyTarget(claimLog, claimsGoal, workdays);
  dispatch(setWorkdays(workdays));
  dispatch(setDailyTarget(dailyTarget));

}

const SET_CLAIMLOG = 'SET_CLAIMLOG';
export const setClaimLog = (claimLog) => ({
  type: SET_CLAIMLOG,
  claimLog,
});

const SET_CLAIMTOTAL = 'SET_CLAIMTOTAL';
export const setClaimTotal = (claimTotal) => ({
  type: SET_CLAIMTOTAL,
  claimTotal,
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