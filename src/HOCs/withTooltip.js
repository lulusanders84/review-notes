import { Tooltip } from '@material-ui/core';
import React from 'react';


export default function withTooltip(WrappedComponent, name, tooltipClass, isTooltipped) {
  function WithTooltip(props) {
    return(
      <div>
        {isTooltipped 
        ? <Tooltip title={name} classes={{tooltip: tooltipClass}}>
            <WrappedComponent {...props} />
          </Tooltip> 
        : <WrappedComponent {...props} />}
      </div> 
    )
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithTooltip.displayName = `withTooltip(${wrappedComponentName})`;
  return WithTooltip;
}