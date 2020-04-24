import React from 'react';
import { saveFormatting } from '../../utils/Notes/saveFormatting';
import { connect } from 'react-redux'
import NoteContainer from './NoteContainer';

export function Info(props) {
    const { dos, info } = props.values;
    const infoContent = saveFormatting(info);
    return (
        <NoteContainer visible={props.visible}>
            <div>
                Info Requested: For {dos}:{infoContent} 
            </div>
        </NoteContainer>
    )
}
const mapStateToProps = (state) => ({
    values: state.values,
  });
  
  export default connect(mapStateToProps)(Info)