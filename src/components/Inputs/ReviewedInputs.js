import React, { useState } from 'react';
import TextInput from './BaseInputs/TextInput';
import RadioInput from './BaseInputs/RadioInput';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeniedInputs from './DeniedInputs';
import ReactSelectSingle from './BaseInputs/ReactSelectSingle';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
    overflow: "visible"
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
        <RadioInput id="pa-type" options={["PA", "related claim"]} label="Review type:"  />
        <TextInput id="pa-req" placeholder="Enter number" label="REQ-"  /> 
        <TextInput id="pa-dos" placeholder="" label="Date of Service:"  />
        <TextInput id="pa-diagnosis" placeholder="" label="Diagnosis:"  />
        <ReactSelectSingle id="pa-provider" placeholder="" label="Provider"   suggestions={JSON.parse(window.localStorage.getItem("provider"))} />             
        <RadioInput id="pa-deter" options={["approved", "denied"]} label="Decision:"  onChange={handlePriorDecision} />
        {rationale ? 
          <div>
            <DeniedInputs handleInputs={props.handleInputs} denialId="pa-rationale" rationaleValue={props.rationaleValue} />
            <TextInput id="clinical-rationale" multiline={true} rows="10" placeholder="" label="Clinical Rationale"  />

          </div>
           : null}
        <RadioInput id="pa-match" options={["yes", "no"]} label="Claim matches for diagnosis and provider?:"  />
      </Card>
    : null;
        

}
