import React from 'react';

export default function BlockInProgress(props) {
  const { blockInProgress, pastMinutes, futureMinutes } = props;
  console.log(futureMinutes)
  return (
    <div style={blockInProgress}>
      <div style={pastMinutes}></div>
      <div style={futureMinutes}></div>
    </div>
    
  )
}
 