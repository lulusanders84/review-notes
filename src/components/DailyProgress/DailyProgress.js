import React from 'react';
import HourBlocks from './HourBlocks';
import { styles } from '../../styles/dailyProgressStyles';

export default function DailyProgress() {
    return (
      <div style={styles}>
        <HourBlocks />
      </div>
    )
}