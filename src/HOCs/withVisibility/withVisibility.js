import React from 'react';
import { handleSetVisible } from './handleSetVisible';

export const withVisibility = (WrappedComponent, type) => {
  return class extends React.Component {
    render() {
      const visible = handleSetVisible(type, this.props.values);      
      return(
        <WrappedComponent visible={visible} {...this.props} />
      )
    }
  }
}

export default withVisibility;

