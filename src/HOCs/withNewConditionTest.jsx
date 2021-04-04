import React from 'react';
import { useSelector } from 'react-redux';


export default function withConditionTest(WrappedComponent, logic, compProps) {
  function WithConditionTest(props) {
    const values = useSelector(state => state.values);
    const logicPassed = typeof logic === "boolean" ? logic : logic(values)
    return (
      <div>
        {logicPassed ? <WrappedComponent {...compProps} {...props} /> : null}
      </div> 
    )
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithConditionTest.displayName = `withConditionTest(${wrappedComponentName})`;
  
  return WithConditionTest;
}