import React from 'react';
import { getLogic } from '../utils/Logic/getLogic'


export default function withConditionTest(WrappedComponent, compProps) {
  function WithConditionTest(props) {
    const id = props.id || compProps.id
    const values = props.values || compProps.value
    const logicPassed = getLogic(id)(values)
    return(
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