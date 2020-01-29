import React from 'react';
import Title from '../Title/Title';
import ReviewNotes from '../ReviewNotes/ReviewNotes';
import ClaimLog from '../ClaimLog/ClaimLog';
import AddClaimButton from '../ClaimCount/AddClaimButton';

function MainPageDev(props) {
  const [tabValue, setTabValue] = React.useState(0);
    return (
    <div className={props.paper}>
      <Title setTabValue={setTabValue} tabValue={tabValue} />
      <div >
        {tabValue === 0
        ? <ReviewNotes showType={true} />
        : tabValue === 1
          ? <ClaimLog />
          : null
        }
      </div>
      <AddClaimButton /> 
    </div>
    );
  }

export default MainPageDev;