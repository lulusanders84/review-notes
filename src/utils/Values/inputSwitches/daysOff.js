import { resetWorkdays } from "../../../redux/actions/claims";
import { saveToStorage } from "../../saveToStorage";

export const daysOff = (value, values, dispatch) => {
  saveToStorage("daysOff", value.value);
  dispatch(resetWorkdays());
  return {};
}