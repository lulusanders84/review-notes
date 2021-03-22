import React from 'react';
// import Title from '../Title/Title';
import AddClaimButton from '../ClaimCount/AddClaimButton';
import { setDateTimeOfLastScrape } from '../../utils/setDateTimeOfLastScrape';
import setUpdatingText from './setUpdatingText';
import setDisplayComponent from './setDisplayComponent';
import Checkbox from '../Inputs/Checkbox';
import StatsBar from '../StatsBar/StatsBar';
import ReviewNotesTitle from '../Title/ReviewNotesTitle';

function MainPageDev(props) {
  // const [tabValue, setTabValue] = React.useState(0);
  const { date, time } = setDateTimeOfLastScrape();
  
    return (
    <div className={props.paper}>
      <StatsBar />
      <div style={{marginTop: "100px"}}>
        {setUpdatingText(props.updating, date, time)}
      </div>
      <ReviewNotesTitle />
      <div >
        {setDisplayComponent(0)}
      </div>
      <Checkbox id="moveToDecision"  label="Save info as related claim" disabled={false} {...props} />
      <AddClaimButton />
    </div>
    );
  }

export default MainPageDev;




