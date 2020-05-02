import React from 'react';
import { handleSetVisible } from './handleSetVisible';

export const withVisibility = (WrappedComponent) => {
  return (props) => {
    const { id, values } = props;
    const visible = handleSetVisible(id, values);      
    return(
      <WrappedComponent visible={visible} {...props} />
    )
  }
}

export default withVisibility;

