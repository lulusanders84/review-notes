import React from 'react';
import FollowDecisionNote from './FollowDecisionNote';
import FullReviewNote from './FullReviewNote';
import { connect } from 'react-redux';
import { setMedClaimReviewData } from '../../../redux/actions/notes';

export function MedClaimReviewNote(props) {
  const { values } = props;
  const noteTemplateComponent = () => {
    return values.reviewed === "no"
      ? <FullReviewNote dataRequests={[setMedClaimReviewData]} />
      : <FollowDecisionNote dataRequests={[setMedClaimReviewData]} />
  }
  return (
    <div>
      {noteTemplateComponent()}  
    </div>  
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(MedClaimReviewNote)