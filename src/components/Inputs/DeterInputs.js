import React from 'react';
import Checkbox from './Checkbox';
import CriteriaInputs from './CriteriaInputs';
import RadioInput from './RadioInput';
import { getOptions } from '../../utils/Inputs/inputOptions';
import Conditional from './ConditionalInputs/conditionalInputs';
import { useSelector } from 'react-redux';

function DeterInputs(props) {
  const { deter, allMet, disableAllMet } = useSelector(state => state.values);
  return (
    <div>
      <RadioInput id="deter" options={getOptions("deterOptions", null)} label="Determination" />
        {deter === "deny" 
          ? <Conditional.DeniedInputs denialId="rationale" />
          : deter === "send to medical director"
          ? <CriteriaInputs   /> 
          : <Checkbox id="allMet" value={allMet}  label="All crtieria met" disabled={disableAllMet} {...props} />
        }  
    </div>
  )
}

export default DeterInputs