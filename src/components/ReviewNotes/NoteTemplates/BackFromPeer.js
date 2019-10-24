

// import policies from '../data/policies';
// import pdfToText from '../data/pdfToText';
// import policyDummy from '../data/policyDummy';

import React from 'react';
import { suggestions } from '../../../utils/AutoComplete';
import ReactSelect from '../../Inputs/ReactSelect';
import SimpleSelect from '../../Inputs/SimpleSelect';
import TextInput from '../../Inputs/TextInput';
import RadioInput from '../../Inputs/RadioInput';
import Checkbox from '../../Inputs/Checkbox';
import BackFromPeerNotes from '../../BackFromPeerNotes/BackFromPeerNotes';
import DeniedInputs from '../../Inputs/DeniedInputs';
import { Divider } from '@material-ui/core';
import CriteriaInputs from '../../Inputs/CriteriaInputs';
import { setPendOrder } from '../../../utils/ReviewNotes/savingPends/setPendOrder';

function BackFromPeer(props) {
  const { classes, options } = props;
  return (
    <div>
    <RadioInput id="deter" options={["approve", "deny"]} label="Determination" updateValue={props.handleInputs}/>
      {props.values.deter === "deny" 
        ? <DeniedInputs denialId="rationale" handleInputs={props.handleInputs} />
        : props.values.deter === "send to medical director"
          ? <CriteriaInputs handleInputs={props.handleInputs} /> 
          : <Checkbox id="allMet" value={props.values.allMet} updateValue={props.handleInputs} label="All crtieria met" disabled={props.disableAllMet} />
      }
      <RadioInput id="lob" options={["commercial", "FEP", "GP"]} label="LOB" updateValue={props.handleInputs}/>      
      { props.values.lob !== "FEP" 
        ? <RadioInput id="claimType" options={options.claimTypeOptions} label="Claim Type" updateValue={props.handleInputs}/>
        : null}
      { props.values.lob === "commercial"
        ? <SimpleSelect id="special" options={["N/A", "employee", "foreign", "hormel", "host", ]} label="Specialty claim" updateValue={props.handleInputs} />             
        : null}                          
      <RadioInput id="claimSystem" options={options.claimSystemOptions} label="Claim System" updateValue={props.handleInputs} />             
      <TextInput id="req" placeholder="Enter number" label="REQ-" onBlur={props.handleInputs} />
      {props.values.denialType !== "entire claim" && props.values.deter === "deny"
        ?<TextInput id="code" placeholder="" label="Suspended Codes" onBlur={props.handleInputs} />
        : null
        }
      {props.values.deter === "approve"
        ? <div>
            <ReactSelect id="pend" suggestions={suggestions(setPendOrder(options.pendOptions, props.values.lob))} label="Suspension" updateValue={props.handleInputs}  />             
          </div>
        : null
      }

    <Divider variant="fullWidth" />
    <div className={classes.notes}>
      <BackFromPeerNotes values={props.values} />
    </div>
    </div>
  );
}

export default BackFromPeer;