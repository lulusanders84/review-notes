import React from 'react';
import { handleInputs } from '../../redux/actions';

export const withHandleChange = (WrappedComponent) => {
  return (props) => {
    const handleChange = event => {
      const value = {
        name: props.id
      };
      if(event.persist) {
        event.persist();
        if(event.target.type === "checkbox") {
          value.value = event.target.checked;
        } else if(props.id === "linked") {
          value.value = !props.values.linked;
        }       
        else {
          value.value = event.target.value;
        }      
      } else {
        value.value = event;
      }
      props.dispatch(handleInputs(value));
    };
    return(
      <WrappedComponent handleChange={handleChange} {...props} />
    )
  }
}

export default withHandleChange;



