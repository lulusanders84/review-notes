import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fullReview } from '../../../templates/noteTemplates/fullReview';
import { setMedClaimReviewData } from '../../../redux/actions/notes';
import Note from '../Note';
import { notes } from '../../../notes/notes';


export function MedClaimReviewNote() {
  const values = useSelector(state => state.values);
  const dispatch = useDispatch()
  const template = values.reviewed === "no" ? fullReview : undefined

  React.useEffect(() => {
    dispatch(setMedClaimReviewData(values))
  }, [dispatch, values])

    return (
    <Note title="Medical Claim Review Note" capWordButtons>
      {template.map(line => {
        console.log(line)
        const {component, content, id, title} = notes[line];
        const Line = component;
        return <Line id={id} title={title} content={content} />})
      }
    </Note>   
    )
}

export default MedClaimReviewNote;