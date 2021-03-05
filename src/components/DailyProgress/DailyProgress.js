import React from 'react'
import { connect } from 'react-redux';
import { getStorage } from '../../utils';
import HourBlock from './HourBlock';

export function DailyProgress(props) {
  const { claimsGoal, total } = props;  

  const setBuildHourBlocks = () => {
    const shiftHours = getStorage("shiftHours");
    const blocks = [];
    for(let i = 0; i < shiftHours; i++) {
      blocks.push(<HourBlock i={i} key={i} claimsGoal={claimsGoal} shiftHours={shiftHours} total={total} />)
    }
    return blocks;
  }
    return (
      <div style={{marginTop: "20px", width: "100%", height: "50px"}}>
        <div style={{display: "flex", width: "100%", height: "25px", borderRadius: "5px", backgroundColor: "#E5E5E5"}}>
          {setBuildHourBlocks()}
        </div>
      </div>
    )
}

const mapStateToProps = (state) => ({
  total: state.claims.dailyClaimsTotal,
  target: state.claims.claimsPerDayTarget,
  claimsGoal: state.claims.claimsGoal
});

export default connect(mapStateToProps)(DailyProgress)