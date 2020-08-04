

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import TextInput from '../../Inputs/TextInput';
import MisrouteNotes from '../../MisrouteNotes/MisrouteNotes';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { handleInputs } from '../../../redux/actions';
import PendInput from '../../Inputs/PendInput';
import ClaimInfoInputs from '../../Inputs/ClaimInfoInputs';

function Misroute(props) {
  const { dispatch } = props;
  React.useEffect(() => {
    dispatch(handleInputs({name: "serviceType", value: "Misroute"}))
  }, [dispatch])
  const { classes } = props;
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:"  />
      <ClaimInfoInputs  />           
      <PendInput  />  
      <TextInput id="req" placeholder="Enter number" label="REQ-"  />
      <TextInput id="code" placeholder="" label="Suspended Codes"  />      
      <TextInput id="misrouteRationale" placeholder="" label="Misroute Rationale"  />
    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <MisrouteNotes />
    </div>
    </div>
  );
}

export default connect()(Misroute);