import React from 'react';
import { getInputLogic } from '../../utils/Inputs/ConditionalInputs';


export const withInputLogicTest = (WrappedComponent, compProps) => {
  return class extends React.Component {
    render() {
      const id = compProps === undefined ? this.props.id : compProps.id
      const { values } = this.props;
      const logicPassed = getInputLogic(id)(values)    
      return(
        <div>
          {logicPassed ? <WrappedComponent {...compProps} {...this.props} /> : null}
        </div>
        
      )
    }
  }
}

export default withInputLogicTest;