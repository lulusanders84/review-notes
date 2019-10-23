export const getDailyTarget = (claimLog, claimGoal, workdays) => {
  const date = new Date();
  const todayUnix = date.getTime();
  const month = date.getMonth();
  const days = workdays[month].length;
  const daysLeft = workdays[month].reduce((acc, day) => {
    const dayUnix = new Date(day).getTime();
    if(dayUnix > todayUnix) {
      acc.push(day)
    }
    return acc;
  }, []).length;
  // const firstOfTheMonth = new Date(`${month + 1}/1/${date.getFullYear()}`).getTime();
  const claimsSoFar = 238;
  // claimLog.reduce((acc, claim) => {
  //   if(claim.dateTime > firstOfTheMonth) {
  //     acc.push(claim)
  //   }
  //   return acc;
  // }, []).length;
  const totalClaims = claimGoal * days;
  const claimsRemaining = totalClaims - claimsSoFar;
  const claimsPerDay = Math.ceil(claimsRemaining / daysLeft);
  return claimsPerDay;
}