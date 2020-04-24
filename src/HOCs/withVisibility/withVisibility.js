import React from 'react';
import { handleSetVisible } from './handleSetVisible';

export const withVisibility = (WrappedComponent) => {
  
  return class extends React.Component {
    render() {
      const { id, values } = this.props;
      const visible = handleSetVisible(id, values);      
      return(
        <WrappedComponent visible={visible} {...this.props} />
      )
    }
  }
}

export default withVisibility;

