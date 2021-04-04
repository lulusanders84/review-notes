import React from 'react';
import ReviewNotes from '../ReviewNotes/ReviewNotes';
import SaveAsRelatedClaim from '../SaveAsRelatedClaim';
import ReviewNotesTitle from '../Title/ReviewNotesTitle';

function MainPage(props) {
  return (     
    <div className={props.paper}> 
      <ReviewNotesTitle />
      <ReviewNotes />
      <SaveAsRelatedClaim />
    </div>
  )
}

export default MainPage;