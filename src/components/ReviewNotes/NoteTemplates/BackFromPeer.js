

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import ReactSelectSingle from '../../Inputs/BaseInputs/ReactSelectSingle';
import SimpleSelect from '../../Inputs/BaseInputs/SimpleSelect';
import TextInput from '../../Inputs/BaseInputs/TextInput';
import RadioInput from '../../Inputs/BaseInputs/RadioInput';
import BackFromPeerNotes from '../../BackFromPeerNotes/BackFromPeerNotes';
import DeniedInputs from '../../Inputs/DeniedInputs';
import { Divider } from '@material-ui/core';
import { handleInputs } from '../../../redux/actions';
import { connect } from 'react-redux';
import PendInput from '../../Inputs/PendInput';

function BackFromPeer(props) {
  const { classes, options } = props;
  const { dispatch } = props;
  React.useEffect(() => {
    dispatch(handleInputs({name: "type", value: "Review Decision"}))
  }, [dispatch])
  return (
    <div style={{width: "100%"}}>
    <RadioInput id="deter" options={["approve", "deny"]} label="Determination" />
      {props.values.deter === "deny" 
        ? <DeniedInputs denialId="rationale" handleInputs={props.handleInputs} />
        : null
      }
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" />      
      { props.values.lob !== "FEP" 
        ? <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" />
        : null}
      { props.values.lob === "commercial"
        ? <SimpleSelect id="special" options={["N/A", "employee", "foreign", "hormel", "host", ]} label="Specialty claim"  />             
        : null}                          
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System"  />             
      <TextInput id="req" placeholder="Enter number" label="REQ-"  />
      {props.values.denialType !== "entire claim" && props.values.deter === "deny"
        ?<TextInput id="code" placeholder="" label="Suspended Codes"  />
        : null
        }
        <ReactSelectSingle id="type" placeholder="" label="Specific Type"  suggestions={JSON.parse(window.localStorage.getItem("type"))} />
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