import React, { useEffect, useState } from 'react';
import { Time } from '../../classes/Time';
import { getStorage } from '../../utils';
import { setHourBlocks } from '../../utils/HourBlock/setHourBlocks';
import { connect } from 'react-redux';

export function HourBlocks(props) {
  const { claimsGoal, total } = props;
  const shiftHours = getStorage("shiftHours");
  const time =  new Time();
  const [minuteNow, setMinuteNow] = useState(time.getMinute());
  const [hourNow, setHourNow] = useState(time.getHour());
   
  const hourBlocks = setHourBlocks({
    claimsGoal, shiftHours, total, hourNow, minuteNow,
  });  

  useEffect(() => {
    setMinuteNow(time.getMinute());
    setHourNow(time.getHour());
  }, [time]);

  return (
    <div style={{display: "flex", width: "100%", height: "25px"}}>
      {hourBlocks}
    </div>
  )
}

const mapStateToProps = (state) => ({
  total: state.claims.dailyClaimsTotal,
  claimsGoal: state.claims.claimsGoal
});

export default connect(mapStateToProps)(HourBlocks)