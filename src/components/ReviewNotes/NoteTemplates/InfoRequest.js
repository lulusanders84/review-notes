

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { Divider, Button } from '@material-ui/core';
import ReactSelectSingle from '../../Inputs/BaseInputs/ReactSelectSingle';
import TextInput from '../../Inputs/BaseInputs/TextInput';
import RadioInput from '../../Inputs/BaseInputs/RadioInput';
import PolicyInput from '../../Inputs/PolicyInput';
import InfoRequestNotes from '../../InfoRequestNotes/InfoRequestNotes';
import CodeAndService from '../../Inputs/CodeAndService';
import SimpleSelect from '../../Inputs/BaseInputs/SimpleSelect';
import { saveInfoToPolicy } from '../../../utils/Inputs/savePair';
import { handleInputs } from '../../../redux/actions';
import { connect } from 'react-redux';
import PendInput from '../../Inputs/PendInput';

function InfoRequest(props) {
  const { classes, options } = props;
  const onSaveClick = (value) => {
      saveInfoToPolicy(props.values)  
  }
  const { dispatch } = props;
  React.useEffect(() => {
    dispatch(handleInputs({name: "type", value: "Info Request"}))
  }, [dispatch])
  
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:"  />
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB"  />      
      { props.values.lob !== "FEP" 
        ? <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type"  />
        : null}
      { props.values.lob === "commercial"
        ? <SimpleSelect id="special" options={["N/A", "employee", "foreign", "hormel", "host", ]} label="Specialty claim"  />             
        : null} 
      {props.values.claimType === "home"
        ?<TextInput id="sccf" placeholder="" label="SCCF:"  />
        : null
      }                      
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System"  />             
      <PendInput  />  
      <TextInput id="req" placeholder="Enter number" label="REQ-"   />
      <TextInput id="dos" placeholder="" label="Date of service"   />              
      <CodeAndService handleInputs={props.handleInputs}  linked={props.linked} onLinkClick={props.onLinkClick} handleServiceDisabled={props.handleServiceDisabled} serviceDisabled={props.serviceDisabled} />
      <ReactSelectSingle id="type" placeholder="" label="Specific Type"  suggestions={JSON.parse(window.localStorage.getItem("type"))} />
      <PolicyInput handleInputs={props.handleInputs} /> 
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