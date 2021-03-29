import { Divider } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux'
import NoteContainer from './NoteContainer';

export function DenialLetter(props) {
    return (
        <NoteContainer visible={props.visible}>
            <div>
                <br />
                <Divider />
                <br />
                What is Not Covered or General Exclusions
            </div>
        </NoteContainer>
    )
}
const mapStateToProps = (state) => ({
    values: state.values,
  });
  
  export default connect(mapStateToProps)(DenialLetter)