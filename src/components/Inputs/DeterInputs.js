import React from 'react';
import Checkbox from './Checkbox';
import CriteriaInputs from './CriteriaInputs';
import RadioInput from './RadioInput';
import { setComposed, withConditionTest } from '../../HOCs';
import { getOptions } from '../../utils/Inputs/inputOptions';
import Conditional from './ConditionalInputs/conditionalInputs';

function DeterInputs(props) {
  return (
    <div>
      <RadioInput id="deter" options={getOptions("deterOptions", null, props.addOptions)} label="Determination" />
        {props.values.deter === "deny" 
          ? <Conditional.DeniedInputs denialId="rationale"  />
          : props.values.deter === "send to medical director"
          ? <CriteriaInputs   /> 
          : <Checkbox id="allMet" label="All crtieria met" disabled={props.values.disableAllMet} />
        }  
    </div>
  )
}

const mapStateToProps = (state) => ({
  id: "deterInputs",
  values: state.values,
});

export default setComposed(mapStateToProps, withConditionTest, DeterInputs)