import React from 'react';
import RadioInput from './RadioInput';
import { useSelector } from 'react-redux';
import Inputs from '../../classes/Inputs';
import inputs from '../../inputs/inputs';

function PaDeterInputs(props) {
  const { paDeter } = useSelector(state => state.values);
  const PaDenied = new Inputs(["paDenied"], inputs).getInput("paDenied");
  return (
    <div>
      <RadioInput id="paDeter" options={["approved", "denied", "pending decision"]} label="Determination:" />
        {paDeter === "denied" 
          ? <PaDenied />
          : paDeter === "pending decision"
        }  
    </div>
  )
}

export default PaDeterInputs