

import React from 'react';
import TextInput from '../../Inputs/TextInput';
import BackFromPeerNotes from '../../BackFromPeerNotes/BackFromPeerNotes';
import DeterInputs from '../../Inputs/DeterInputs';
import { Divider } from '@material-ui/core';
import { handleInputs } from '../../../redux/actions';
import { connect } from 'react-redux';
import PendInput from '../../Inputs/PendInput';
import ClaimInfoInputs from '../../Inputs/ClaimInfoInputs';

function BackFromPeer(props) {
  const { classes, dispatch } = props;
  React.useEffect(() => {
    dispatch(handleInputs({name: "serviceType", value: "Review Decision"}))
  }, [dispatch])
  return (
    <div style={{width: "100%"}}>
      <DeterInputs  />
      <ClaimInfoInputs  />           
      <TextInput id="req" placeholder="Enter number" label="REQ-"  />
      {props.values.denialType !== "entire claim" && props.values.deter === "deny"
        ?<TextInput id="code" placeholder="" label="Suspended Codes"  />
        : null
        }
      {props.values.deter === "approve"
        ? <div>
        <PendInput  />  
          </div>
        : null
      }

    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <BackFromPeerNotes />
    </div>
    </div>
  );
}

export default connect()(BackFromPeer);