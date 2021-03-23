import React from 'react';
import * as utils from '../../utils'
import NoteContainer from './NoteContainer';
import { connect } from 'react-redux';

export function FaxAndDate(props) {
  const { claimType, sccf } = props.values;
  return (
    <NoteContainer visible={props.visible}>
      {claimType === 'home'
        ? <div>
            SCCF: {sccf}
          </div>
        : <div>
            Return Fax: 651-662-1235
            <br />Return Due Date: {utils.getTwoWeeksFromNow()}
          </div>
      }
    </NoteContainer>
  )   
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(FaxAndDate)