import React from 'react';
import * as utils from '../../utils'
import NoteContainer from './NoteContainer';

export default function FaxAndDate(props) {
  return (
    <NoteContainer visible={props.visible}>
      <div>
        Return Fax: 651-662-1235
        <br />Return Due Date: {utils.getTwoWeeksFromNow()}
      </div>
    </NoteContainer>
  )   
}