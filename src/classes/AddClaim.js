import { updateClaimLog, handleInputs } from '../redux/actions';
import { populateReviewedValues } from '../utils/Values';
import { setElapsedTimeReset } from '../redux/actions';
import { bindMethods } from '../utils/Classes';

export class AddClaim {
  constructor(values) {
    this._values = values;
    bindMethods(this);
    this.disabled = values.req === "" ? true : false;
  };
  handleClick = (e, dispatch, setLabel) => {
    if (this._values.moveToDecision) {
      populateReviewedValues(this._values, dispatch);
    }
    const newClaim = this._compileClaim();
    dispatch(setElapsedTimeReset(true))
    dispatch(updateClaimLog(newClaim));
    dispatch(handleInputs({ name: "req", value: "" }));
    setLabel("Added");
    setTimeout(function () { setLabel("Add Claim to Log"); }, 2000);
  }

  _compileClaim = () => {
    const { req, lob, deter, serviceType } = this._values;
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

}
