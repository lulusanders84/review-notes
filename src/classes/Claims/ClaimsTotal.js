export class ClaimsTotal {
  constructor(claimLog) {
    this.todayTotal = this.setTodayClaimsTotal(claimLog);
    this.monthTotal = this.setMonthClaimsTotal(claimLog);
  }
  setTodayClaimsTotal = (claimLog) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const cutoff = new Date(`${month}/${day}/${year}`).getTime();
    const todaysClaims = claimLog.reduce((acc, claim) => {
      if(claim.dateTime > cutoff) {
        acc.push(claim)
      }
      return acc;
    }, [])
    return todaysClaims.length;
  }
  getToday = () => {
    return this.todayTotal;
  } 
  setMonthClaimsTotal = (claimLog) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const cutoff = new Date(`${month}/1/${year}`).getTime();
    const claims = claimLog.reduce((acc, claim) => {
      if(claim.dateTime > cutoff) {
        acc.push(claim)
      }
      return acc;
    }, [])
    return claims.length;
  }
  getMonth = () => {
    return this.monthTotal;
  }
}