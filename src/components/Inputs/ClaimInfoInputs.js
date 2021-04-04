import React from 'react';
import RadioInput from './RadioInput';
import SimpleSelect from './SimpleSelect';
import { getOptions } from '../../utils/Inputs/inputOptions';
import { useSelector } from 'react-redux';

function ClaimInfoInputs() {
  const { lob, plan, special } = useSelector(state => state.values);
  return (
    <div>
    <RadioInput id="lob" options={getOptions("lobOptions")} label="LOB"  />      
      { lob === "GP"
        ? <RadioInput id="plan" options={getOptions("planOptions")} label="Plan"  />
        : null}
      { lob === "GP" && plan === "MAPD"
        ? <RadioInput id="claimType" options={getOptions("claimTypeOptions")} label="Claim Type"  />
        : null}   
      { lob === "commercial"
        ? <div>
            <SimpleSelect id="special" options={["N/A", "employee", "foreign", "hormel", "host", ]} label="Specialty claim"  />
            <RadioInput id="claimType" options={getOptions("claimTypeOptions")} label="Claim Type"  />
          </div>             
        : null}                         
      <RadioInput id="claimSystem" options={getOptions("claimSystemOptions", special)} label="Claim System"  />  
    </div>
  )
}


export default ClaimInfoInputs;