import React, { useState } from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeniedInputs from './DeniedInputs';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
  }
}));
export default function (props) {
  const classes = useStyles();
  const [rationale, setRationale] = useState(false);
  const handlePriorDecision = event => {
    if(event.target.value === "denied") {
      setRationale(true);
    } else setRationale(false);
  }
  return props.reviewed 
    ? <Card className={classes.card} >
        <Typography component="h3" variant="h6">Prior review details</Typography>
        <RadioInput id="pa-type" options={["PA", "related claim"]} label="Review type:" updateValue={props.handleInputs} values={props.values} />
        <TextInput id="pa-req" placeholder="Enter number" label="REQ-" onBlur={props.handleInputs} values={props.values} /> 
        <TextInput id="pa-dos" placeholder="" label="Date of Service:" onBlur={props.handleInputs} values={props.values} />
        <TextInput id="pa-diagnosis" placeholder="" label="Diagnosis:" onBlur={props.handleInputs} values={props.values} />
        <TextInput id="pa-provider" placeholder="" label="Provider:"  onBlur={props.handleInputs} values={props.values}/>
        <RadioInput id="pa-deter" options={["approved", "denied"]} label="Decision:" updateValue={props.handleInputs} onChange={handlePriorDecision} onBlur={props.handleInputs} values={props.values}/>
        {rationale ? 
          <div>
            <DeniedInputs handleInputs={props.handleInputs} denialId="pa-rationale" rationaleValue={props.rationaleValue} values={props.values} />
            <TextInput id="clinical-rationale" multiline={true} rows="10" placeholder="" label="Clinical Rationale" onBlur={props.handleInputs} values={props.values} />

          </div>
           : null}
        <RadioInput id="pa-match" options={["yes", "no"]} label="Claim matches for diagnosis and provider?:" updateValue={props.handleInputs} values={props.values} />
      </Card>
    : null;
        

}
