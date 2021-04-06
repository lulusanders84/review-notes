import React from 'react';
import Checkbox from './Checkbox';
import CriteriaInputs from './CriteriaInputs';
import RadioInput from './RadioInput';
import { getOptions } from '../../utils/Inputs/inputOptions';
import { useSelector } from 'react-redux';
import Inputs from '../../classes/Inputs';
import inputs from '../../inputs/inputs';

function DeterInputs(props) {
  const { deter, allMet, disableAllMet } = useSelector(state => state.values);
  const Denied = new Inputs(["denied"], inputs).getInput("denied")
  
  return (
    <div>
      <RadioInput id="deter" options={getOptions("deterOptions", null)} label="Determination" />
        {deter === "deny" 
          ? <Denied />
          : deter === "send to medical director"
          ? <CriteriaInputs   /> 
          : <Checkbox id="allMet" value={allMet}  label="All crtieria met" disabled={disableAllMet} {...props} />
        }  
    </div>
  )
}

export default DeterInputs