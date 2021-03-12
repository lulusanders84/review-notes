import React from 'react';
import { setStyles } from '../../styles/hourBlockStyles'
import { createHourBlockProps } from '../../utils/HourBlock/createHourBlockProps';
import { setStyleParameters } from '../../utils/HourBlock/setStyleParameters';
import Minutes from './Minutes';

export default function HourBlock(props) {
 
  let allProps = {...props, ...createHourBlockProps(props)};
  allProps = {...allProps, ...setStyleParameters(allProps)};
  const { hour, hourNow } = allProps;
  const { hourBlock, label, ...styles } = setStyles(allProps);
  const { backgroundImage, backgroundColor } = hourBlock;

  const minutesProps = {
    backgroundColor,
    backgroundImage,
    hour, 
    hourNow, 
    styles,
  }

  return (
    <div style={hourBlock}>
      <Minutes {...minutesProps} />
      <div className="label" style={label}>{ hour }</div>
    </div>
  )
}
