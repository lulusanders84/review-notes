

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { Divider, Button } from '@material-ui/core';
import ReactSelectSingle from '../../Inputs/ReactSelectSingle';
import TextInput from '../../Inputs/TextInput';
import RadioInput from '../../Inputs/RadioInput';
import PolicyInput from '../../Inputs/PolicyInput';
import InfoRequestNotes from '../../InfoRequestNotes/InfoRequestNotes';
import CodeAndService from '../../Inputs/CodeAndService';
import SimpleSelect from '../../Inputs/SimpleSelect';
import { saveInfoToPolicy } from '../../../utils/Inputs/savePair';
import { handleInputs } from '../../../actions';
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
      <TextInput id="name" placeholder="" label="Clinician:" onBlur={props.handleInputs} />
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={props.handleInputs} />      
      { props.values.lob !== "FEP" 
        ? <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" updateValue={props.handleInputs} />
        : null}
      { props.values.lob === "commercial"
        ? <SimpleSelect id="special" options={["N/A", "employee", "foreign", "hormel", "host", ]} label="Specialty claim" updateValue={props.handleInputs} />             
        : null} 
      {props.values.claimType === "home"
        ?<TextInput id="sccf" placeholder="" label="SCCF:" onBlur={props.handleInputs} />
        : null
      }                      
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System" updateValue={props.handleInputs} />             
      <PendInput updateValue={props.handleInputs} />  
      <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={props.handleInputs}  />
      <TextInput id="dos" placeholder="" label="Date of service" onBlur={props.handleInputs}  />              
      <CodeAndService handleInputs={props.handleInputs}  linked={props.linked} onLinkClick={props.onLinkClick} handleServiceDisabled={props.handleServiceDisabled} serviceDisabled={props.serviceDisabled} />
      <ReactSelectSingle id="type" placeholder="" label="Specific Type" updateValue={props.handleInputs} suggestions={JSON.parse(window.localStorage.getItem("type"))} />
      <PolicyInput handleInputs={props.handleInputs} /> 
      <TextInput id="related" label="Related UM REQs:" onBlur={props.handleInputs} />
      <TextInput id="info" multiline={true} rows="5" label="Info To Request:"  onBlur={props.handleInputs} />
      <Button onClick={onSaveClick}>
        Save Info to Policy
      </Button>
      <Divider variant="fullWidth" />
      <div className={classes.notes}>
        <InfoRequestNotes values={props.values} />
      </div>
      </div>
  );
}

export default connect()(InfoRequest);