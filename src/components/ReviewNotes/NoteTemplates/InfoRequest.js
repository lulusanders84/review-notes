

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { Divider, Button } from '@material-ui/core';
import TextInput from '../../Inputs/TextInput';
import PolicyInput from '../../Inputs/PolicyInput';
import InfoRequestNotes from '../../InfoRequestNotes/InfoRequestNotes';
import CodeAndService from '../../Inputs/CodeAndService';
import { saveInfoToPolicy } from '../../../utils/Inputs/savePair';
import { handleInputs } from '../../../redux/actions';
import { connect } from 'react-redux';
import PendInput from '../../Inputs/PendInput';
import ClaimInfoInputs from '../../Inputs/ClaimInfoInputs';
import RadioInput from '../../Inputs/RadioInput';

function InfoRequest(props) {
  const { classes, dispatch } = props;
  const onSaveClick = (value) => {
      saveInfoToPolicy(props.values)  
  }
  React.useEffect(() => {
    dispatch(handleInputs({name: "serviceType", value: "Info Request"}))
  }, [dispatch])
  
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:"  />
      <ClaimInfoInputs  />
      {props.values.claimType === "home"
        ?<TextInput id="sccf" placeholder="" label="SCCF:"  />
        : null
      }                      
      <PendInput  />
      <RadioInput id="relatedInfo" options={["new", "related"]} label="Request Type:" />
      {props.values["relatedInfo"] === "related"
        ? <div>
            <TextInput id="initialReq" placeholder="Enter number" label="Initial REQ-" />
            {props.values.claimType === "home" 
              ? <TextInput id="initialSccf" placeholder="Enter number" label="Initial SCCF" />
              : null 
            }
          </div>
        : null
      }
      <TextInput id="req" placeholder="Enter number" label="REQ-"   />
      <TextInput id="dos" placeholder="" label="Date of service"   />              
      <CodeAndService  />
      <PolicyInput  /> 
      <TextInput id="related" label="Related UM REQs:"  />
      <TextInput id="info" multiline={true} rows="5" label="Info To Request:"   />
      <Button onClick={onSaveClick}>
        Save Info to Policy
      </Button>
      <Divider variant="fullWidth" />
      <div className={classes.notes}>
        <InfoRequestNotes />
      </div>
      </div>
  );
}

export default connect()(InfoRequest);