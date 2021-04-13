import React from 'react';
import { visibilityTest } from './visibilityTest';

export const withVisibility = (WrappedComponent) => {
  
  return class extends React.Component {
    render() {
      const { id, values } = this.props;
      const visible = visibilityTest[id](values);      
      return(
        <div>
        {visible 
          ? <WrappedComponent {...this.props} />
          : null
        }          
        </div>

        
      )
    }
  }
}

export default withVisibility;

