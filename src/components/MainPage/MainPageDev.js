import React from 'react';
import Title from '../Title/Title';
import ReviewNotes from '../ReviewNotes/ReviewNotes';
import ClaimLog from '../ClaimLog/ClaimLog';
import AddClaimButton from '../ClaimCount/AddClaimButton';
import { getStorage } from '../../utils';

function MainPageDev(props) {
  const [tabValue, setTabValue] = React.useState(0);
  const scraped = getStorage("lastScrape", null);
  const d = new Date(scraped);
  const date = d.toDateString();
  const time = d.toLocaleTimeString();
    return (
    <div className={props.paper}>
      <div>
        {props.updating
          ? <p>Policies updating...</p>
          : <p> Policies updated {date} {time} </p>}
      </div>
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