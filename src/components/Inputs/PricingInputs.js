import React from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
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
            <TextInput id="compCode" placeholder="" label="Comparable code" onBlur={props.handleInputs} /> 
            <TextInput id="allowable" placeholder="" label="Allowable amount" onBlur={props.handleInputs} /> 
            <RadioInput id="msr" options={["Eligible", "Ineligible"]} label="MSR" updateValue={props.handleInputs} />          
          </div>
        : props.values.pricing === "DPW"
          ? <TextInput id="allowable" placeholder="" label="Allowable amount" onBlur={props.handleInputs} /> 
          : <RadioInput id="noPricingRationale" options={["Home claim", "POC provider", "Facility claim"]} label="Reason pricing is not required" updateValue={props.handleInputs} />
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(PricingInput)