

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { suggestions } from '../../../utils/AutoComplete';
import ReactSelectSingle from '../../Inputs/BaseInputs/ReactSelectSingle';
import TextInput from '../../Inputs/BaseInputs/TextInput';
import RadioInput from '../../Inputs/BaseInputs/RadioInput';
import MisrouteNotes from '../../MisrouteNotes/MisrouteNotes';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { handleInputs } from '../../../redux/actions';
import PendInput from '../../Inputs/PendInput';

function Misroute(props) {
  const { dispatch } = props;
  React.useEffect(() => {
    dispatch(handleInputs({name: "type", value: "Misroute"}))
  }, [dispatch]);
  const { classes, options } = props;
  return (
    <div>
      <TextInput id="name" placeholder="" label="Clinician:"  />
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" />      
      { props.values.lob !== "FEP" 
        ? <div>
              <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type"  />
              {props.values.claimType === "home" ? <TextInput id="sccf" placeholder="" label="SCCF:"  />
              : null}
        </div>
        : null}
      { props.values.lob === "commercial"
        ? <ReactSelectSingle id="special" suggestions={suggestions(["N/A", "employee", "foreign", "hormel", "host", ])} label="Specialty claim"  />             
        : null}                         
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System"  />             
      <PendInput  />  
      <TextInput id="req" placeholder="Enter number" label="REQ-"  />
      <TextInput id="code" placeholder="" label="Suspended Codes"  />
      <ReactSelectSingle id="type" placeholder="" label="Specific Type"  suggestions={JSON.parse(window.localStorage.getItem("type"))} />         
      <TextInput id="misrouteRationale" placeholder="" label="Misroute Rationale"  />
    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <MisrouteNotes />
    </div>
    </div>
  );
}

export default connect()(Misroute);