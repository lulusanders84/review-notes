import React from 'react';
import { getLogic } from '../utils/Logic/getLogic'


export default function withInputLogicTest(WrappedComponent, compProps) {
  function WithInputLogicTest(props) {
    const id = compProps === undefined ? props.id : compProps.id
    const { values } = props;
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

  WithInputLogicTest.displayName = `withInputLogicTest(${wrappedComponentName})`;
  return WithInputLogicTest;
}