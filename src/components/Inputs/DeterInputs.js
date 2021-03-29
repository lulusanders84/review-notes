import React from 'react';
import Checkbox from './Checkbox';
import CriteriaInputs from './CriteriaInputs';
import RadioInput from './RadioInput';
import {connect} from 'react-redux';
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
          : <Checkbox id="allMet" value={props.values.allMet}  label="All crtieria met" disabled={props.values.disableAllMet} {...props} />
        }  
    </div>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(DeterInputs)