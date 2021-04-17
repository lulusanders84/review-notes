import React from 'react';
import Title from '../Title/Title';
import AddClaimButton from '../AddClaimButton.jsx';
import { setDateTimeOfLastScrape } from '../../utils/setDateTimeOfLastScrape';
import setUpdatingText from './setUpdatingText';
import setDisplayComponent from './setDisplayComponent';
import Checkbox from '../Inputs/Checkbox';
import StatsBar from '../StatsBar/StatsBar';
import { useSelector } from 'react-redux';

function MainPageDev(props) {
  const [tabValue, setTabValue] = React.useState(0);
  const { lastScrape } = useSelector(state => state.reducer)
  const { date, time } = setDateTimeOfLastScrape(lastScrape);
  
    return (
    <div className={props.paper}>
      <StatsBar />
      <div style={{marginTop: "100px"}}>
        {setUpdatingText(props.updating, date, time)}
      </div>
      <Title setTabValue={setTabValue} tabValue={tabValue} />
      <div >
        {setDisplayComponent(tabValue)}
      </div>
      <Checkbox id="moveToDecision"  label="Save info as related claim" disabled={false} {...props} />
      <AddClaimButton />
    </div>
    );
  }

export default MainPageDev;




