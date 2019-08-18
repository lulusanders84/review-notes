import React from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
  }
}));
export default function (props) {
  const classes = useStyles();
  return (
    <div  className={classes.card}>
      <RadioInput id="pricing" options={["Not required", "PPPWeb", "DPW"]} label="Pricing" updateValue={props.handleInputs} values={props.values} />
      {props.values.pricing !== "Not required"
        ? <div>
            <TextInput id="compCode" placeholder="" label="Comparable code" onBlur={props.handleInputs} values={props.values} /> 
            <TextInput id="allowable" placeholder="" label="Allowable amount" onBlur={props.handleInputs} values={props.values} /> 
          </div>
        : <RadioInput id="noPricingRationale" options={["Home claim", "POC provider", "Facility claim"]} label="Reason pricing is not required" updateValue={props.handleInputs} values={props.values} />
      }
      <RadioInput id="msr" options={["Eligible", "Ineligible"]} label="MSR" updateValue={props.handleInputs} values={props.values} /> 
    </div>
  )
}