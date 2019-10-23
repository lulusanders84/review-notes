import React from 'react';
import ClaimCountButton from './ClaimCountButton';
import { connect } from 'react-redux';

function ClaimCount(props) {
  return (
    <ClaimCountButton 
      claimTotal={props.claimTotal} 
      monthTarget={props.claimsGoal}
      dayTarget={props.dailyTarget}
      setPage={props.setPage} />
  )
}

const mapStateToProps = (state) => ({
  claimLog: state.claims.claimLog,
  claimTotal: state.claims.claimTotal,
  dailyTarget: state.claims.dailyTarget,
  claimsGoal: state.claims.claimsGoal
});

export default connect(mapStateToProps)(ClaimCount)
