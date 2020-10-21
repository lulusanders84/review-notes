
import { handleInputs } from '../../redux/actions/';

export function handleInputChange(props, event) {
  const { id, index, dispatch } = props;
  const value = { name: id, index, };
  if(typeof event === "string" || typeof event === "boolean") {
    value.value = event;
  } else if(typeof event !== "string") {
    event.persist();
    value.value = event.target.type !== "checkbox"
      ? event.target.value 
      : event.target.checked;  
  } else value.value = ""
  dispatch(handleInputs(value));
}

