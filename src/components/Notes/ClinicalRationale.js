import React from 'react';
import { withVisibility, setComposed } from '../../HOCs';
import Note from './Note';
import NoteContainer from './NoteContainer';
import DenialLetter from './DenialLetter';
import { cleanValuesObj } from '../../utils/formatting/cleanValuesObj';

export function ClinicalRationale(props) {
    return (
        <NoteContainer visible={props.visible}>
            <Note title="Clinical Rationale">
                {props.values["clinicalRationale"]}
                <DenialLetter visible />
            </Note>  
        </NoteContainer>    
    )
}

const mapStateToProps = (state) => ({
    values: cleanValuesObj(state.values),
    notes: state.notes,
    id: "clinRat"
  });
  
  const composed = setComposed(mapStateToProps, withVisibility, ClinicalRationale);
  export default composed;