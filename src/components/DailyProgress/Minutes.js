import React from 'react';
import BlockInProgress from './BlockInProgress';

export default function Minutes(props) {
  const { hour, hourNow, styles } = props;

    return (
      <div style={styles.minutes}>
        {hour === hourNow
          ? <BlockInProgress {...styles} />
          : null }
      </div>
    )
}