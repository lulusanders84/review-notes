import React from 'react';
import ReviewNotes from '../ReviewNotes/ReviewNotes';
import ReviewNotesTitle from '../Title/ReviewNotesTitle';
// import References from '../References/References';

function MainPage(props) {
  return (     
    <div className={props.paper}> 
      <ReviewNotesTitle />
        <ReviewNotes />    
    </div>
  )
}

export default MainPage;