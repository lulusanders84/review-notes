import React from 'react';
import ReviewNotes from '../ReviewNotes';
import ReviewNotesTitle from '../Title/ReviewNotesTitle';


function MainPage(props) {
  return (     
    <div className={props.paper}> 
      <ReviewNotesTitle />
      <ReviewNotes />
    </div>
  )
}

export default MainPage;