import React from 'react';
import { setBlockProgress } from '../../utils/HourBlock/setBlockInProgress';
import { setMinutesStyles } from '../../utils/HourBlock/setMinutesStyles';

export default function BlockInProgress(props) {
  let { pastMinutes, futureMinutes } = props;
  const blockInProgress = setBlockProgress(props)
  pastMinutes = setMinutesStyles(pastMinutes, props);
  futureMinutes = setMinutesStyles(futureMinutes, props);
  return (
    <div style={blockInProgress}>
      <div style={pastMinutes}></div>
      <div style={futureMinutes}></div>
    </div>
    
  )
}
 