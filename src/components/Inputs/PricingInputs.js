import React from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import { makeStyles } from '@material-ui/core/styles';
import { setComposed, withConditionTest } from '../../HOCs';
import ReactSelectSingle from './ReactSelectSingle';
const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
  }
}));
function PricingInput(props) {
  const classes = useStyles();
  return (
    <div  className={classes.card}>
      <RadioInput id="pricing" options={["Not required", "PPPWeb", "DPW"]} label="Pricing"  />
      {props.values.pricing === "PPPWeb"
        ? <div>
            {props.values.lob === "GP"
              ? <ReactSelectSingle id="network" placeholder="" label="Network" suggestions={props.suggestions.networkSuggestions}  />
              : null
            }
           <TextInput id="compCode" placeholder="" label="Comparable code"  /> 
            <TextInput id="allowable" placeholder="" label="Allowable amount"  /> 
            <RadioInput id="msr" options={["Eligible", "Ineligible"]} label="MSR"  />          
          </div>
        : props.values.pricing === "DPW"
          ? <TextInput id="allowable" placeholder="" label="Allowable amount"  /> 
          : <RadioInput id="noPricingRationale" options={["Home claim", "POC provider", "Facility claim", "DME", "Lab", "Unclassified code with pricing in PPPWeb"]} label="Reason pricing is not required"  />
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  id: "pricingInputs",
  values: state.values,
  suggestions: state.suggestions
});

export default setComposed(mapStateToProps, withConditionTest, PricingInput)