export class ClaimsTotal {
  constructor(claimLog) {
    this.total = this.setClaimsTotal(claimLog);
  }
  setClaimsTotal = (claimLog) => {
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
  get = () => {
    return this.total;
  } 
}