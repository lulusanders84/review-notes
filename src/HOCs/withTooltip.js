import { Tooltip } from '@material-ui/core';
import React from 'react';


export default function withTooltip(WrappedComponent, title, tooltipClass, isTooltipped) {
  function WithTooltip(props) {
    console.log(isTooltipped, title)
    return(
      <div>
        {isTooltipped 
        ? <Tooltip title={title} classes={{tooltip: tooltipClass}}>
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