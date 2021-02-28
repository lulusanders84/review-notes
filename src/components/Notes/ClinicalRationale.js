import React from 'react';
import { withVisibility, setComposed } from '../../HOCs';
import Note from './Note';
import NoteContainer from './NoteContainer';
import { formatValues } from '../../utils/Notes';

export function ClinicalRationale(props) {
    return (
        <NoteContainer visible={props.visible}>
            <Note title="Clinical Rationale">
                {props.values["clinicalRationale"]}
            </Note>  
        </NoteContainer>    
    )
}

const mapStateToProps = (state) => ({
    values: formatValues(state.values),
    notes: state.notes,
    id: "clinRat"
  });
  
  const composed = setComposed(mapStateToProps, withVisibility, ClinicalRationale);
  export default composed;