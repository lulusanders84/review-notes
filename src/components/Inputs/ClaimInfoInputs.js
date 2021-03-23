import React from 'react';
import RadioInput from './RadioInput';
import SimpleSelect from './SimpleSelect';
import {connect} from 'react-redux';
import { getOptions } from '../../utils/Inputs/inputOptions';

function ClaimInfoInputs(props) {

  return (
    <div>
    <RadioInput id="lob" options={getOptions("lobOptions")} label="LOB"  />      
      { props.values.lob === "GP"
        ? <RadioInput id="plan" options={getOptions("planOptions")} label="Plan"  />
        : null}
      { props.values.lob === "GP" && props.values.plan === "MAPD"
        ? <RadioInput id="claimType" options={getOptions("claimTypeOptions")} label="Claim Type"  />
        : null}   
      { props.values.lob === "commercial"
        ? <div>
            <SimpleSelect id="special" options={["N/A", "employee", "foreign", "hormel", "host", ]} label="Specialty claim"  />
            <RadioInput id="claimType" options={getOptions("claimTypeOptions")} label="Claim Type"  />
          </div>             
        : null}                         
      <RadioInput id="claimSystem" options={getOptions("claimSystemOptions", props.values.special)} label="Claim System"  />  
    </div>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(ClaimInfoInputs)