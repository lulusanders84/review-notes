import React, { useEffect, useState } from 'react'
import { Button, Progress } from 'semantic-ui-react'
import { connect } from 'react-redux';

export function DailyProgress(props) {
  const [percent, setPercent] = useState(props.total);
  const { target, total } = props;
  console.log(target)
  useEffect(() => {

  }, [total])
  const increment = () => {
    setPercent(percent >= 100 ? 0 : percent + 20);
    }

    return (
      <div style={{marginTop: "20px", width: "100%", height: "150px"}}>
        <Progress percent={percent} indicating />
        <Button onClick={increment}>Increment</Button>
      </div>
    )
}

const mapStateToProps = (state) => ({
  total: state.claims.dailyClaimsTotal,
  target: state.claims.claimsPerDayTarget
});

export default connect(mapStateToProps)(DailyProgress)