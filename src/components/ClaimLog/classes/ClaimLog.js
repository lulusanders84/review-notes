import { Time } from '../../../classes/Time';

export class ClaimLog {
  constructor(props) {
    this.claimlogDate = new Time(props.claimlogDate);
    this.claimlogDateInUnix = this.claimlogDate.getDateInUnix();
    this.dateTodayInUnix = new Time(Date.now()).getDateInUnix();
  }
  setForwardDisabled() {
    const { claimlogDateInUnix, dateTodayInUnix } = this;
    return claimlogDateInUnix === dateTodayInUnix
      ? true
      : false;
  }
  getClaimlogDate() {
    return this.claimlogDate.getDate();
  }
}
