

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { suggestions } from '../../../utils/AutoComplete';
import ReactSelectSingle from '../../Inputs/ReactSelectSingle';
import TextInput from '../../Inputs/TextInput';
import RadioInput from '../../Inputs/RadioInput';
import MisrouteNotes from '../../MisrouteNotes/MisrouteNotes';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { handleInputs } from '../../../actions';
import PendInput from '../../Inputs/PendInput';

function Misroute(props) {
  const { dispatch } = props;
  React.useEffect(() => {
    dispatch(handleInputs({name: "type", value: "Misroute"}))
  }, [dispatch])
  const { classes, options } = props;
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:" updateValue={props.handleInputs} />
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={props.handleInputs}/>      
      { props.values.lob !== "FEP" 
        ? <div>
              <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" updateValue={props.handleInputs} />
              {props.values.claimType === "home" ? <TextInput id="sccf" placeholder="" label="SCCF:" updateValue={props.handleInputs} />
              : null}
        </div>
        : null}
      { props.values.lob === "commercial"
        ? <ReactSelectSingle id="special" suggestions={suggestions(["N/A", "employee", "foreign", "hormel", "host", ])} label="Specialty claim" updateValue={props.handleInputs} />             
        : null}                         
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System" updateValue={props.handleInputs} />             
      <PendInput updateValue={props.handleInputs} />  
      <TextInput id="req" placeholder="Enter number" label="REQ-" updateValue={props.handleInputs} />
      <TextInput id="code" placeholder="" label="Suspended Codes" updateValue={props.handleInputs} />
      <ReactSelectSingle id="type" placeholder="" label="Specific Type" updateValue={props.handleInputs} suggestions={JSON.parse(window.localStorage.getItem("type"))} />         
      <TextInput id="misrouteRationale" placeholder="" label="Misroute Rationale" updateValue={props.handleInputs} />
    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <MisrouteNotes />
    </div>
    </div>
  );
}

export default connect()(Misroute);