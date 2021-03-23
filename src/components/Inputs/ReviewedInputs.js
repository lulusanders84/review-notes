import React from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeniedInputs from './DeniedInputs';
import { connect } from 'react-redux';
import { displayClinicalRationale } from '../../utils/Inputs/displayClinicalRationale';
import * as Fields from './FieldInputs';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
    overflow: "visible"
  }
}));
function ReviewedInputs (props) {
  const classes = useStyles();
  return props.values.reviewed === "yes"
    ? <Card className={classes.card} >
        <Typography component="h3" variant="h6">Prior review details</Typography>
        <RadioInput id="paType" options={["PA", "related claim"]} label="Review type:"  />
        <Fields.Req id="paReq" /> 
        <Fields.Dos id="paDos" />
        <Fields.Diagnosis id="paDiagnosis" />
        <Fields.Provider id="paProvider" />             
        <RadioInput id="paDeter" options={["approved", "denied"]} label="Decision:"  />
        {props.values.paDeter === "denied" 
          ? 
          <div>
            <DeniedInputs  denialId="paRationale" />
            { displayClinicalRationale(props.values["paRationale"])
              ? <TextInput id="clinicalRationale" multiline={true} rows="10" placeholder="" label="Clinical Rationale"  />
              : null
            }
            
          </div>
          : null}
        <RadioInput id="paMatch" options={["yes", "no"]} label="Claim matches for diagnosis and provider?:"  />
      </Card>
    : null;
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(ReviewedInputs)
