
import { handleInputs } from '../../redux/actions/';

export function handleInputChange(props, event) {
  const value = { name: props.id };
  if(typeof event !== "string") {
    event.persist();
    value.value = event.target.type !== "checkbox"
      ? event.target.value 
      : event.target.checked;  
  } else if(typeof event === "string") {
    value.value = event;
  } else value.value = ""
  props.dispatch(handleInputs(value));
}

