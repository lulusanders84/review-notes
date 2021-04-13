import React from 'react';
import { useSelector } from 'react-redux';
import { visibilityTest } from './visibilityTest';

export default function withVisibility(WrappedComponent) {
  
  function WithVisibility(props) {
    const values = useSelector(state => state.values)
    const { id } = props;
    
    const visible = visibilityTest[id] !== undefined 
      ? visibilityTest[id](values) 
      : true 
        
    return(
      <div>
      {visible 
        ? <WrappedComponent {...props} />
        : null
      }          
      </div>
    )
  }

  const wrappedComponentName = WrappedComponent.displayName
  || WrappedComponent.name
  || 'Component';

  WithVisibility.displayName = `WithVisibility(${wrappedComponentName})`;
  return WithVisibility;
}

