import React from 'react';
import BlockInProgress from './BlockInProgress';

export default function Minutes(props) {
  let { hour, hourNow, styles, backgroundImage, backgroundColor } = props;
  return (
    <div style={styles.minutes}>
      {hour === hourNow
        ? <BlockInProgress {...styles} backgroundImage={backgroundImage} backgroundColor={backgroundColor} />
        : null }
    </div>
  )
}