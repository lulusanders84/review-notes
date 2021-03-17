import { updateClaimLog, handleInputs } from '../../../redux/actions';
import { populateReviewedValues } from '../../../utils/Values/populateReviewValues';

export class AddClaim {
  constructor(values) {
    this.values = values;
  };
  _compileClaim = () => {
    const { req, lob, deter, serviceType } = this.values;
    const peer = deter === "send to medical director"
      ? true
      : false;
    return {
      req,
      serviceType,
      dateTime: Date.now(),
      lob,
      peer,
    };
  };
  handleClick(e, dispatch, setLabel) {
    if (this.values.moveToDecision) {
      populateReviewedValues(this.values, dispatch);
    }
    const newClaim = this._compileClaim();
    dispatch(updateClaimLog(newClaim));
    dispatch(handleInputs({ name: "req", value: "" }));
    setLabel("Added");
    setTimeout(function () { setLabel("Add Claim to Log"); }, 2000);
  }
}
