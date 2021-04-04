import React from 'react';
import RadioInput from '../RadioInput';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Conditional from '../ConditionalInputs/conditionalInputs';
import { setComposed, withConditionTest } from '../../../HOCs';
import * as Fields from '../FieldInputs';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
    overflow: "visible"
  }
}));
function ReviewedInputs (props) {
  const classes = useStyles();
  return (
    <Card className={classes.card} >
      <Typography component="h3" variant="h6">Prior review details</Typography>
      <RadioInput id="paType" options={["PA", "related claim"]} label="Review type:"  />
      <Fields.Req id="paReq" /> 
      <Fields.Dos id="paDos" />
      <Fields.Diagnosis id="paDiagnosis" />
      <Fields.Provider id="paProvider" />             
      <RadioInput id="paDeter" options={["approved", "denied", "sent to medical director"]} label="Decision:"  />
      <Conditional.DeniedInputs denialId="paRationale" />
      <RadioInput id="paMatch" options={["yes", "no"]} label="Claim matches for diagnosis and provider?:"  />
    </Card>
  )
}

const mapStateToProps = (state) => ({
  id: "reviewedInputs",
  values: state.values,
});

export default setComposed(mapStateToProps, withConditionTest, ReviewedInputs)
