import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fullReview } from '../../../templates/noteTemplates/fullReview';
import { setMedClaimReviewData } from '../../../redux/actions/notes';
import Note from '../Note';
import { notes } from '../../../notes/notes';
import { followDecision } from '../../../templates/noteTemplates/followDecision';


export function MedClaimReviewNote() {
  const values = useSelector(state => state.values);
  const dispatch = useDispatch()
  const template = values.reviewed === "no" ? fullReview : followDecision

  React.useEffect(() => {
    dispatch(setMedClaimReviewData(values))
  }, [dispatch, values])

    return (
    <Note title="Medical Claim Review Note" capWordButtons>
      {template.map(line => {
        const {component, content, id, title} = notes[line];
        const Line = component;
        return <Line id={id} title={title} content={content} />})
      }
    </Note>   
    )
}

export default MedClaimReviewNote;