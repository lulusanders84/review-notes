import React from 'react';
import Title from '../Title/Title';
import AddClaimButton from '../ClaimCount/AddClaimButton';
import { setDateTimeOfLastScrape } from '../../utils/setDateTimeOfLastScrape';
import setUpdatingText from './setUpdatingText';
import setDisplayComponent from './setDisplayComponent';

function MainPageDev(props) {
  const [tabValue, setTabValue] = React.useState(0);
  const { date, time } = setDateTimeOfLastScrape();
  
    return (
    <div className={props.paper}>
      <div>
        {setUpdatingText(props.updating, date, time)}
      </div>
      <Title setTabValue={setTabValue} tabValue={tabValue} />
      <div >
        {setDisplayComponent(tabValue)}
      </div>
      <AddClaimButton /> 
    </div>
    );
  }

export default MainPageDev;




