import React from 'react';
import HourBlock from '../../components/DailyProgress/HourBlock';

export const setHourBlocks = (props) => {
  const { shiftHours } = props;
  console.log(shiftHours)
  return new Array(parseInt(shiftHours) + 1).fill(0).map((hour, i) => {
    return <HourBlock key={i} {...props} i={i} />
  }) 
}