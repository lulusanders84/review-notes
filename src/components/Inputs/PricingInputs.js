import React from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
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
      <RadioInput id="pricing" options={["Not required", "PPPWeb", "DPW"]} label="Pricing" updateValue={props.handleInputs} />
      {props.values.pricing === "PPPWeb"
        ? <div>
            {props.values.lob === "GP"
              ? <ReactSelectSingle id="network" placeholder="" label="Network" updateValue={props.handleInputs} suggestions={props.suggestions.networkSuggestions}  />
              : null
            }
           <TextInput id="compCode" placeholder="" label="Comparable code" updateValue={props.handleInputs} /> 
            <TextInput id="allowable" placeholder="" label="Allowable amount" updateValue={props.handleInputs} /> 
            <RadioInput id="msr" options={["Eligible", "Ineligible"]} label="MSR" updateValue={props.handleInputs} />          
          </div>
        : props.values.pricing === "DPW"
          ? <TextInput id="allowable" placeholder="" label="Allowable amount" updateValue={props.handleInputs} /> 
          : <RadioInput id="noPricingRationale" options={["Home claim", "POC provider", "Facility claim", "DME", "Lab", "Unclassified code with pricing in PPPWeb"]} label="Reason pricing is not required" updateValue={props.handleInputs} />
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
  suggestions: state.suggestions
});

export default connect(mapStateToProps)(PricingInput)